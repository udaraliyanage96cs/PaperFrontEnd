import React, { Component } from 'react';
import Navbar from '../Components/Navbar';

import '../App.css'


export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                <Navbar></Navbar>
                <div className="hero-section " >
                <div class="wave">
                        <svg width="100%" height="355px" viewBox="0 0 1920 355" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g id="Apple-TV" transform="translate(0.000000, -402.000000)" fill="#FFFFFF">
                                    <path d="M0,439.134243 C175.04074,464.89273 327.944386,477.771974 458.710937,477.771974 C654.860765,477.771974 870.645295,442.632362 1205.9828,410.192501 C1429.54114,388.565926 1667.54687,411.092417 1920,477.771974 L1920,757 L1017.15166,757 L0,757 L0,439.134243 Z" id="Path"></path>
                                </g>
                            </g>
                        </svg>

                    </div>
                    <div className="container ">
                        <div class="col-12 hero-text-image">
                            <div class="row">
                                <div class="col-lg-8 text-center text-lg-start">
                                    <h1 data-aos="fade-right" class="aos-init aos-animate">University Paper Bank</h1>
                                    <h5 class="mb-5 aos-init aos-animate" data-aos="fade-right" data-aos-delay="100">Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit.</h5>
                                    <h5 data-aos="fade-right" data-aos-delay="200" data-aos-offset="-500" class="aos-init aos-animate"><a href="#" class="btn btn-outline-white">Get started</a></h5>
                                </div>
                                <div class="col-lg-4 iphone-wrap" data-aos="fade-down"  data-aos-easing="linear" data-aos-duration="1000">
                                    <img src="/assets/images/phone_1.png" alt="Image" class="phone-1 aos-init aos-animate" data-aos="fade-right" />
                                    <img src="/assets/images/phone_2.png" alt="Image" class="phone-2 aos-init aos-animate" data-aos="fade-right" data-aos-delay="200" />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>

            </div>
        );
    }
}
