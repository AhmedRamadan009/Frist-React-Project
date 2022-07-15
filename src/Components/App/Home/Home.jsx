import React, { Component } from "react";
import styles from "./Home.module.css";
import hmoeImage from "../images/images1.svg";

export default class Home extends Component {
  render() {
    return (
      <>
        <div className="container-fluid">
          <div id={styles.home} className="row">
            <div className="col-md-12">
              <div className="homeimg text-center mt-2">
                <img src={hmoeImage} className="w-25" />
              </div>
              <div className="home text-center my-4">
                <h1 className={styles.header}>START RECAT</h1>
                <div className="header d-flex justify-content-center align-items-center">
                  <div className={styles.line}></div>
                  <div className="star">
                    <i id={styles.star} class="fa-solid fa-star fs-5 text-white"></i>
                  </div>
                  <div className={styles.line}></div>
                </div>
              </div>
              <div className="contents text-center">
                <span className={styles.spanText} >Graphic Artist-</span> <span className={styles.spanText}>Web Designer -</span>
                <span className={styles.spanText}>Illustrator</span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
