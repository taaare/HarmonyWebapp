import React from "react";
import '../styles/signup.css';

class SignUp extends React.Component {
    
    render() {
        return (
        <>
              <div className="tempBody">
                  <div className = "container">
                      <form action = "">
                          <h1>Sign Up</h1>
                          <div className = "form-group">
                              <label htmlFor = "">First Name: </label>
                              <input type = "text" className = "form-control" required />
                          </div>
                          <div className = "form-group">
                              <label htmlFor = "">Last Name: </label>
                              <input type = "text" className = "form-control" required />
                          </div>
                          <div className = "form-group">
                              <label htmlFor = "">E-Mail: </label>
                              <input type = "text" className = "form-control" required />
                          </div>
                          <div className = "form-group">
                              <label htmlFor = "">Password: </label>
                              <input type = "password" className = "form-control" required />
                          </div>
                          <div className = "form-group">
                              <label htmlFor = "">Confirm Password: </label>
                              <input type = "text" className = "form-control" required />
                          </div>
                          <input type = "submit" className = "button" value = "Submit" />
                          <p className="link">
                              Already have an account? <a href="login.html">Log In Here</a>
                          </p>
                      </form>
                  </div>   
                            <script>
                                alert("test");
                            </script>                                                                                                                                                                                                                                                                                                                                                              
              </div>

          </>
          
          );
    }
  }

  export default SignUp;