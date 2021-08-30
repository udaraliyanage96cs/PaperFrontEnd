import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";





export default function Semester() {
    const { levelid } = useParams();
    const { facid } = useParams();
    const { uniid } = useParams();


    return (
        <div className="row">
            <a className="col-lg-3 uniblock" href={"/years/1/" + levelid + "/" + facid + "/" + uniid} >
                <div className="users" >
                    <div className="card " >
                        <div className="card-body">
                            <div className="cardname">Semester One</div>
                        </div>
                    </div>
                </div>
            </a>
            <a className="col-lg-3 uniblock" href={"/years/2/" + levelid + "/" + facid + "/" + uniid}>
                <div className="users" >
                    <div className="card " >
                        <div className="card-body">
                            <div className="cardname">Semester Two</div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );

}