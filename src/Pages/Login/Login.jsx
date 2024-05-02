import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {

            const {SignInUser}=useContext(AuthContext)

            const handleLogin=event=>{
                        event.preventDefault()
                    
                        const from=event.target;
                       
                        const email=from.email.value;
                        const password=from.password.value;
                        console.log(email,password);
                        SignInUser(email,password)
                        .then(result=>{
                                    console.log(result.user);
                        })
                        .catch(error=>console.log(error))

            }
            return (
                        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center lg:text-left w-1/2">
    <img src={img} alt="" />
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <h1 className="text-5xl font-bold text-center ">Login</h1>
      <form onSubmit={handleLogin} className="card-body">
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
          
          <input className="btn btn-primary" type="submit" value="Login" />
        </div>
      </form>
      <p className='my-4 text-center'>New to cars doctor <Link className='text-orange-600' to='/signUp'>sign up</Link></p>
    </div>
  </div>
</div>
            );
};

export default Login;