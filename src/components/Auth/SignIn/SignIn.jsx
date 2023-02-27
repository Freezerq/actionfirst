import React, {useState} from 'react';
import {supabase} from "../../../App";


const SignIn = () => {

    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            setLoading(true)
            const {data, error} = await supabase.auth.signInWithPassword({email, password})
            console.log(data)
            if (error) throw error
            alert('Check your email for the login link!')
        } catch (error) {
            alert(error.error_description || error.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="row flex-center flex">
            <div className="col-6 form-widget" aria-live="polite">
                <h1 className="header">Login Page</h1>
                <p className="description">Sign in via email</p>
                {loading ? (
                    'Sending magic link...'
                ) : (
                    <form onSubmit={handleLogin}>
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            className="inputField"
                            type="email"
                            placeholder="Your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            id="password"
                            className="inputField"
                            type="password"
                            placeholder="Your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button className="button block" aria-live="polite">
                            Sign up
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default SignIn;