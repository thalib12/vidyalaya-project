import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { endPoints } from '../utils/endPoints'

export const PdfViewer = () => {
    const { id } = useParams()
    const [pdfBinary, setPdfBinary] = useState("")

    useEffect(() => {
        const fetchPdf = async () => {
            const { data } = await axios.get(endPoints.getPdf, {
                params: { id }
            })
            setPdfBinary(data.pdfBinary);
        }
        fetchPdf()
    }, [id])

    return (
        <div>
            {pdfBinary && <iframe
                title="PDF Viewer"
                src={pdfBinary}
                width="100%"
                height="800px"
                style={{ border: "none" }}
            />}
        </div>
    )
}
