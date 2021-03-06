import { useContext } from 'react';
import { signInWithGoogle } from '../firebase';
import './Css/Login.css'
import { Redirect } from "react-router-dom";

import { AuthContext } from "./AuthProvider";

let LoginPage = () => {

    let value=useContext(AuthContext);


    return (
        <div>
            {value ?
                (
                    <Redirect to="/home"></Redirect>
                )
                :
                (
                    <div className="my_Page">
                        <div className="row">
                            <div className="col-4">
                                <img alt="Loading Failed" className="img1" src="https://cdn.pixabay.com/photo/2019/02/18/20/02/face-4005302_1280.png"></img>
                            </div>
                            <div className="col-4 main">
                                <div className="LoginBox">
                                    <form>
                                        <div className="mb-3">
                                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div></div>
                                        <div className="mb-3">
                                            <label for="exampleInputPassword1" className="form-label">Password</label>
                                            <input type="password" className="form-control" id="exampleInputPassword1" /></div>
                                        <div className="mb-3 form-check">
                                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                            <label className="form-check-label" for="exampleCheck1">Check me out</label></div>
                                        <button type="submit" className="btn btn-primary ">Submit</button>
                                    </form>
                                </div>
                            </div>
                            <button onClick={signInWithGoogle} className="google_Login btn-primary" >Login With Google</button>
                            <div className="col-4">
                                <img className="img2" alt="Loading Failed" src="https://cdn.pixabay.com/photo/2021/07/08/07/23/child-6396103_960_720.png"></img>
                            </div>
                            <img alt="Loading Failed" src="https://cdn.pixabay.com/photo/2017/07/01/13/55/divider-2461548__340.png" className="posterLogin"></img>
                           
                        </div>
                        <div className="Appname">SPOOL IT UP!</div>
                    </div>
                )
            }
        </div>
    )


}

export default LoginPage;