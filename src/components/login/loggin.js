import React, { useState } from 'react';
import './LoggIn.css';
import { Link, useNavigate } from 'react-router-dom';
import signpic from '../images/112.avif'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { db } from '../firebase/firebase';
import { addDoc, collection,setDoc, doc } from 'firebase/firestore';

function Loggin() {
    // const [username, Setusername] = useState("");
    // const [email, Setemail] = useState("");
    // const [phoneno, Setphoneno] = useState("");
    // const [pass, Setpass] = useState("");
    // const [confirmpass, Setconfirmpass] = useState("");

    // const signIN = async (email, pass, username, confirmpass, phoneno) => {
    //     createUserWithEmailAndPassword(auth, email, pass).then(
    //         async(res) =>{
    //             console.log(res)
    //             try{
    //                 const docRef = await addDoc(collection(db,"users"),{
    //                     username,
    //                     phoneno,
    //                     confirmpass,
    //                     userId: `${res.user.uid}`
    //                 });
    //                 // const ref = doc(db,"userinfo",res.user.uid)
    //                 // const docRef =  await setDoc(ref,{username})
    //                 alert("Welcone")
    //                 console.log("djahvdf", docRef.id);
    //             } catch(e){
    //                 console.error("Error ", e)
    //             }
    //         }
    //     );
        
    // };

    const navigate = useNavigate();
    const [values, Setvalues] = useState({
        name: "",
        email: "",
        phoneno: "",
        pass: "",
        confirmpass: "",

    });
    const [errormsg, Seterrormsg] = useState("");
    const [SubmitButtonDisabled, SetSubmitButtonDisabled] = useState(false);

    const handleSubmission = () => {
        // console.log(values);
        if (!values.name || !values.confirmpass || !values.email || !values.phoneno || !values.pass) {
            Seterrormsg("Fill all fields");
            return;
        }
        Seterrormsg("");

        SetSubmitButtonDisabled(true);
        createUserWithEmailAndPassword(auth, values.email, values.pass).then(
            async (res) => {
                // console.log(res);
                SetSubmitButtonDisabled(false);
                const user = res.user;
                await updateProfile(user, {
                    displayName: values.name,
                });
                await updateProfile(user,{
                    photoURL: values.phoneno,
                })
                navigate("/login");

            })
            .catch((err) => {
                SetSubmitButtonDisabled(false);
                Seterrormsg(err.message);
                console.log("Error-", err.message);
            });

    }

    return (
        <section className='login'>
            <div className="login-container">
                <div className="signup-content">
                    <div className="signup-form">
                        <h2 className='login-heading'>Sign Up</h2>
                        <div className='register-form' id='register-form'>
                            <div className="formgroup">
                                <label htmlFor="name">
                                    <span className="material-icons">person</span>
                                </label>
                                <input type="text" placeholder='Name' name="name" id='name' autoComplete='off'
                                // onChange={(e)=>Setusername(e.target.value)}
                                    onChange={(event) =>
                                        Setvalues((prev) => ({ ...prev, name: event.target.value }))
                                    }
                                     />
                            </div>
                            <div className="formgroup">
                                <label htmlFor="email">
                                    <span className="material-icons">email</span>
                                </label>
                                <input type="text" placeholder='Email' name="email" id='email' autoComplete='off'
                                // onChange={(e)=>Setemail(e.target.value)}
                                    onChange={(event) =>
                                        Setvalues((prev) => ({ ...prev, email: event.target.value }))
                                    }
                                     />
                            </div>
                            <div className="formgroup">
                                <label htmlFor="Phone">
                                    <span className="material-icons">phone</span>
                                </label>
                                <input type="text" placeholder='Phone' name="phone" id='phone' autoComplete='off'
                                // onChange={(e)=>Setphoneno(e.target.value)}
                                    onChange={(event) =>
                                        Setvalues((prev) => ({ ...prev, phoneno: event.target.value }))
                                    }
                                     />
                            </div>
                            <div className="formgroup">
                                <label htmlFor="password">
                                    <span className="material-icons">key</span>
                                </label>
                                <input type="text" placeholder='Password' name="password" id='password' autoComplete='off'
                                // onChange={(e)=>Setpass(e.target.value)}
                                    onChange={(event) =>
                                        Setvalues((prev) => ({ ...prev, pass: event.target.value }))
                                    } 
                                    />
                            </div>
                            <div className="formgroup">
                                <label htmlFor="cpassword">
                                    <span className="material-icons">lock</span>
                                </label>
                                <input type="text" placeholder='Confirm Password' name="cpassword" id='cpassword' autoComplete='off'
                                // onChange={(e)=>Setconfirmpass(e.target.value)}
                                    onChange={(event) =>
                                        Setvalues((prev) => ({ ...prev, confirmpass: event.target.value }))
                                    }
                                     />
                            </div>
                            <div className="downn">

                                <button className='form-button' 
                                // onClick={signIN}
                                onClick={handleSubmission} disabled={SubmitButtonDisabled}
                                >Register</button>
                                <Link to="/login">Log In</Link>
                            </div>
                                <b className='errorr' style={{marginLeft:"1rem"}}>{errormsg}</b>
                        </div>
                    </div>
                    {/* <div className="signup-image">
                        <figure>
                            <img src={signpic} alt="Broken" width="300px" />
                        </figure>
                        <Navlink to='/login' className"Sign""></Navlink>
                    </div> */}
                </div>
            </div>
        </section>
    )
}


export default Loggin;
