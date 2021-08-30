import React, { Component } from 'react';


export default class Homecontent extends Component {
 

  render() {
    return (
        <div class="container" style={{marginTop:"-20px"}}>
          <div class="row justify-content-center text-center mb-5">
            <div class="col-md-8">
              <h2 class="section-heading">Why Do You Need 'Paper Bank' ?</h2>
            </div>
          </div>
          <div class="row" style={{marginTop:"50px"}}>
            <div class="col-md-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="">
              <div class="feature-1 text-center">
                <div class="wrap-icon icon-1">
                  <i class="bi bi-people"></i>
                </div>
                <h3 class="mb-3">Explore Your Team</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, optio.</p>
              </div>
            </div>
            <div class="col-md-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
              <div class="feature-1 text-center">
                <div class="wrap-icon icon-1">
                  <i class="bi bi-brightness-high"></i>
                </div>
                <h3 class="mb-3">Digital Whiteboard</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, optio.</p>
              </div>
            </div>
            <div class="col-md-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
              <div class="feature-1 text-center">
                <div class="wrap-icon icon-1">
                  <i class="bi bi-bar-chart"></i>
                </div>
                <h3 class="mb-3">Design To Development</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, optio.</p>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
