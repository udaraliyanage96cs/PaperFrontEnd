import React, { Component } from 'react';
import axios from 'axios';
import { EqualHeight, EqualHeightElement } from 'react-equal-height';
import Homecontent from './Homecontent';
import Review from './Review';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.onChangeSearch = this.onChangeSearch.bind(this);

    this.state = {
      seachtext: '',
      persons: [],
    };
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/universities')
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
        console.log(this.state.persons);
      })
  }

  onChangeSearch(e) {
    if (e.target.value == "") {
      axios.get('http://127.0.0.1:8000/api/universities')
        .then(res => {
          const persons = res.data;
          this.setState({ persons });
          console.log(this.state.persons);
        })
    } else {
      axios.get('http://127.0.0.1:8000/api/search/' + e.target.value)
        .then(res => {
          const persons = res.data;
          this.setState({ persons });
          console.log(this.state.persons);
        });
    }

  }


  render() {
    return (
      <div style={{ marginTop: "210px" }}>
        <Homecontent />


        <div className="unibox" style={{ marginTop: "100px" }}>
          <div className="form-group searchbox">
            <div class="row schbox" >
              <div class="col-lg-11"><input name="Search" onKeyUp={this.onChangeSearch} className="form-control searchtxt" placeholder="Search ..." /></div>
              <div class="col-lg-1 sicon"> <i class="fas fa-search"></i></div>
            </div>
          </div>
          <div className="row" style={{ marginTop: "100px" }}>
            {this.state.persons.map((user, index) => (
              <a class="col-lg-3" href={"/faculty/" + user.id + "/" + user.name} key={index} style={{
                textDecoration: "none",
                color: "#000"
              }}>
                <div class="unicard" data-aos="zoom-in-up">
                  <div class="imgsec">
                    <img src={"http://127.0.0.1:8000/assets/UniHero/" + user.hero} alt="" />
                  </div>
                  <div class="contsec">
                    <div class="col-lg-10 mx-auto">
                      <div class="row uniinfo">
                        <div class="col-lg-2">
                          <div class="userimg">
                            <img src={"http://127.0.0.1:8000/assets/Unilogo/" + user.logo} alt="" />
                          </div>
                        </div>
                        <div class="col-lg-10">
                          <div class="uniname1">{user.name}</div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-10 mx-auto" style={{ marginTop: "20px" }}>
                      <div class="row">
                        <div class="col-lg-3 mx-auto">
                          <div class="unicircles">
                            <i class="fas fa-house-user"></i>
                          </div>
                        </div>
                        <div class="col-lg-3 mx-auto">
                          <div class="unicircles">
                            <i class="fas fa-download"></i>
                          </div>
                        </div>
                        <div class="col-lg-3 mx-auto">
                          <div class="unicircles">
                            <i class="fas fa-file-pdf"></i>
                          </div>
                        </div>
                        <div class="col-lg-3 mx-auto">
                          <div class="unicircles">
                            <i class="fas fa-eye"></i>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </a>
            ))}


            
          </div>
        </div>
      </div>
    );
  }
}