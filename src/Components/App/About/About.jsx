import React, { Component } from 'react'
import styles from './About.module.css'

export default class About extends Component {
  render() {
    return (
      <>
      <section id={styles.About}>
      <div   className="About text-center my-5 mt-5 p-5">
                <h1 className={styles.header}>ABOUT</h1>
                <div className="header d-flex justify-content-center align-items-center">
                  <div className={styles.line}></div>
                  <div className="star">
                    <i id={styles.star} class="fa-solid fa-star fs-5 text-white"></i>
                  </div>
                  <div className={styles.line}></div>
                </div>
              </div>
              <div  className="container">
              
                <div className="row">
                    <div className="col-md-4 offset-2 ">
                        <p className={styles.pargrhaph} >
                        Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                        </p>
                    </div>
                    <div className="col-md-4 ms-3">
                        <p className={styles.pargrhaph}>
                        You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!
                        </p>
                    </div>
                </div>
              </div>
              </section>
      </>
    )
  }
}
