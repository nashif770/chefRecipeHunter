import React, {useState, useEffect} from 'react';

const Home = () => {
    const [chef, setChef]= useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/chef")
        .then(res => res.json)
        .then(data => console.log(data))
        .catch(error => console.log(error))
    },[])



    return (
        <div>
            <h2>Hello</h2>
        </div>
    );
};

export default Home;