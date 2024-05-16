import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/Image/logo.svg";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const NavigationBar = () => {

    const {user,  logOut} = useContext(AuthContext);


    //logout 
    const handleLogOut = ()=>{
      logOut()
      .then(()=>{

      })
      .catch(error =>{
        console.log(error);
      })
     
    }


    const links = <>
    
    <NavLink to='/'>  <li><a>Home</a></li> </NavLink>
    <NavLink >  <li><a>About</a></li> </NavLink>

    {
      user?.email ? <div>
          <NavLink to='/booking'>  <li><a>Booking</a></li> </NavLink> 
        {/* <button onClick={handleLogOut}> <li><a>logOut</a></li>  </button>

        <span className="text-red-500"> {user?.email}</span>
         */}
        

        <div className="tooltip" data-tip={user.email}>

      <button onClick={handleLogOut}> <li><a>logOut</a></li></button>
      </div>
      </div>   :
      
      <NavLink to='/login'>  <li><a>logIn</a></li> </NavLink> 
    }

    </>

    return (
        <div className="navbar bg-green-300 h-28 object-cover">

        <div className="navbar-start object-cover justify-items-center">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

             {links}
            </ul>
          </div>
          <Link className="btn btn-ghost text-xl">
           <img src={logo} alt="" />

            </Link>
        </div>


        <div className="navbar-center object-cover hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            
            {links}
          </ul>
        </div>
        <div className="navbar-end">
        <button className="btn btn-outline btn-error">appointment</button>
        </div>
      </div>
    );
};

export default NavigationBar;