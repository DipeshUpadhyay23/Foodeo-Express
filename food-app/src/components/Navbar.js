import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import Badge from 'react-bootstrap/Badge'
import Cart from '../screens/Cart';
import Modal from '../Modal';
import { useState } from 'react';
import { useCart } from './ContextReducer';


export default function Navbar() {
  let data=useCart();
  const navigate=useNavigate();
  const handleLogOut=()=>{
    localStorage.removeItem("authToken")
    navigate("/login")

  }
  const [cartView,setCartView]=useState(false);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <Link className="navbar-brand fs-3 fst-italic" to="/">FOODEO EXPRESS</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2" >
              <li className="nav-item">
                <Link className="nav-link active fs-5" aria-current="page" to="/">Home</Link>
              </li>
              {
                localStorage.getItem("authToken") && (
                  <li className="nav-item">
                    <Link className="nav-link active fs-5" aria-current="page" to="/">My Orders</Link>
                  </li>
                )
              }



            </ul>
            {(!localStorage.getItem("authToken")) ?
              <div className='d-flex'>


                <Link className="btn bg-white text-success mx-1" to="/Login">Login</Link>


                <Link className="btn bg-white text-success mx-1" to="/createuser">SignUp</Link>


              </div>
              : <div>
                <div className='btn bg-white text-success mx-2' onClick={()=>{setCartView(true)}}>
                  My Cart{" "}
                  <Badge pill bg='danger'>{data.length}</Badge>
                </div>
                {cartView ?<Modal onClose={()=>setCartView(false)}><Cart></Cart></Modal>:null}
                <div className='btn bg-white text-danger mx-2' onClick={handleLogOut}>
                  LogOut

                </div>
              </div>

            }
          </div>
        </div>
      </nav>
    </div>
  )
}
