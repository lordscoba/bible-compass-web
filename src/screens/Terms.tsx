import { Footer, Nav } from "../components/layout";
import { TermsBody } from "../components/terms";

const Terms = () => {
  return (
    <div>
      <Nav />
      <TermsBody />
      <Footer />
    </div>
  );
};

export default Terms;

// import { useState } from "react";
// import { Document, Page, pdfjs } from "react-pdf";
// import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// import "react-pdf/dist/esm/Page/TextLayer.css";
// import { Footer } from "../components/layout";

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   `https://cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`,
//   import.meta.url
// ).toString();

// const Terms = () => {
//   const [numPages, setNumPages] = useState<number | undefined>();
//   let [pageNumber, setPageNumber] = useState<number>(1);

//   function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
//     setNumPages(numPages);
//   }

//   let TermsOfServices = "./pdfs/Terms-of-Service.pdf";
//   return (
//     <div className="overflow-x-hidden">
//       <div className="flex flex-col justify-center p-3 md:p-7 overflow-x-scroll">
//         <div className="mx-auto">
//           <Document
//             file={TermsOfServices}
//             onLoadSuccess={onDocumentLoadSuccess}
//           >
//             <Page pageNumber={pageNumber} />
//           </Document>
//           <div className="">
//             Page {pageNumber} of {numPages}
//           </div>
//         </div>
//         <div className="flex gap-3 mx-auto">
//           <button
//             disabled={pageNumber <= 1}
//             onClick={() => {
//               pageNumber < 1 ? setPageNumber(3) : setPageNumber(--pageNumber);
//             }}
//             className="p-2 bg-teal-400 rounded-md text-white disabled:bg-slate-500"
//           >
//             Previous
//           </button>
//           <button
//             disabled={pageNumber >= numPages!}
//             onClick={() => {
//               pageNumber > numPages!
//                 ? setPageNumber(1)
//                 : setPageNumber(++pageNumber);
//             }}
//             className="p-2 bg-teal-400 rounded-md text-white disabled:bg-slate-500"
//           >
//             Next
//           </button>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Terms;
