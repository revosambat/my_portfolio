import os
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

def ensure_remote_directory(ftp, remote_path):
    parts = remote_path.strip("/").split("/")

    ftp.cwd("/")

    for part in parts:
        try:
            ftp.cwd(part)
        except ftplib.error_perm:
            ftp.mkd(part)
            ftp.cwd(part)


def upload_file(ftp, local_file, remote_file):
    remote_dir = os.path.dirname(remote_file)

    if remote_dir:
        ensure_remote_directory(ftp, remote_dir)

    with open(local_file, "rb") as file:
        ftp.storbinary(
            f"STOR {os.path.basename(remote_file)}",
            file
        )


def upload_directory(ftp, local_dir, remote_dir):
    ensure_remote_directory(ftp, remote_dir)

    for item in local_dir.iterdir():

        remote_path = (
            remote_dir.rstrip("/")
            + "/"
            + item.name
        )

        if item.is_dir():
            upload_directory(
                ftp,
                item,
                remote_path
            )

        else:
            print(f"Uploading: {item}")

            ensure_remote_directory(
                ftp,
                remote_dir
            )

            with open(item, "rb") as file:
                ftp.storbinary(
                    f"STOR {item.name}",
                    file
                )


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

ftp = ftplib.FTP()
ftp.connect(FTP_HOST, 21, timeout=30)
ftp.login(FTP_USER, FTP_PASSWORD)

print("FTP connection successful.")

print("Uploading build...")

upload_directory(
    ftp,
    BUILD_DIR,
    REMOTE_DIR
)

ftp.quit()

print()
print("================================")
print(" Deployment completed!")
print("================================")