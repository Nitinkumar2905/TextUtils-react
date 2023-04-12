import React from 'react'
import PropTypes from 'prop-types'
// import {Link} from 'react-router-dom'

export default function Navbar(props) {
  return (
    <>
        <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
            <div className="container-fluid">
                <a className={`navbar-brand fw-semibold text-${props.mode==='light'?'dark':'light'} `} href="/">{props.title}</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className={` nav-link active text-${props.mode==='light'?'dark':'light'} `} href="/">Home</a>
                        </li>
                        {/* <li className="nav-item">
                            <a className={` nav-link active text-${props.mode==='light'?'dark':'light'} `} href="/about">{props.about}</a>
                        </li> */}
                    </ul>
                    {/* <form className="d-flex" role="search">
                      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                      <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
                    
                    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                        <input className="form-check-input" role='button' onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
                        <label className='form-check-label' htmlFor="flexSwitchCheckDefault">Enable {props.mode==='light'?'dark':'light'} mode</label>
                    </div>
                </div>
                
            </div>
        </nav>
    </>
  )
}

Navbar.propTypes = {
    title : PropTypes.string.isRequired,
    about : PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title : 'TextUtils',
    about : 'About us'
}