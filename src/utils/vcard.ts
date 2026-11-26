import { resumeProfile } from '../constants/resume';

function escapeValue(value: string) {
  return value
    .replace(/\\/g, '\\\\')
    .replace(/;/g, '\\;')
    .replace(/,/g, '\\,')
    .replace(/\r?\n/g, '\\n');
}

function currentPageUrl() {
  return window.location.href.split('#')[0].split('?')[0];
}

export function buildVcard() {
  const { name, title, location, contact } = resumeProfile;
  const locality = location.split(',')[0].trim();
  const lines = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `N:Das;${name.split(' ').slice(1).join(' ')};;;`,
    `FN:${escapeValue(name)}`,
    `TITLE:${escapeValue(title)}`,
    `TEL;TYPE=CELL:${contact.phone.replace(/\s/g, '')}`,
    `EMAIL;TYPE=INTERNET:${contact.email}`,
    `URL;TYPE=WORK:${currentPageUrl()}`,
    `URL:${contact.linkedin}`,
    `ADR;TYPE=WORK:;;;${escapeValue(locality)};;;Malta`,
    'END:VCARD',
  ];

  return `${lines.join('\r\n')}\r\n`;
}

export function downloadVcard() {
  const blob = new Blob([buildVcard()], { type: 'text/vcard;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'sambat-das.vcf';
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 0);
}
