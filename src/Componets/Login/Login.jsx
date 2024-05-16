import { Link } from 'react-router-dom';
import photo from '../../assets/Image/login/login.svg';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import axios from 'axios';

const Login = () => {

    const {login} = useContext(AuthContext);


    const handleForm =(e)=>{

        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        
       

        login(email,password)
        .then(result =>{
            console.log(result.user);
            const user = {email};
        
            //access toker form server side
            axios.post('http://localhost:5000/jwt',user, {withCredentials:true})
            .then(res=>{
              console.log(res.data);
            })
            .catch(error =>{
              console.log(error);
            })
        })
        .catch(error =>{
            console.log(error);
        })

    }


    return (
        <div className="hero  bg-base-200 my-7">
  <div className="hero-content flex-col gap-7 lg:flex-row">
    <div className="text-center lg:text-left w-1/2">
     <div className='space-y-7'>
     <h1 className="text-5xl font-bold text-center">Login now!</h1>
     </div>
        <div>
            <img src={photo} alt="" />
        </div>
    </div>


    <div className="card shrink-0  max-w-sm shadow-2xl bg-base-100 w-1/2">
        
    <form onSubmit={handleForm} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>

        <p>Are You New? Please <Link to='/register'> <button className="btn btn-link"> Register</button></Link></p>
      </form>
    </div>
  </div>
</div>
    );
};

export default Login;