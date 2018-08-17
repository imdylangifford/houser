import React from 'react';
import axios from 'axios'

export default function House(props){
    let style = {
        width: "80%",
        background: "cornflowerblue",
        margin: "0 auto"
    }

    let img = {
        width: "200px",
        height: "150px",
        align: "left"
    }
     
    return (
        <div style={style}>
            <h1>{props.house.name}</h1>
            <img style={img} src={props.house.image} alt=""/>
            <button
            onClick={() => axios.delete(`http://localhost:4500/api/house/${props.house.id}`)}
            >DELETE 
            </button>
        </div>
    )
}

