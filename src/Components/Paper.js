import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";

export default function Paper(Props) {


    const { yearid } = useParams();
    const { semid } = useParams();
    const { levelid } = useParams();
    const { facid } = useParams();
    const { uniid } = useParams();

    const [papers, setPapers] = useState([])

    useEffect(() => {
        fetchPapers();
    }, [])
    const fetchPapers = async () => {
        axios.get('http://127.0.0.1:8000/api/papers/' + yearid + "/" + semid + "/" + levelid + "/" + facid + "/" + uniid)
            .then(res => {
                const persons = res.data;
                setPapers(persons);
                console.log(persons);
            })
    }

    return (
        <div className="facbox">
            <div className="row">
                {papers.map((paper, index) => (
                    <>
                        <a class="col-lg-3" href={"http://127.0.0.1:8000/assets/Papers/" + paper.url } target="_blank" key={index} style={{textDecoration: "none",color: "#000"}}>
                            <div class=" papercard" data-aos="zoom-in-up">
                                <div class="contsec">
                                    <div class="col-lg-10 mx-auto">
                                        <div class="row uniinfo">
                                            <div class="col-lg-12">
                                                <div class="papername mx-auto">{paper.name} - {paper.code}</div>
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
                    </>
                ))}
            </div>
        </div>
    );
}