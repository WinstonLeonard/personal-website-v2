import AnimatedHeader from "../components/AnimatedHeader";
import React, { useState } from "react";
import { pdfjs, Document, Page } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const CertificateCard = ({ certificate }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div
        className="group cursor-pointer"
        data-aos="zoom-in-up"
        data-aos-duration="700"
        onClick={() => setShowModal(true)}
      >
        <div className="flex flex-grow overflow-hidden rounded-xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg border border-white/10 shadow-2xl transition-all duration-300 group-hover:shadow-purple-500/20">
          <div className="flex-grow absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
          <div className="flex flex-grow relative flex-col w-full h-65 md:h-80 relative p-2">
            <div className="w-full h-[85%] flex items-center justify-center overflow-hidden rounded-xl bg-gray-900">
              <div
                className="absolute inset-0 bg-transparent z-10 overflow-hidden cursor-pointer"
                onClick={() => setShowModal(true)} // Open the modal when clicked
              ></div>
              <iframe
                src={certificate.pdfUrl + "#toolbar=0"}
                title="Certificate Preview"
                className="w-full h-full rounded-lg border no-scrollbar overflow-hidden"
              ></iframe>
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
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-2xl p-6 max-w-[380px] md:max-w-3xl w-[80%] relative">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-purple-600 text-2xl"
              onClick={() => setShowModal(false)}
            >
              ×
            </button>
            <div className="relative w-full pb-[141%] md:pb-[70%]">
              <iframe
                src={`${certificate.pdfUrl}#toolbar=0&zoom=fitH`}
                title="Certificate Preview"
                className="absolute top-0 left-0 w-full h-full rounded-lg border"
              ></iframe>
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
        <CertificateCard
          certificate={{
            name: "Certificate Title",
            description:
              "This is a preview of your certificate. Click to view.",
            pdfUrl: "/path/to/certificate.pdf",
          }}
        />
        <CertificateCard
          certificate={{
            name: "Certificate Title",
            description:
              "This is a preview of your certificate. Click to view.",
            pdfUrl: "/path/to/certificate.pdf",
          }}
        />
        <CertificateCard
          certificate={{
            name: "Certificate Title",
            description:
              "This is a preview of your certificate. Click to view.",
            pdfUrl: "/path/to/certificate.pdf",
          }}
        />
        <CertificateCard
          certificate={{
            name: "Certificate Title",
            description:
              "This is a preview of your certificate. Click to view.",
            pdfUrl: "/path/to/certificate.pdf",
          }}
        />
      </div>
    </>
  );
};

export default Certificates;
