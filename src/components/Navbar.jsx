import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='img'>
      <div className='container '>
        <nav className='navbar'>
          <h3 className='navbar_logo'><a href="#">Tasty</a></h3>
          <ul className='navbar__lists'>
            <li><a href="#">Home</a></li>
            <li ><a href="#">Menu</a></li>
            <li ><a href="#">Specialties</a></li>
            <li ><a href="#">Reservation</a></li>
            <li ><a href="#">Blog</a></li>
            <li ><a href="#">About</a></li>
            <li ><a href="#">Contact</a></li>
            <li><Link to='/Add'>Add</Link></li>
          </ul>
        </nav>
      </div>
      <div className=' container section_esas'>
        <div>
          <div>
            <h1 className="yaziii">Book a table for yourself at a time convenient for you</h1>
          </div>
          <div className='button'>
            <button className='btn  btn-primary'>Book a table</button>
          </div>
          <div className='container form'>
            <form>
              <input type="text" placeholder='Name' />
              <input type="tel" placeholder='Phone' />
              <input type="date" />
              <input type="time" />
              <select>
                <option value="">Person</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </form>
          </div>
        </div>

      </div>
    </div>
  )
}
