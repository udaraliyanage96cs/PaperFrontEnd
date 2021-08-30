import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
export default function Level() {


    const [level, setLevel] = useState([])
    const { facid } = useParams();
    const { uniid } = useParams();

    useEffect(() => {
        fetchLevels();
    }, [])


    const fetchLevels = async () => {
        axios.get('http://127.0.0.1:8000/api/levels/' + uniid + "/" + facid)
            .then(res => {
                const level = res.data;
                setLevel(level)
            })
    }


    return (
        <div className="row">
            {level.map((level, index) => (
                <a className="col-lg-3 uniblock" href={"/semester/" + level.id + "/" + facid+"/"+uniid} key={index}>
                    <div className="users" >
                        <div className="card " >
                            <div className="card-body">
                                <div className="cardname">{level.name}</div>
                            </div>
                        </div>
                    </div>
                </a>
            ))}
        </div>
    );

}
