import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

let userLogedin = false

const Login = () => {
    const navigate = useNavigate()

    const [logedinUser, setLogedinUser] = useState(0)

    const [usersData, setUsersData] = useState()

    const [data, setData] = useState({
        email: '',
        password: '',
    })

    const [user, setUser] = useState({
        email: '',
        password: '',
    })

    const { email, password } = user

    const handleData = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser(prev => { return { ...prev, [name]: value } })
    }


    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = async () => {
        const response = await axios.get("http://localhost:8000/")
        if (response.status == 200) {
            setUsersData(response.data)
            console.log(response.data)
        }
    }


    useEffect(() => {
        if (email === '') {
            console.log("Enter email");
        } else if (password === "") {
            console.log("Enter password");
        }

    },)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (email === '') {
            console.log("Enter email");
        } else if (password === "") {
            console.log("Enter password");
        } else {
            setData(prev => { return { ...prev, username: user.username, email: user.email } })
        }

        const submit = () => {
            usersData.map((data, index) => {
                if (data.Email === user.email && data.Password === user.password) {
                    userLogedin = true
                    setLogedinUser(data.id)
                    setTimeout(() => {
                        navigate('/dashboard')
                    }, 4000);
                }
            })
        }
        if (email !== "" && password !== "") {
            submit()
        }   
    }

    return (
        <>
            {!userLogedin ? <>
                <div className="registration-form">
                    <form onSubmit={handleSubmit}>
                        <div className="form-header form-container">
                            <h1>Log in</h1>
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
                            <button
                                type="submit"
                                className="btn btn-block submit_button"
                            >
                                log in
                            </button>
                        </div>
                    </form>
                </div>
            </> : <>
                <div className="displayFlex">
                    {usersData.map((data, index) => {
                        if (logedinUser === data.id) {
                            return (
                                <div key={index}>
                                    <h1>Welcome, {data.Username}</h1>
                                    <p>{data.Email}</p>
                                </div>
                            )
                        }
                    })}
                </div>
            </>}
        </>
    )
}

export default Login