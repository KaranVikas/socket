import React, {useState} from 'react'

const Login = () => {

  const [name, setName] = useState("dd");
  const [email, setEmail] = useState();
  const [show, setShow] = useState(false);
  const [password, setPassword] = useState();
  

  const handleShow = () => setShow(!show);

  
  const submitHandler = () => {
    console.log("clicked on submit");
  };

  return (
    <div>
      <div className="form-floating mb-3">
        <input
          type="email"
          class="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label for="floatingInput">Email address</label>
      </div>
      <div className="input-group mb-3">
        <div className="form-floating">
          <input
            type={show ? "text" : "password"}
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label for="floatingPassword">Password</label>
        </div>
        <button type="button" class="btn btn-link" onClick={handleShow}>
          {show ? "Hide" : "Show"}
        </button>
      </div>
      <div className="input-group mb-3">
        <div className="form-floating">
          <input
            type={show ? "text" : "password"}
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">Password</label>
          
        </div>
        <button
          type="button"
          class="btn btn-link input-group-text"
          onClick={handleShow}
        >
          {show ? "Hide" : "Show"}
        </button>
      </div>

      <div className="form-floating mb-3">
        <button type="button" class="btn btn-primary" onClick={submitHandler}>
          Login
        </button>
      </div>

      <div className="form-floating mb-3">
        <button type="button" class="btn btn-danger" onClick={submitHandler}>
          Get Guest User Credentials
        </button>
      </div>

      {console.log(name)}
      {console.log("hi")}
    </div>
  );
}

export default Login