import AnimatedHeader from "../components/AnimatedHeader";
import React, { useState } from "react";
import { pdfjs, Document, Page } from "react-pdf";

// Configure pdf.js worker
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const CertificateCard = ({ certificate }) => {
  const [showModal, setShowModal] = useState(false);
  const [numPages, setNumPages] = useState(null);

  return (
    <>
      {/* Certificate Card */}
      <div
        className="group cursor-pointer"
        data-aos="zoom-in-up"
        data-aos-duration="700"
        onClick={() => setShowModal(true)}
      >
        <div className="flex flex-grow overflow-hidden rounded-xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg border border-white/10 shadow-2xl transition-all duration-300 group-hover:shadow-purple-500/20">
          <div className="flex-grow absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
          <div className="flex flex-grow relative flex-col w-full h-65 md:h-80 p-2">
            <div className="w-full h-[85%] flex items-center justify-center overflow-hidden rounded-xl bg-gray-900 relative">
              {/* Mini preview using first PDF page */}
              <Document
                file={certificate.pdfUrl}
                onLoadSuccess={({ numPages }) => setNumPages(numPages)}
                loading={<p className="text-gray-400">Loading...</p>}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Page
                  pageNumber={1}
                  scale={0.4}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                  className="rounded-lg"
                />
              </Document>
            </div>
            <div className="items-start justify-start text-left group p-2">
              <p className="text-lg font-semibold bg-gradient-to-r from-blue-200 via-white-200 to-purple-200 bg-clip-text text-transparent">
                {certificate.name}
              </p>
            </div>
            <div className="absolute inset-0 border border-white/0 group-hover:border-purple-500/50 rounded-xl transition-colors duration-300 -z-50"></div>
          </div>
        </div>
      </div>

      {/* Modal with full-size PDF */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div
            className="bg-white rounded-xl shadow-2xl p-6 w-[50%] md:w-[30%] max-w-3xl
                 max-h-[90vh] relative flex flex-col overflow-hidden"
          >
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-purple-600 text-2xl"
              onClick={() => setShowModal(false)}
            >
              ×
            </button>

            {/* scroll area */}
            <div className="flex-1 overflow-y-auto pr-2">
              <Document
                file={certificate.pdfUrl}
                onLoadSuccess={({ numPages }) => setNumPages(numPages)}
                loading={<p className="text-gray-400">Loading PDF...</p>}
                className="flex flex-col items-center"
              >
                {Array.from({ length: numPages }, (_, index) => (
                  <Page
                    key={index}
                    pageNumber={index + 1}
                    scale={0.65}
                    renderAnnotationLayer={false}
                    renderTextLayer={false}
                  />
                ))}
              </Document>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const Certificates = () => {
  return (
    <>
      <AnimatedHeader Title={"Certificates"} />
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(340px,_1fr))] md:grid-cols-[repeat(auto-fit,_minmax(400x,_1fr))] max-w-[90%] mx-auto gap-x-5 gap-y-5 mt-10">
        <CertificateCard
          certificate={{
            name: "Certificate Title",
            description:
              "This is a preview of your certificate. Click to view.",
            pdfUrl: "/certificate.pdf",
          }}
        />
      </div>
    </>
  );
};

export default Certificates;
