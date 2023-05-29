import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  const [data, setData] = useState([])
  const [isdelete, setIsdelete] = useState(false)

  const [deleteId, setDeleteId] = useState(0)

  const [sidebar, setSidebar] = useState(false)

  useEffect(() => {
    getUsers()
  }, [isdelete])

  useEffect(() => {
    getUsers()
  }, [])

  const getUsers = async () => {
    const response = await axios.get("http://localhost:8000/")
    if (response.status == 200) {
      setData(response.data)
      console.log(response.data)
    }
  }

  const userWantoDelete = async () => {
    console.log('delete');
    console.log(typeof (deleteId));

    try {
      const res = await axios.delete(`http://localhost:8000/delete/${deleteId}`)
      console.log(res.data)
      setIsdelete(!isdelete)
    } catch (error) {
      alert(error)
    }
  }

  return (
    <>
      <div className="wrapper w-100">
        <div className="body-overlay"></div>

        <>
          <nav id="sidebar" className='sidebar_imp'>
          <div
                  className="col-lg-11 order-3 order-md-2 text-center">
                  <div className="xp-breadcrumbbar text-center  align-items-center justify-content-between">
                    <div className="sidebar-header d-flex">
                      <h3><span>Practicle </span></h3>
                    </div>
                    <ul className="list-unstyled components ">
                      <li className="dropdown d-flex align-items-center justify-content-center bg-primary">
                        <button className="btn">Dashboard</button>
                      </li>
                      <li className="dropdown d-flex align-items-center justify-content-center">
                        <Link to={`/signup`} className='btn bg-transparent border-0'>Sign up</Link>
                      </li>
                      <li className="dropdown d-flex align-items-center justify-content-center">
                        <Link to={`/login`} className='btn bg-transparent border-0'>Log in</Link>
                      </li>
                    </ul>

                  </div>
                </div>
          </nav>
        </>

        <div id="content" className='content_imp'>
          {/* <div className="top-navbar">
            <div className="xp-topbar">
              <div className="row">
                <div className="col-2 col-md-1 col-lg-1 order-2 order-md-1 align-self-center">
                  <div className="xp-menubar" onClick={() => { setSidebar(!sidebar) }}>
                    <span className="text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 20 20">
                        <path fill="currentColor" fillRule="evenodd"
                          d="M3 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Zm0 5a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Zm0 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Z"
                          clipRule="evenodd" />
                      </svg>
                    </span>
                  </div>
                </div>
                
              </div>

            </div>

          </div> */}

          <div className="main-content">
            <div className="row">

              <div className="col-md-12">
                <div className="table-wrapper">
                  <div className="table-title">
                    <div className="row">
                      <div className="col-sm-6 p-0 d-flex justify-content-lg-start justify-content-center">
                        <h2 className="ml-lg-2">Manage Employees</h2>
                      </div>
                      <div className="col-sm-6 p-0 d-flex justify-content-lg-end justify-content-center">
                        {/* <a href="#addEmployeeModal" className="btn btn-success" data-toggle="modal">
                                                    <span>Create </span></a> */}
                        <button
                          className='btn btn-success'
                          style={{ borderRadius: '5px' }}
                          onClick={() => {
                            console.log("CreateData")
                          }}
                        >
                          <Link to="/signup" className='text-white text-decoration-none'>Create</Link>
                        </button>
                      </div>
                    </div>
                  </div>
                  <table className="table table-striped table-hover">
                    <thead>
                      <tr>
                        {/* <th>Id</th> */}
                        <th>No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((data, index) => {
                        return (
                          <tr key={index}>
                            {/* <td>{data.id}</td> */}
                            <td>{index + 1}</td>
                            <td>{data.Username}</td>
                            <td className='text-lowercase'>{data.Email}</td>
                            <td>{data.Phone}</td>
                            <td className="d-flex" style={{ gap: '10px' }}>
                              <button
                                type="button"
                                style={{ borderRadius: '5px', fontSize: '15px', border: 'none' }}
                                className="bg-primary px-3"
                                onClick={() => {
                                  navigate(`/user/${index}`)
                                }}
                              >View</button>
                              {/* <button
                                                                type="button"
                                                                style={{ borderRadius: '5px', fontSize: '15px', border: 'none' }}
                                                                className="bg-success px-3"
                                                                onClick={() => {
                                                                    navigate(`/user/${data.id}/edit`)
                                                                }}
                                                            >Edit</button> */}
                              <button
                                type="button"
                                style={{ borderRadius: '5px', fontSize: '15px', border: 'none' }}
                                className="bg-danger px-3"
                                data-toggle="model"
                                data-target="#DeleteModel"
                                onClick={() => {
                                  console.log("Delete", data.Emidail)
                                  setIsdelete(!isdelete)
                                  setDeleteId(data.id)
                                }}
                              >Delete</button>
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isdelete ?
        <div style={{ width: '100%', height: '100vh', position: 'fixed', top: '0px', left: '0', background: '#fff2', zIndex: '100', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: '60%', height: 'fit-content', padding: '25px', background: '#888', borderRadius: '15px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <h4 className='text-danger'>are you sure you want to delete data?</h4>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', justifyContent: 'end' }}>
              <button className='btn btn-secondary' onClick={() => { setIsdelete(!isdelete) }}>Close</button>
              <button className='btn btn-danger' onClick={userWantoDelete}>Delete</button>
            </div>
          </div>
        </div>
        : null
      }

    </>
  )
}

export default Home