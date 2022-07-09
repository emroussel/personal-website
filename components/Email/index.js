import { useState, useEffect, useContext } from "react";
import { ExternalLink } from "../ExternalLink";
import { CopyEmailContext } from "../../providers/copy-email";

export function Email({ className }) {
  const [isClipboardSupported, setIsClipboardSupported] = useState(false);

  const { showCopyEmailToast } = useContext(CopyEmailContext);

  useEffect(() => {
    setIsClipboardSupported(
      !!(navigator.clipboard && navigator.clipboard.writeText)
    );
  }, []);

  return isClipboardSupported ? (
    <>
      <button
        className={className}
        onClick={() => {
          navigator.clipboard.writeText("emmanuel@emroussel.com");
          showCopyEmailToast();
        }}
        aria-label="emmanuel@emroussel.com, copy email to clipboard"
      >
        emmanuel@emroussel.com
      </button>
    </>
  ) : (
    <ExternalLink href="mailto:emmanuel@emroussel.com" className={className}>
      emmanuel@emroussel.com
    </ExternalLink>
  );
}
