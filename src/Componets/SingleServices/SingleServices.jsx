import { Link } from "react-router-dom";


const SingleServices = ({user}) => {

    console.log(user);
    const {_id,title,img,price,description,facility} = user;


    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl space-y-3">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title}</h2>
    <h2 className="text-xl font-bold">Price : {price}</h2>
    <p className="text-justify">{description.slice(0,200)}</p>

    <div className="card-actions">
        
        <Link to={`/check/${_id}`}>   <button className="btn btn-primary"> More Details</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default SingleServices;