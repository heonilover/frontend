import React from "react";
import { useState } from "react";

function Login(){
    const [id, setId]=useState('');
    const [pw, setPw]=useState('');

    const onClick=(e)=>{
        if(id==="manager"&&pw==="jego"){

        }
    }

    return(
        <div className="Login">
            <form>
                <input type="text" onChange={(e)=>{
                    setId(e.target.value)
                }}/>
                <input tupe="text" onChange={(e)=>{
                    setPw(e.target.value)
                }}/>
                <button onClick={onClick}>로그인</button>
            </form>
        </div>
    );
}

export default Login;