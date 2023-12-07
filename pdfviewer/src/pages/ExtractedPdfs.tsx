import axios from 'axios';
import { useEffect, useState } from 'react'
import { endPoints } from '../utils/endPoints';
import PdfCard from '../components/PdfCard';
import { useParams } from 'react-router-dom';

function ExtractedPdfs() {
    const [allPdfs, setAllPdfs] = useState<{ name: string, _id: string }[]>([]);
    const { id: userId } = useParams()

    useEffect(() => {
        const getAllPdfs = async () => {
            const { data } = await axios.get(endPoints.allPdf, {
                params: {
                    userId
                }
            })
            setAllPdfs(data)
        }
        getAllPdfs()
    }, [userId])

    return (
        <div>
            <h1 className='head-text'>Extracted Pdfs</h1>
            {allPdfs.length ? <div className='all-pdfs'>
                {
                    allPdfs.map(el => <PdfCard name={el.name} id={el._id} />)
                }
            </div> : <h1 className='head-text'>No PDFs Found!</h1>}
        </div>
    )
}

export default ExtractedPdfs