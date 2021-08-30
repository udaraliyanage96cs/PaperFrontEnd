import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";

export default function Years(props) {

    const { semid } = useParams();
    const { levelid } = useParams();
    const { facid } = useParams();
    const { uniid } = useParams();

    const [years, setYears] = useState([])

    useEffect(() => {
        fetchYears();
    }, [])
    const fetchYears = async () => {
        axios.get('http://127.0.0.1:8000/api/years/' + semid + "/" + levelid + "/" + facid + "/" + uniid)
            .then(res => {
                const persons = res.data;
                setYears(persons);
                console.log(persons);
            })
    }

    return (
        <div className="facbox">
            
            <div className="row">
                {years.map((years, index) => (
                    <a className="col-lg-3 uniblock"  href={"/papers/"+years.year_id+"/"+semid+"/"+levelid+"/"+facid+"/"+uniid} key={index}>
                        <div className="users" >
                            <div className="card " >
                                <div className="card-body">
                                    <div className="cardname">{years.year_id}</div>
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}
