import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import SingleServices from "../SingleServices/SingleServices";
import { key, keys } from "localforage";


const Services = () => {

    const[users, setUsers] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => {
            setUsers(data);
        })
    },[])

    return (
        <div className="my-11">
            <h1 className='text-3xl font-bold text-red-700 text-center'> Services : {users.length}</h1>

            <div className="grid grid-cols-3 gap-3">

                {
                    users.map((user)=> <SingleServices key={user._id} user={user}></SingleServices>)
                }
            </div>
        </div>
    );
};

export default Services;