
import React, { useEffect, useRef, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { PDFDocument } from 'pdf-lib';
import axios from 'axios';
import { endPoints } from '../utils/endPoints';
import { useNavigate } from 'react-router-dom';

const PdfUploader = ({ userId }: { userId: string }) => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [selectedPages, setSelectedPages] = useState<string>('');
  const [pdfName, setPdfName] = useState('');
  const [pdfUrl, setPdfUrl] = useState('');
  const [extractedPdfUrl, setExtractedPdfUrl] = useState('');
  const myDivRef = useRef<HTMLDivElement>(null);

  const onDrop = async (acceptedFiles: File[]) => {
    setExtractedPdfUrl("")
    setUploadedFile(acceptedFiles[0]);
    const url = URL.createObjectURL(acceptedFiles[0]);
    setPdfUrl(url);
  };

  const handleExportPages = async () => {
    if (!uploadedFile || !selectedPages || !pdfName) {
      alert("Please fill all the fields")
      return
    };

    const pdfBytes = await uploadedFile.arrayBuffer();
    const pdfDoc = await PDFDocument.load(pdfBytes);
    const pageCount = pdfDoc.getPageCount();
    const selectedPageNumbers = selectedPages
      .split(',').map(el => Number(el)).filter(el => el <= pageCount)

    const exportedPdfDoc = await PDFDocument.create();

    for (const pageNum of selectedPageNumbers) {
      const [copiedPage] = await exportedPdfDoc.copyPages(pdfDoc, [Number(pageNum) - 1]);
      exportedPdfDoc.addPage(copiedPage);
    }

    const exportedBytes = await exportedPdfDoc.save();
    const blob = new Blob([exportedBytes], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    var reader = new FileReader();
    reader.readAsDataURL(blob);

    reader.onload = async () => {
      await axios.post(endPoints.pdfCreate, {
        pdfBinary: reader.result,
        name: pdfName,
        userId
      })
    };
    setExtractedPdfUrl(url);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept:
      { pdf: ['.pdf'], }
  });

  useEffect(() => {
    if (myDivRef.current) {
      myDivRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [extractedPdfUrl])

  const navigate = useNavigate()
  const navigateToAllPdfs = () => {
    navigate(`all-extracted-pdfs/${userId}`)
  }

  return (
    <div className='p-t-60'>
      <button onClick={navigateToAllPdfs} className='view-all-btn' >View all</button>
      <div {...getRootProps()} className='dragger '>
        <input {...getInputProps()} />
        <p>Drag & drop a PDF file here, or click to select one</p>
      </div>
      {uploadedFile && (
        <div className='input-container'>
          <p> Enter page numbers (comma-separated)</p>
          <input placeholder='1,2,3,...' className='page-input' type="text" value={selectedPages} onChange={(e) => setSelectedPages(e.target.value)} />
          <p> Enter PDF name</p>
          <input required placeholder='Enter pdf name.' className='page-input' type="text" onChange={(e) => setPdfName(e.target.value)} />
          <button className='page-export-btn' onClick={handleExportPages} >Export Selected Pages</button>
        </div>
      )}
      {
        pdfUrl && <div>
          <h1 className='head-text'>Selected Pdf</h1>
          {pdfUrl && (
            <iframe
              title="PDF Viewer"
              src={pdfUrl}
              width="100%"
              height="800px"

              style={{ border: 'none' }}
            />
          )}
        </div>

      }
      {
        extractedPdfUrl && <div ref={myDivRef}>
          <h1 className='head-text'>Extracted Pdf</h1>
          {extractedPdfUrl && (
            <iframe
              title="PDF Viewer"
              src={extractedPdfUrl}
              width="100%"
              height="800px"
              style={{ border: 'none' }}
            />
          )}
        </div>
      }
    </div>
  );
};

export default PdfUploader;
