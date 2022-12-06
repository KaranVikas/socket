import React, { useState } from 'react'

const Signup = () => {
    const [name, setName] = useState("dd");
    const [email, setEmail] = useState();
    const [show, setShow] = useState(false);
    const [password, setPassword] = useState();
    const [pic, setPic] = useState();

    const handleShow = () => setShow(!show);

    const postDetails = (pics) => { 
        
    }

    const submitHandler = () => {
        console.log("clicked on submit")
    }

  return (
    <div>
      <div className="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          id="floatingInput"
          placeholder="Enter your Name"
          onChange={(e) => setName(e.target.value)}
        />

        <label for="floatingInput">Name</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="email"
          class="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          onChange={(e) => setName(e.target.value)}
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
        <input
          type="text"
          class="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          onChange={(e) => postDetails(e.target.files[0])}
        />

        <label for="floatingInput">Upload Your Picture</label>
      </div>

      <div className="form-floating mb-3">
        <button type="button" class="btn btn-primary" onClick={submitHandler}>
          Sign Up
        </button>
      </div>
      {console.log(name)}
      {console.log("hi")}
    </div>
  );
}

export default Signup