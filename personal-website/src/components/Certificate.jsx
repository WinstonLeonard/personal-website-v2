import { useEffect, useRef, useState } from "react";
import "../App.css";
import "../index.css";

// Lightweight PDF preview using <embed> for compatibility without extra deps
// Props:
// - src: string (required) URL/path to the PDF
// - title: string (optional) accessible label/title
// - thumbnailHeight: number (optional) height of the inline preview in px (default 200)
// - className: string (optional) extra classnames for the wrapper
function Certificate({
  src,
  title = "Certificate PDF",
  thumbnailHeight = 200,
  className = "",
}) {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") setIsOpen(false);
    }
    if (isOpen) {
      document.addEventListener("keydown", onKeyDown);
    } else {
      document.removeEventListener("keydown", onKeyDown);
    }
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <div
      className={className}
      style={{ display: "flex", flexDirection: "column", gap: 8 }}
    >
      <div
        role="button"
        tabIndex={0}
        onClick={() => setIsOpen(true)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") setIsOpen(true);
        }}
        aria-label={`Open ${title}`}
        style={{
          border: "1px solid rgba(0,0,0,0.1)",
          borderRadius: 8,
          overflow: "hidden",
          cursor: "pointer",
          background: "#fff",
          boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
        }}
      >
        {/* Inline PDF preview via <embed>. Some browsers show first page thumbnail-like view. */}
        <embed
          src={src}
          type="application/pdf"
          style={{ width: "100%", height: thumbnailHeight }}
        />
      </div>

      {isOpen && (
        <div
          ref={modalRef}
          role="dialog"
          aria-modal="true"
          aria-label={title}
          onClick={(e) => {
            if (e.target === modalRef.current) setIsOpen(false);
          }}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            padding: 16,
          }}
        >
          <div
            style={{
              position: "relative",
              width: "90%",
              height: "90%",
              background: "#111",
              borderRadius: 10,
              overflow: "hidden",
              boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
            }}
          >
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close"
              style={{
                position: "absolute",
                top: 8,
                right: 8,
                zIndex: 2,
                background: "rgba(255,255,255,0.9)",
                color: "#111",
                border: "none",
                borderRadius: 6,
                padding: "8px 10px",
                cursor: "pointer",
                fontWeight: 600,
              }}
            >
              Close
            </button>
            <embed
              src={src}
              type="application/pdf"
              style={{ width: "100%", height: "100%", display: "block" }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Certificate;
