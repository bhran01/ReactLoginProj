import React, { useState } from 'react'

export default function Login() {
  //state
  //const[stateVariableName,setFunction]= useState(initialValue)
  //1.state variable
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  let data = {
    "username": email,
    "password": password
  }
  //2.function definitions
  let submit = () => {
    console.log('submitted');

    fetch('http://localhost:6069/authenticate',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then((res) => {
        console.log("res", res)
        if (res.status === 401) {
          alert('Invalid credentials');
        } else {
          return res.json();
        }
      }).then((data) => {
        console.log(data)
        console.log('token', data.token.token);
        
        //Now store this userData to localStorage
        window.localStorage.setItem('userData',JSON.stringify(data.token));
        window.localStorage.setItem('token',data.token.token);
        window.localStorage.setItem('role',data.token.role);

        if (data.token.role === 'admin') {
          window.location.href = '/admindashboard';
        }
        if (data.token.role === 'ROLE_USER') {
          window.location.href = '/enduserdashboard';
        }
        if (data.token.role === 'reseller') {
          window.location.href = '/resellerdashboard';
        }
        if (data.token.role === 'account_manager') {
          window.location.href = '/accountmanagerdashboard';
        }
      })
      .catch((err)=>{
        console.log('error', err)
    });
}


//Every function return something
return (
  <main>
    <form className='col-6 offset-3 mt-5'>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input type="username" name='username' value={email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={e => setEmail(e.target.value)} />
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" name='password' value={password} className="form-control" id="exampleInputPassword1" onChange={e => setPassword(e.target.value)} />
      </div>
      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
      </div>
      <button type="button" onClick={submit} className="btn btn-primary">Submit</button>
    </form>

  </main>
)
}
