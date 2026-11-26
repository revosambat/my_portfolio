import { downloadVcard } from '../utils/vcard';

export default function VcardButton() {
  return (
    <button className="vcard-button" type="button" onClick={downloadVcard}>
      Save to contacts ↓
    </button>
  );
}
