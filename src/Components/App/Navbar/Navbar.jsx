import React, { Component } from 'react'
import styles from './Navbar.module.css';
import {Link} from 'react-router-dom';
export default class Navbar extends Component {
  

  render() {
    return (
      <>
     <nav id={styles.nav} className="navbar navbar-expand-lg navbar-dark bg-dark py-4">
  <div className="container">
    <Link className={`${styles.test} navbar-brand`}  to="home">START REACT</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto mx-5  mb-2 mb-lg-0">
        <li id='green' className="nav-item">
          <Link id={styles.links} className="nav-link active" aria-current="page" to="portofilo">Portofilo</Link>
        </li>
        <li id='green' className="nav-item">
          <Link id={styles.links} className="nav-link" to="about">About</Link>
        </li>
        <li id='green' className="nav-item">
          <Link id={styles.links} className="nav-link" to="contact">Contact</Link>
        </li>
        <li id='green' className="nav-item">
          <Link id={styles.links} className="nav-link" to="movie">Movies</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
      
      
      </>
    )
  }
}
