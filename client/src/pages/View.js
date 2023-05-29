import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const View = () => {
    const [usersData, setUsersData] = useState({
        id: 0,
        Username: "",
        Email: "",
        Phone: "",
    })

    const params = useParams()
    const { id } = params
    console.log(id);

    useEffect(() => {
        getUsers()
    })

    const getUsers = async () => {
        const response = await axios.get("http://localhost:8000/")
        if (response.status == 200) {
            setUsersData(response.data[id])
            console.log(response.data[0])
        }
    }

    return (
        <>
            <div className="view">
                <div className="view_data">
                    <div className="view_header view_container">
                        <h1>Hello, {usersData.Username}</h1>
                    </div>
                    <div className="view_container">
                        <div className='startItems'>
                            <p>username</p>
                        </div>
                        <div className='item'>
                            <p>{usersData.Username}</p>
                        </div>
                    </div>
                    <div className="view_container">
                        <div className='startItems'>
                            <p>email</p>
                        </div>
                        <div className='item'>
                            <p>{usersData.Email}</p>
                        </div>
                    </div>
                    <div className="view_container">
                        <div className='startItems'>
                            <p>phone</p>
                        </div>
                        <div className='item'>
                            <p>{usersData.Phone}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default View