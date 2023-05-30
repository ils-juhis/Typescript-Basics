import React, {useState} from 'react'
import { ILogin } from '../models/ILogin'

interface IState{
    user: ILogin
}

const Login:React.FC  =()=>{
    const [data, setData] = useState<IState>({user: {email:"", password:""}})
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>):void=>{
        setData({user:{
            ...data.user,
            [e.target.name]: e.target.value
        }})
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        console.log(data.user)
    }

  return (
    <div>
        <h2>3. Login</h2>
        <form className='w-50 text-dark text-start mx-auto bg-light p-3 rounded' onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" name="email" onChange={handleChange} value={data.user.email} id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" value={data.user.password} className="form-control" name="password" onChange={handleChange} id="exampleInputPassword1"/>
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            <br /><br />
            <div> {data.user.email + " && " + data.user.password}</div>
        </form>
    </div>
  )
}

export default Login