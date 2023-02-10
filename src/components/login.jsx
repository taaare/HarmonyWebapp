import React from "react";
import '../styles/login.css';

const Login = () => {
    
    useEffect(() => {
        
    }, []);

    return (
        <div className="all">
            <div className ="tempBody">
                <div id="content_container">
                    <div id="form_container">
                        <div id="form_header_container">
                            <h2 id="form_header"> Login </h2>
                        </div>
        
                        <div id="form_content_container">
                            <div id="form_content_inner_container">
                                <input type="text" id="full_name" placeholder="Full name" />
                                <input type="email" id="email" placeholder="Email" />
                                <input type="password" id="password" placeholder="New Password" />
        
                                <div id="button_container">
                                    <button onclick="login()">Login</button>
                                    <button onclick="register()">Register</button>
                                </div>
        
                            </div>
                        </div>
                    </div>
                </div>
            
                <script src="login.js"></script> 
            </div>
        </div>
        
          );
    }

  export default Login;