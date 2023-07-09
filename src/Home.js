import React from "react";
import axios from "axios";
import { useState } from "react";

function Home(){
    const [title, setTitle]=useState('');
    const [content, setContent]=useState('');

    const onClick=(e)=>{
        axios.get(`http://localhost:3000/put?title=${title}&content=${content}`);
    }

    return(
        <div className="Home">
            <form>
                <p>{title}</p>
                <input type="text" onChange={(e)=>{
                    setTitle(e.target.value)
                }}/>
                <input tupe="text" onChange={(e)=>{
                    setContent(e.target.value)
                }}/>
                <button onClick={onClick}>제출</button>
            </form>
        </div>
    );
}

export default Home;