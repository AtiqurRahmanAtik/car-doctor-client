
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const MoreDetails = () => {

    const service = useLoaderData();
    const {user} = useContext(AuthContext);
    
    const {_id,title,img,price} = service;

    // console.log(service);

   
    const handleForm = (e) =>{

        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        

        const booking = {
            name,
             date,
             email,
             img,
             title,
             service_id : _id,
             price : price


        };

        console.log(booking);

        fetch('http://localhost:5000/booking',{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(date =>{
            console.log(date);
            if(date.insertedId){
                alert('Successfully data insert');
            }
        })
    
        


    }
    


    return (
        <div className="my-11">
           
           <div className="mx-auto">

           <h1>More Details : {title}</h1>
            {/* <div>
                <img src={img} alt="" />
            </div> */}
           </div>


        <div className=" mx-auto">

        <form onSubmit={handleForm}>
        
        <div className="flex gap-5">

        <div className="form-control  flex-1 ">
          <label className="label">
            <span className="label-text">Name </span>
          </label>
          <input type="text" name="name" placeholder="name" className="input input-bordered" required />
        </div>
        
            <div className="form-control  flex-1 ">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input type="date" name="date" placeholder="date" className="input input-bordered" required />
        </div>
        </div>


        
        <div className="flex gap-5">

        <div className="form-control  flex-1 ">
          <label className="label">
            <span className="label-text"> Email </span>
          </label>
          <input type="email" name="email" defaultValue={user?.email}  placeholder="Email" className="input input-bordered" required />
        </div>
        
            <div className="form-control  flex-1 ">
          <label className="label">
            <span className="label-text">Due Amount</span>
          </label>
          <input type="text"  placeholder="date" defaultValue={`$ ${price}`} className="input input-bordered" required />
        </div>
        </div>




        {/* <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div> */}


        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
            </form>

        </div>


        </div>
    );
};

export default MoreDetails;