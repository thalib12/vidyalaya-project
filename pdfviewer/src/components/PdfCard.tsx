import React from 'react'
import PdfLogo from "../assets/images/pdf.png"
import { useNavigate } from 'react-router-dom'



const PdfCard = ({ name, id }: { name: string, id: string }) => {
    const navigate = useNavigate()

    const onClickCard = () => {
        navigate(`/pdf-view/${id}`)
    }

    return (
        <div className="pdf-container" onClick={onClickCard}>
            <img src={PdfLogo} alt='pdf' className='pdf-img' />
            <p className='pdf-name'>{name}</p>
        </div>
    )
}

export default PdfCard