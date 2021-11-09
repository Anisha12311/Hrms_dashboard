import React, { useState } from "react";
import "./PaySlip.scss";
import pdf from "../../../../asserts/icons/pdf.png";
import download from "../../../../asserts/icons/download.png";

import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

export default function PaySlips() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <div style={{ display: "flex", justifyContent: "start" }}>
      <div style={{marginLeft : "55rem", display: "", marginTop: "1rem" }}>
        <h3 style={{ color: "#515151", position: "relative", top: "3rem",fontSize : "3.5rem" }}>
          Pay Slip(january)
        </h3>

        <div className='pdf-box'>
          <div className='pdf-page'>
            <Document
              file={{
                url: "https://job-market-ai.s3.ap-south-1.amazonaws.com/users/resume/4cdcaa22-170c-4a36-830e-f0704354d229.pdf",
              }}
              onLoadSuccess={onDocumentLoadSuccess}>
              <Page
                pageNumber={pageNumber}
                style={{ display: "flex", justifyContent: "center" }}
              />
            </Document>
          </div>
          <div className='pdf-bottom'>
            <div className='pdf-bottom-left'>
              <img alt='text' src={pdf}></img>
              <p style={{ marginLeft: "1rem" ,fontSize : "3rem" ,marginTop : "4rem"}}>
                Salary Slip
                <br></br>
                <p style={{ fontSize: "2rem " }}>PDF-5MB</p>
              </p>
            </div>
            <img
              alt='text'
              src={download}
              style={{ height: "2rem", marginTop: "4rem" }}></img>
          </div>
        </div>

        <div className='pdf-box'>
          <div className='pdf-page'>
            <Document
              file={{
                url: "https://job-market-ai.s3.ap-south-1.amazonaws.com/users/resume/4cdcaa22-170c-4a36-830e-f0704354d229.pdf",
              }}
              onLoadSuccess={onDocumentLoadSuccess}>
              <Page
                pageNumber={pageNumber}
                style={{ display: "flex", justifyContent: "center" }}
              />
            </Document>
          </div>
          <div className='pdf-bottom'>
            <div className='pdf-bottom-left'>
              <img alt='text' src={pdf}></img>
              <p style={{ marginLeft: "1rem",fontSize : "3rem" ,marginTop : "4rem" }}>
                Salary Slip
                <br></br>
                <p style={{ fontSize: "2rem " }}>PDF-5MB</p>
              </p>
            </div>
            <img
              alt='text'
              src={download}
              style={{ height: "2rem", marginTop: "4rem"}}></img>
          </div>
        </div>
      </div>

      <div style={{ display: "", marginTop: "1rem" }}>
        <h3 style={{ color: "#515151", position: "relative", top: "3rem" ,fontSize : "3.5rem" }}>
          Pay Slip(january)
        </h3>

        <div className='pdf-box'>
          <div className='pdf-page'>
            <Document
              file={{
                url: "https://job-market-ai.s3.ap-south-1.amazonaws.com/users/resume/4cdcaa22-170c-4a36-830e-f0704354d229.pdf",
              }}
              onLoadSuccess={onDocumentLoadSuccess}>
              <Page
                pageNumber={pageNumber}
                style={{ display: "flex", justifyContent: "center" }}
              />
            </Document>
          </div>
          <div className='pdf-bottom'>
            <div className='pdf-bottom-left'>
              <img alt='text' src={pdf}></img>
              <p style={{ marginLeft: "1rem" ,fontSize : "3rem" ,marginTop : "4rem"}}>
                Salary Slip
                <br></br>
                <p style={{ fontSize: "2rem " }}>PDF-5MB</p>
              </p>
            </div>
            <img
              alt='text'
              src={download}
              style={{ height: "2rem", marginTop: "4rem" }}></img>
          </div>
        </div>

        <div className='pdf-box'>
          <div className='pdf-page'>
            <Document
              file={{
                url: "https://job-market-ai.s3.ap-south-1.amazonaws.com/users/resume/4cdcaa22-170c-4a36-830e-f0704354d229.pdf",
              }}
              onLoadSuccess={onDocumentLoadSuccess}>
              <Page
                pageNumber={pageNumber}
                style={{ display: "flex", justifyContent: "center" }}
              />
            </Document>
          </div>
          <div className='pdf-bottom'>
            <div className='pdf-bottom-left'>
              <img alt='text' src={pdf}></img>
              <p style={{ marginLeft: "1rem",fontSize : "3rem" ,marginTop : "4rem" }}>
                Salary Slip
                <br></br>
                <p style={{ fontSize: "2rem " }}>PDF-5MB</p>
              </p>
            </div>
            <img
              alt='text'
              src={download}
              style={{ height: "2rem", marginTop: "4rem"}}></img>
          </div>
        </div>
      </div>

      <div style={{ display: "", marginTop: "1rem" }}>
        <h3 style={{ color: "#515151", position: "relative", top: "3rem" ,fontSize : "3.5rem" }}>
          Pay Slip(january)
        </h3>

        <div className='pdf-box'>
          <div className='pdf-page'>
            <Document
              file={{
                url: "https://job-market-ai.s3.ap-south-1.amazonaws.com/users/resume/4cdcaa22-170c-4a36-830e-f0704354d229.pdf",
              }}
              onLoadSuccess={onDocumentLoadSuccess}>
              <Page
                pageNumber={pageNumber}
                style={{ display: "flex", justifyContent: "center" }}
              />
            </Document>
          </div>
          <div className='pdf-bottom'>
            <div className='pdf-bottom-left'>
              <img alt='text' src={pdf}></img>
              <p style={{ marginLeft: "1rem" ,fontSize : "3rem" ,marginTop : "4rem"}}>
                Salary Slip
                <br></br>
                <p style={{ fontSize: "2rem " }}>PDF-5MB</p>
              </p>
            </div>
            <img
              alt='text'
              src={download}
              style={{ height: "2rem", marginTop: "4rem" }}></img>
          </div>
        </div>

        <div className='pdf-box'>
          <div className='pdf-page'>
            <Document
              file={{
                url: "https://job-market-ai.s3.ap-south-1.amazonaws.com/users/resume/4cdcaa22-170c-4a36-830e-f0704354d229.pdf",
              }}
              onLoadSuccess={onDocumentLoadSuccess}>
              <Page
                pageNumber={pageNumber}
                style={{ display: "flex", justifyContent: "center" }}
              />
            </Document>
          </div>
          <div className='pdf-bottom'>
            <div className='pdf-bottom-left'>
              <img alt='text' src={pdf}></img>
              <p style={{ marginLeft: "1rem" ,fontSize : "3rem" ,marginTop : "4rem"}}>
                Salary Slip
                <br></br>
                <p style={{ fontSize: "2rem " }}>PDF-5MB</p>
              </p>
            </div>
            <img
              alt='text'
              src={download}
              style={{ height: "2rem", marginTop: "4rem"}}></img>
          </div>
        </div>
      </div>
    </div>
  );
}
