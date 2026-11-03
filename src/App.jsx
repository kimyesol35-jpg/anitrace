import { useState } from 'react'
import { Link } from 'react-router-dom';
import './App.css'
import '../src/reset.css'
import Login from './pages/Login';

function App() {

  return (
    <div className='app'>
        {/* <div className="nav-box">
          <div className="nav-inner">
            <Link to={'/'}>
              Ani<span>Trance</span>
            </Link>
          </div>
        </div> */}
        <Login></Login>
    </div>
  )
}

export default App
