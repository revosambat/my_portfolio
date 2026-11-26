import os
import time
import ftplib
from pathlib import Path


# ==============================
# InfinityFree FTP Configuration
# ==============================

FTP_HOST = os.environ.get("INFINITY_FTP_HOST")
FTP_USER = os.environ.get("INFINITY_FTP_USER")
FTP_PASSWORD = os.environ.get("INFINITY_FTP_PASSWORD")

REMOTE_DIR = "/htdocs"
BUILD_DIR = Path("build")

FTP_TIMEOUT = 60
MAX_ATTEMPTS = 5
UPLOAD_DELAY = 0.4


# ==============================
# Validation
# ==============================

if not FTP_HOST or not FTP_USER or not FTP_PASSWORD:
    raise RuntimeError(
        "Missing InfinityFree FTP credentials.\n"
        "Set INFINITY_FTP_HOST, INFINITY_FTP_USER and "
        "INFINITY_FTP_PASSWORD first."
    )

if not BUILD_DIR.exists():
    raise RuntimeError(
        "build/ directory does not exist.\n"
        "Run `yarn build` first."
    )


# ==============================
# FTP Helpers
# ==============================

ftp = None


def create_connection():
    client = ftplib.FTP()
    client.connect(FTP_HOST, 21, timeout=FTP_TIMEOUT)
    client.login(FTP_USER, FTP_PASSWORD)
    client.set_pasv(True)
    return client


def connection():
    global ftp
    if ftp is None:
        ftp = create_connection()
    return ftp


def drop_connection():
    global ftp
    if ftp is not None:
        try:
            ftp.quit()
        except ftplib.all_errors:
            ftp.close()
        ftp = None


def ensure_remote_directory(client, remote_path):
    parts = remote_path.strip("/").split("/")

    client.cwd("/")

    for part in parts:
        try:
            client.cwd(part)
        except ftplib.error_perm:
            client.mkd(part)
            client.cwd(part)


def upload_file(local_file, remote_dir):
    remote_name = local_file.name

    for attempt in range(1, MAX_ATTEMPTS + 1):
        try:
            client = connection()
            ensure_remote_directory(client, remote_dir)

            with open(local_file, "rb") as file:
                client.storbinary(f"STOR {remote_name}", file)
            return
        except ftplib.all_errors as error:
            drop_connection()

            if attempt == MAX_ATTEMPTS:
                raise RuntimeError(
                    f"Failed to upload {remote_name} after {attempt} attempts: {error}"
                ) from error

            wait = 2 * attempt
            print(f"  Retrying {remote_name} in {wait}s ({attempt}/{MAX_ATTEMPTS})...")
            time.sleep(wait)


def upload_directory(local_dir, remote_dir):
    ensure_remote_directory(connection(), remote_dir)

    for item in sorted(local_dir.iterdir()):
        remote_path = remote_dir.rstrip("/") + "/" + item.name

        if item.is_dir():
            upload_directory(item, remote_path)
        else:
            print(f"Uploading: {item}")
            upload_file(item, remote_dir)
            time.sleep(UPLOAD_DELAY)


# ==============================
# Deployment
# ==============================

print("================================")
print(" InfinityFree Deployment")
print("================================")

print(f"Build directory: {BUILD_DIR}")
print(f"FTP host: {FTP_HOST}")
print(f"Remote directory: {REMOTE_DIR}")
print()

print("Connecting to InfinityFree...")
connection()
print("FTP connection successful.")

print("Uploading build...")

try:
    upload_directory(BUILD_DIR, REMOTE_DIR)
finally:
    drop_connection()

print()
print("================================")
print(" Deployment completed!")
print("================================")
