import React, { useState } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";

// function getFaculties(){
//     const { id } =  useParams();
//     axios.get('http://127.0.0.1:8000/api/faculties/'+{id})
//       .then(res => {
//         const persons = res.data;
//         console.log(this.state.persons);
//     })
// }


export default function Faculty(props) {
    const [fac, setFac] = useState([]);
    const { id } = useParams();


    axios.get('http://127.0.0.1:8000/api/faculties/'+id)
        .then(res => {
            const persons = res.data;
            setFac(persons);
            console.log(fac.value);
        })

    return (
        <div>
            <h1>User id is {id}</h1>
        </div>
    );
}



