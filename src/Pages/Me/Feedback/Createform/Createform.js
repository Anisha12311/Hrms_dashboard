import React, { useState } from "react";

import pdf from "../../../../asserts/icons/pdf.png";
import download from "../../../../asserts/icons/download.png";

import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import FormState from "./FormState/FormState";

export default function Createform() {
    const [numPages,setNumPages] = useState(true)
    const [pageNumber,setPageNumber] = useState(true)
    const [create , setCreate] = useState(true)

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <div style={{ display: "flex", justifyContent: "start" }}>
      <div style={{marginLeft : "55rem", display: "", marginTop: "1rem" }} onClick = {()=> setCreate(true)}>
        <h3 style={{ color: "#515151", position: "relative", top: "3rem",fontSize : "3.5rem" }}>
          Create New
        </h3>

        <div className='pdf-box'style = {{marginTop : "14rem"}}>
          <div className='pdf-page' >
              <div className = "add_create" style = {{marginLeft : "150px",marginTop : "70px", fontSize : "9rem"}}>+</div>
          </div>
          
        </div>
      </div>

      <div style={{ display: "", marginTop: "1rem" }}>
        <h3 style={{ color: "#515151", position: "relative", top: "3rem" ,fontSize : "3.5rem" }}>
         FeedForm-1
        </h3>

        <div className='pdf-box' style = {{marginTop : "14rem",marginLeft : "5rem"}}>
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
         
        </div>

       
      </div>


      <div style={{ display: "", marginTop: "1rem" }}>
        <h3 style={{ color: "#515151", position: "relative", top: "3rem" ,fontSize : "3.5rem" }}>
         FeedForm-1
        </h3>

        <div className='pdf-box' style = {{marginTop : "14rem",marginLeft : "5rem"}}>
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
         
        </div>

       
      </div>

{create && (
    <FormState setCreate = {setCreate}></FormState>
)}
    </div>
  );
}
