import React, { Component } from "react";
import styles from './Protofilo.module.css';
import img1 from '../images/images2.png';
import img2 from '../images/images3.png';
import img3 from '../images/images4.png';
import img4 from '../images/images5.png';
import img5 from '../images/images6.png';
import img6 from '../images/images7.png';


export default class Protofilo extends Component {
  render() {
    return (
      <>
        <div className="portofilo text-center my-3">
          <h1 className={styles.header}>Portofilo</h1>
          <div className="portofilo d-flex justify-content-center align-items-center">
            <div className={styles.line}></div>
            <div className="star">
              <i id={styles.star} class="fa-solid fa-star fs-5"></i>
            </div>
            <div className={styles.line}></div>
          </div>
        </div>

        <div className="container ">
            <div className="row mb-5 gy-5">
                <div className="col-md-4">
                    <div   id={styles.potofiloContent} data-bs-toggle="modal" data-bs-target="#exampleModal" className="  position-relative">
                      
                        <div>
                            <img src={img1}  className="w-100" />
                        </div>
                        <div id={styles.layer} className="d-flex justify-content-center align-items-center  position-absolute top-0 star-0 end-0">
                            <i id={styles.plus} className="fa fa-solid fa-plus fs-5 "></i>
                        </div>
                        
                    </div>
                    
                </div>
                <div className="col-md-4">
                    <div id={styles.potofiloContent} data-bs-toggle="modal" data-bs-target="#exampleModal1" className=" bg-danger position-relative">
                      
                        <div>
                            <img src={img2} className="w-100" />
                        </div>
                        <div id={styles.layer} className="d-flex justify-content-center align-items-center  position-absolute top-0 star-0 end-0">
                            <i id={styles.plus} className="fa fa-solid fa-plus fs-5 "></i>
                        </div>
                        
                    </div>
                    
                </div>
                <div className="col-md-4">
                    <div id={styles.potofiloContent} data-bs-toggle="modal" data-bs-target="#exampleModal2" className=" bg-danger position-relative">
                      
                        <div>
                            <img src={img3} className="w-100" />
                        </div>
                        <div id={styles.layer} className="d-flex justify-content-center align-items-center  position-absolute top-0 star-0 end-0">
                            <i id={styles.plus} className="fa fa-solid fa-plus fs-5 "></i>
                        </div>
                        
                    </div>
                    
                </div>
                <div className="col-md-4">
                    <div id={styles.potofiloContent} data-bs-toggle="modal" data-bs-target="#exampleModal3" className=" bg-danger position-relative">
                      
                        <div>
                            <img src={img4} className="w-100" />
                        </div>
                        <div id={styles.layer} className="d-flex justify-content-center align-items-center  position-absolute top-0 star-0 end-0">
                            <i id={styles.plus} className="fa fa-solid fa-plus fs-5 "></i>
                        </div>
                        
                    </div>
                    
                </div>
                <div className="col-md-4">
                    <div id={styles.potofiloContent} data-bs-toggle="modal" data-bs-target="#exampleModal4" className=" bg-danger position-relative">
                      
                        <div>
                            <img src={img5} className="w-100" />
                        </div>
                        <div id={styles.layer} className="d-flex justify-content-center align-items-center  position-absolute top-0 star-0 end-0">
                            <i id={styles.plus} className="fa fa-solid fa-plus fs-5 "></i>
                        </div>
                        
                    </div>
                    
                </div>
                <div className="col-md-4">
                    <div id={styles.potofiloContent} data-bs-toggle="modal" data-bs-target="#exampleModal5" className=" bg-danger position-relative">
                      
                        <div>
                            <img src={img6} className="w-100" />
                        </div>
                        <div id={styles.layer} className="d-flex justify-content-center align-items-center  position-absolute top-0 star-0 end-0">
                            <i id={styles.plus} className="fa fa-solid fa-plus fs-5 "></i>
                        </div>
                        
                    </div>
                    
                </div>
               


{/* <!-- Modal --> */}
<div class="modal   fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
      <div className="portofilo m-auto text-center my-3">
          <h1 id={styles.header}>LOG CABIN</h1>
          <div className="portofilo d-flex justify-content-center align-items-center">
            <div className={styles.line}></div>
            <div className="star">
              <i id={styles.star} class="fa-solid fa-star fs-5"></i>
            </div>
            <div className={styles.line}></div>
          </div>
        </div>
<div className="close " data-bs-dismiss="modal">
    <i className="fa fa-solid fa-close fs-5 text-success" ></i>
</div>
       
      </div>
      <div class="modal-body">
        <img src={img1} className="w-100 my-5" />

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
      </div>
     
      <div class="modal-footer m-auto">
        <button type="button" class="btn btn-success" data-bs-dismiss="modal">Close Window</button>
        </div>
    </div>
    
  </div>
</div>

<div class="modal   fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
      <div className="portofilo m-auto text-center my-3">
          <h1 id={styles.header}>TASTY CAKE</h1>
          <div className="portofilo d-flex justify-content-center align-items-center">
            <div className={styles.line}></div>
            <div className="star">
              <i id={styles.star} class="fa-solid fa-star fs-5"></i>
            </div>
            <div className={styles.line}></div>
          </div>
        </div>
<div className="close " data-bs-dismiss="modal">
    <i className="fa fa-solid fa-close fs-5 text-success" ></i>
</div>
       
      </div>
      <div class="modal-body">
        <img src={img2} className="w-100 my-5" />

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
      </div>
     
      <div class="modal-footer m-auto">
        <button type="button" class="btn btn-success" data-bs-dismiss="modal">Close Window</button>
        </div>
    </div>
    
  </div>
</div>
<div class="modal   fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
      <div className="portofilo m-auto text-center my-3">
          <h1 id={styles.header}>CIRCUS TENT</h1>
          <div className="portofilo d-flex justify-content-center align-items-center">
            <div className={styles.line}></div>
            <div className="star">
              <i id={styles.star} class="fa-solid fa-star fs-5"></i>
            </div>
            <div className={styles.line}></div>
          </div>
        </div>
<div className="close " data-bs-dismiss="modal">
    <i className="fa fa-solid fa-close fs-5 text-success" ></i>
</div>
       
      </div>
      <div class="modal-body">
        <img src={img3} className="w-100 my-5" />

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
      </div>
     
      <div class="modal-footer m-auto">
        <button type="button" class="btn btn-success" data-bs-dismiss="modal">Close Window</button>
        </div>
    </div>
    
  </div>
</div>
<div class="modal   fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
      <div className="portofilo m-auto text-center my-3">
          <h1 id={styles.header}>CONTROLLER</h1>
          <div className="portofilo d-flex justify-content-center align-items-center">
            <div className={styles.line}></div>
            <div className="star">
              <i id={styles.star} class="fa-solid fa-star fs-5"></i>
            </div>
            <div className={styles.line}></div>
          </div>
        </div>
<div className="close " data-bs-dismiss="modal">
    <i className="fa fa-solid fa-close fs-5 text-success" ></i>
</div>
       
      </div>
      <div class="modal-body">
        <img src={img4} className="w-100 my-5" />

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
      </div>
     
      <div class="modal-footer m-auto">
        <button type="button" class="btn btn-success" data-bs-dismiss="modal">Close Window</button>
        </div>
    </div>
    
  </div>
</div>
<div class="modal   fade" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
      <div className="portofilo m-auto text-center my-3">
          <h1 id={styles.header}>LOCKED SAFE</h1>
          <div className="portofilo d-flex justify-content-center align-items-center">
            <div className={styles.line}></div>
            <div className="star">
              <i id={styles.star} class="fa-solid fa-star fs-5"></i>
            </div>
            <div className={styles.line}></div>
          </div>
        </div>
<div className="close " data-bs-dismiss="modal">
    <i className="fa fa-solid fa-close fs-5 text-success" ></i>
</div>
       
      </div>
      <div class="modal-body">
        <img src={img5} className="w-100 my-5" />

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
      </div>
     
      <div class="modal-footer m-auto">
        <button type="button" class="btn btn-success" data-bs-dismiss="modal">Close Window</button>
        </div>
    </div>
    
  </div>
</div>
<div class="modal   fade" id="exampleModal5" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
      <div className="portofilo m-auto text-center my-3">
          <h1 id={styles.header}>SUBMARINE</h1>
          <div className="portofilo d-flex justify-content-center align-items-center">
            <div className={styles.line}></div>
            <div className="star">
              <i id={styles.star} class="fa-solid fa-star fs-5"></i>
            </div>
            <div className={styles.line}></div>
          </div>
        </div>
<div className="close " data-bs-dismiss="modal">
    <i className="fa fa-solid fa-close fs-5 text-success" ></i>
</div>
       
      </div>
      <div class="modal-body">
        <img src={img6} className="w-100 my-5" />

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
      </div>
     
      <div class="modal-footer m-auto">
        <button type="button" class="btn btn-success" data-bs-dismiss="modal">Close Window</button>
        </div>
    </div>
    
  </div>
</div>
            </div>
        </div>
      </>
    );
  }
}
