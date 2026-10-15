import React from 'react';
import { cssStyle } from './viewUtils';
import { LAB_REPORT_DOWNLOAD_NAME, LAB_REPORT_PDF_URL } from './labReport';

const variants = {
  light: {
    className: 'interactive-6',
    style:
      'display:inline-flex;align-items:center;justify-content:center;min-height:48px;padding:0 24px;border-radius:999px;background:#0F3F21;color:#F8F3EC;font:600 14px \'DM Sans\',sans-serif;border:none;cursor:pointer;text-decoration:none',
  },
  dark: {
    className: '',
    style:
      'display:inline-flex;align-items:center;justify-content:center;min-height:48px;padding:0 24px;border-radius:999px;background:#F8F3EC;color:#0F3F21;font:600 14px \'DM Sans\',sans-serif;border:none;cursor:pointer;text-decoration:none',
  },
  outline: {
    className: 'interactive-6',
    style:
      'display:inline-flex;align-items:center;justify-content:center;min-height:48px;padding:0 24px;border-radius:999px;background:transparent;color:#0F3F21;font:600 14px \'DM Sans\',sans-serif;border:1.5px solid rgba(15,63,33,.26);cursor:pointer;text-decoration:none',
  },
};

export default function LabReportDownloadLink({ children, variant = 'light', className = '' }) {
  const v = variants[variant] || variants.light;
  return (
    <a
      href={LAB_REPORT_PDF_URL}
      download={LAB_REPORT_DOWNLOAD_NAME}
      target="_blank"
      rel="noopener noreferrer"
      className={[v.className, className].filter(Boolean).join(' ')}
      style={cssStyle(v.style)}
    >
      {children}
    </a>
  );
}
