import axios from 'axios';
import React, { FormEvent, useState } from 'react'
import { endPoints } from '../utils/endPoints';
import PdfUploader from './FileUploader';

const Homepage = () => {

    const [userId, setUserId] = useState("");

    const login = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        //@ts-ignore
        const [mobile, password] = event.target

        if (!mobile.value || !password.value) {
            alert("Please fill all fields")
            return
        }
        try {
            const { data } = await axios.post(endPoints.login, {
                mobile: mobile.value,
                password: password.value
            })
            if (data._id) {
                setUserId(data._id)
                alert("Login successful")
            }
            if (data.status === 401) {
                alert("You are already a user and you entered incorrect password!")
            }
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div>
            {
                userId ? <PdfUploader userId={userId} /> : <form action='' onSubmit={login}>
                    <div className='login-container'><div className='input-container'>
                        <p> mobile number</p>
                        <input className='page-input' type="number" />
                        <p> Password</p>
                        <input className='page-input' type="text" />
                        <button type='submit' className='page-export-btn' >Login</button>
                    </div></div>
                </form>
            }
        </div>

    )
}

export default Homepage