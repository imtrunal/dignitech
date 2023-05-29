import { useEffect, useState } from "react"


const Signin = () => {
    const [valid, setvalid] = useState({
        email: '',
        phone: '',
        password: '',
    })

    const [data, setData] = useState({
        username: '',
        email: '',
        phone: '',
        password: '',
    })

    const [user, setUser] = useState({
        username: '',
        email: '',
        phone: '',
        password: '',
        confirm_password: ''
    })

    const { username, email, phone, password, confirm_password } = user

    const handleData = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser(prev => { return { ...prev, [name]: value } })
    }

    useEffect(() => {
        if (valid.email === true && valid.phone === true && valid.password === true) {
            setData({ username: user.username, email: user.email, phone: user.phone, password: user.password });
        }
    }, [valid.email, valid.phone, valid.password])

    const handleSubmit = (e) => {
        e.preventDefault()

        const emailValidation = () => {
            // Email validation
            const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
            const validDomains = ['gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'aol.com', 'icloud.com', 'protonmail.com', 'mail.com', 'zoho.com', 'yandex.com', 'gmx.com'];

            if (email === '') {
                setvalid(prev => { return { ...prev, email: 'Please enter email.' } })
            } else if (email.match(emailPattern)) {
                const domain = email.split('@')[1];
                if (validDomains.includes(domain)) {
                    setvalid(prev => { return { ...prev, email: true } })
                } else {
                    setvalid(prev => { return { ...prev, email: 'Please enter general used domain name in email.' } })
                }
            } else {
                setvalid(prev => { return { ...prev, email: 'Please enter valid email address.' } })
            }
        }

        const phoneValidation = () => {
            // Phone validation
            const phonePattern = /^\d{10}$/;
            const phoneNumber = phone.replace(/\D/g, '');

            if (phone === '') {
                setvalid(prev => { return { ...prev, phone: 'Please enter phone number.' } })
            } else if (phonePattern.test(phoneNumber)) {
                setvalid(prev => { return { ...prev, phone: true } })
            } else {
                setvalid(prev => { return { ...prev, phone: 'Please enter valid phone number.' } })
            }
        }

        const passwordValidation = () => {
            // Password Validation
            if (password === '') {
                setvalid(prev => { return { ...prev, password: 'Please enter password.' } })
            } else if (password !== confirm_password) {
                setvalid(prev => { return { ...prev, password: 'Password and Confirm password must be the same.' } })
            } else if (password.length !== 6) {
                setvalid(prev => { return { ...prev, password: 'Password length must be 6.' } })
            } else {
                setvalid(prev => { return { ...prev, password: true } })
            }
        }

        emailValidation()
        phoneValidation()
        passwordValidation()
    }

    return (
        <>
            <div className="registration-form">
                <form onSubmit={handleSubmit}>
                    <div className="form-header form-container">
                        <h1>Sign up</h1>
                    </div>

                    <div className="form-group form-container">
                        <input
                            type="text"
                            className="form-control item"
                            name="username"
                            placeholder="Username"
                            value={username}
                            onChange={handleData}
                            autoComplete="off"
                        />
                    </div>
                    <div className="form-group form-container">
                        <input
                            type="text"
                            className="form-control item"
                            name="email"
                            placeholder="Email"
                            value={email}
                            onChange={handleData}
                            autoComplete="off"
                        />
                    </div>
                    <div className="form-group form-container">
                        <input
                            type="text"
                            className="form-control item"
                            name="phone"
                            placeholder="Phone Number"
                            value={phone}
                            onChange={handleData}
                            autoComplete="off"
                        />
                    </div>
                    <div className="form-group form-container">
                        <input
                            type="password"
                            className="form-control item"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={handleData}
                            autoComplete="off"
                        />
                    </div>
                    <div className="form-group form-container">
                        <input
                            type="password"
                            className="form-control item"
                            name="confirm_password"
                            placeholder="Confirm Password"
                            value={confirm_password}
                            onChange={handleData}
                            autoComplete="off"
                        />
                    </div>
                    <div className="form-group form-container">
                        <button
                            type="submit"
                            className="btn btn-block submit_button"
                        >
                            Create Account
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Signin