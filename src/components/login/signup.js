import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';
import { signInWithEmailAndPassword} from 'firebase/auth';

import { auth } from '../firebase/firebase';

function SignInPage() {
    const navigate = useNavigate();
    const [values, Setvalues] = useState({
        email: "",
        pass: "",

    });
    const [errormsg, Seterrormsg] = useState("");
    const [SubmitButtonDisabled, SetSubmitButtonDisabled] = useState(false);

    const handleSubmission = () => {
        console.log(values);
        if (!values.email || !values.pass) {
            Seterrormsg("Fill all fields");
            return;
        }
        Seterrormsg("");

        SetSubmitButtonDisabled(true);
        signInWithEmailAndPassword(auth, values.email, values.pass).then(
            (res) => {
                // console.log(res.user);  
                JSON.stringify(res.user.displayName)
                localStorage.setItem('username-id', res.user.displayName);    
                localStorage.setItem('Isloggedin-id',true); 
                //json parse 
                // local get item       
                SetSubmitButtonDisabled(false); 
                navigate("/meal");
                window.location.reload();  

            })
            .catch((err) => {
                SetSubmitButtonDisabled(false);
                Seterrormsg(err.message);
                // console.log("Error-", err.message);
            });

    }
    return (
        <div className="text-center m-5-auto sign-up">
            <h3>Login Page</h3>
            <div className='dd' action="/login">
                <p>
                    <label>Username or email address</label><br />
                    <input type="text" name="first_name" required onChange={(event) =>
                        Setvalues((prev) => ({ ...prev, email: event.target.value }))
                    } />
                </p>
                <p>
                    <label>Password</label>
                    {/* <Link to="/forget-password"><label className="right-label">Forget password?</label></Link> */}
                    <br />
                    <input type="password" name="password" required onChange={(event) =>
                        Setvalues((prev) => ({ ...prev, pass: event.target.value }))
                    } />
                </p>
                <p className='loginnn'>
                    <b className='errorr'>{errormsg}</b>
                    <button id="sub_btn" type="submit" onClick={handleSubmission} disabled={SubmitButtonDisabled}>Login</button>
                </p>
            </div>
            <footer>
                <p>First time?   <Link to="/signinpage">Create an account</Link>.</p>
                <p><Link to="/home">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )
}

export default SignInPage;
