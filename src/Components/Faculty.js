import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";


export default function Faculty(props) {
    const [fac, setFac] = useState([])
    const [univ, setUni] = useState('')
    const { id } = useParams();
    const { uni } = useParams();

    useEffect(() => {
        fetchComments();
    }, [])


    const fetchComments = async () => {
        setUni(uni);
        axios.get('http://127.0.0.1:8000/api/faculties/' + id)
            .then(res => {
                const persons = res.data;
                setFac(persons)
            })
    }

    return (
        <div className="facbox"  style={{ marginTop: "170px" }}>
            <div class="row justify-content-center text-center mb-5">
                <div class="col-md-8">
                    <h2 class="section-heading">{univ}</h2>
                </div>
            </div>
            <div className="row">
                {fac.map((faculty, index) => (
                    <a className="col-lg-3 uniblock" href={"/level/" + faculty.id + "/" + id} key={index}>
                        <div className="users" >
                            <div className="card " >
                                <div className="card-body">
                                    <div className="cardname">Faculty Of {faculty.name}</div>
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}



