import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import Logo from "../../Images/Logo.png"


const Navbar = () => {
    const [search,setSearch] = useState("");
    const [searchOutput,setSearchoutput] = useState([]);
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const data = useSelector((state) => {
        return state.capsule
    });

    useEffect(() => {
        setSearchoutput(data.filter((ele) => {
            if((ele.type.toLowerCase().trim()).includes(search.toLowerCase().trim())){
                return ele
            }
        }))
    },[search]);

  return (
    <div className='navbar'>
        <div className="left">
            <img src={Logo} alt="" />
        <Link to="/">
        <p className='home'>Home</p>
        </Link>
        <p className='home'>About</p>
        <p className='home'>Contact Us</p>

        </div>
        <div className='input'>
            <input placeholder='Dragon 1.0' onChange={(e) => {
                setSearch(e.target.value)
            }} value={search} type="text" />
            <Link className='button' to={search ? `/search/${search}` : "/"}>
            <button onClick={() => {
                if(search === ""){
                    navigate("/")
                }
                dispatch({
                    type:"search",
                    data:searchOutput
                })
            }}>Search</button>
            </Link>
        </div>
    </div>
  )
}

export default Navbar