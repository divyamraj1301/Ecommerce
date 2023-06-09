import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout.js'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import '../../../src/styles/AuthStyles.css'

const ForgotPassword = () => {

    const [email, setEmail] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [answer, setAnswer] = useState('')


    const navigate = useNavigate()


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/v1/auth/forgot-password', { email, newPassword, answer });

            if (res && res.data.success) {
                toast.success(res.data.message);
                navigate('/login');
            }
            else {
                toast.error(res.data.message);
            }
        }

        catch (error) {
            console.log(error);
            toast.error('Something went wrong');
        }
    }

    return (
        <Layout title={'Forgot Password - Ecommerce APP'}>
            <div className="form-container">

                <form onSubmit={handleSubmit}>
                    <h4 className="title">RESET PASSWORD</h4>
                    <div className="mb-3">

                        <input email="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail" placeholder='Enter Your Email' required />
                    </div>
                    <div className="mb-3">

                        <input email="text" value={answer} onChange={(e) => setAnswer(e.target.value)} className="form-control" id="exampleInputEmail" placeholder='Enter Your Favourite Sport' required />
                    </div>
                    <div className="mb-3">

                        <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} className="form-control" id="exampleInputPassword" placeholder='Enter Your Password' required />
                    </div>
                    <div className="mb-3">
                    </div>
                    <div className="mb-3">

                    </div>

                    <button type="submit" className="btn btn-primary">RESET</button>
                </form>

            </div>
        </Layout>
    )
}

export default ForgotPassword