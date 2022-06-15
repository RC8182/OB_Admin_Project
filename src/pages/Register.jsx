import React, { useState } from 'react';

const Register = () => {

    const initialData = [{user: "", name : "",email : "" ,password : ""}];

    const [data , setData] = useState(initialData)

    return (
        <div>
            <h1> Register Form </h1>
            
        </div>
    );
}

export default Register;
