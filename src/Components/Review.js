import React, { Component } from 'react';


export default class Review extends Component {


    render() {
        return (
            <div class="">
                <div class="container" style={{ marginTop: "100px" }}>
                    <div class="row align-items-center">
                        <div class="col-md-4 ms-auto order-2">
                            <h2 class="mb-4">Gather Feedback</h2>
                            <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur at reprehenderit optio,
                                laudantium eius quod, eum maxime molestiae porro omnis. Dolores aspernatur delectus impedit incidunt
                                dolore mollitia esse natus beatae.</p>
                            <p><a href="#" class="btn btn-primary">Download Now</a></p>
                        </div>
                        <div class="col-md-6 aos-init aos-animate" data-aos="fade-right">
                            <img src="assets/images/undraw_svg_3.svg" alt="Image" class="img-fluid" />
                        </div>
                    </div>
                </div>
                <div className="cta-section" style={{ marginTop: "100px" }}>
                    <div className="container">
                        <div class="row align-items-center">
                            <div class="col-md-6 me-auto text-center text-md-start mb-5 mb-md-0">
                                <h2>Paper Bank App </h2>
                                <h5>Comming soon ...</h5>
                            </div>
                            <div class="col-md-5 text-center text-md-end">
                                <p><a href="#" class="btn d-inline-flex align-items-center"><i class="fab fa-apple"></i><span> &nbsp;App store</span></a>
                                    <a href="#" class="btn d-inline-flex align-items-center"><i class="fab fa-google-play"></i><span> &nbsp;Google play</span></a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container" style={{ marginTop: "100px",marginBottom: "100px" }}>
                    <div class="row align-items-center">
                        <div class="col-md-6">
                            <h2 class="mb-4">Gather Feedback</h2>
                            <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur at reprehenderit optio,
                                laudantium eius quod, eum maxime molestiae porro omnis. Dolores aspernatur delectus impedit incidunt
                                dolore mollitia esse natus beatae.</p>
                            <p><a href="#" class="btn btn-primary">Download Now</a></p>
                        </div>
                        <div class="col-md-4  mx-auto aos-init aos-animate" data-aos="fade-left">
                            <img src="assets/images/undraw_svg_3.svg" alt="Image" class="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
}
