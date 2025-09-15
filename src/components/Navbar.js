import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() { // props can be passed like this [this.props.title] or by destructuring [let/const {prop1, prop2, prop3, prop4....} = this.props;]
    return (
      <>
        <nav className="navbar fixed-top navbar-expand-lg w-100" style={{ backgroundColor: '#e3f2fd' }} data-bs-theme="light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">{this.props.title}</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
              <ul className="navbar-nav gap-3 mx-auto">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link active dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Country
                  </Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/india">India</Link></li>
                    <li><Link className="dropdown-item" to="/us">United States</Link></li>
                    <li><Link className="dropdown-item" to="/japan">Japan</Link></li>
                    <li><Link className="dropdown-item" to="/china">China</Link></li>
                    <li><Link className="dropdown-item" to="/singapore">Singapore</Link></li>
                    <li><Link className="dropdown-item" to="/russia">Russia</Link></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link active dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Category
                  </Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/general">General</Link></li>
                    <li><Link className="dropdown-item" to="/business">Business</Link></li>
                    <li><Link className="dropdown-item" to="/entertainment">Entertainment</Link></li>
                    <li><Link className="dropdown-item" to="/health">Health</Link></li>
                    <li><Link className="dropdown-item" to="/science">Science</Link></li>
                    <li><Link className="dropdown-item" to="/sports">Sports</Link></li>
                    <li><Link className="dropdown-item" to="/technology">Technology</Link></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/">Contact Us</Link>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav >
      </>
    )
  }
}