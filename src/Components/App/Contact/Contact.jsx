import React, { Component } from 'react'
import styles from './Contact.module.css'
export default class Contact extends Component {

  render() {
    return (
      <>
      <section className='my-5'>
      <div className="portofilo text-center my-3">
          <h1 className={styles.header}>CONTACT ME</h1>
          <div className="portofilo d-flex justify-content-center align-items-center">
            <div className={styles.line}></div>
            <div className="star">
              <i id={styles.star} class="fa-solid fa-star fs-5"></i>
            </div>
            <div className={styles.line}></div>
          </div>
        </div>
       <div className="container">
        <div className="row">
            <div className="col-md-8  m-auto">
                <div className={styles.input}>
                    <input type="text" placeholder='Name'  className='form-control border-0  required' />
                </div>
                <div className={styles.input}>
                    <input type="email" placeholder='Email Adress'  className='form-control border-0 required' />
                </div>
                <div className={styles.input}>
                    <input type="phone" placeholder='Phone Namber'  className='form-control border-0 ' />
                </div>
                <div className={styles.input}>
                    <textarea type="text" placeholder='Message'  className='form-control border-0 required' />
                </div>

             
                    <button type="submit" className='btn btn-success '>Send</button>
                    
               
            </div>
        </div>
       </div>



      </section>
      
      
      
      </>
    )
  }
}
