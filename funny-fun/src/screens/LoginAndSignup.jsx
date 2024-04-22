import React, { useState } from "react";
import FunnyFunLogo from '../assets/logo ff.svg'
import Bouton from "../components/Bouton";
import { Colors } from "../components/colors";
import facebook_logo from '../assets/facebook-circular-logo.png'
import horizon_logo from '../assets/hzicone.jpeg'
import google_logo from '../assets/google.png'

const LoginAndSignup = () => {
    
    const [IsLogin, setIsLogin] = useState(true)

    return (
        <div className='super-flex'>
            <img src={FunnyFunLogo} alt="le logo de funny fun" width={400} style={{marginTop : -50}}/>
            <div className="signup-detail" style={{marginTop : -70}}>
                {IsLogin ? "Login Details" : "Sigup Details"}
            </div>
            <form action="" method="post" 
                style={{
                    display : "flex", 
                    flexDirection : "column", 
                    justifyContent : "center", 
                    alignItems : "center",
                    margin : 10
                    }}>
                <input type="text"     placeholder="username"/>
                <input type="email"    placeholder="email" style={{display : IsLogin ? "none" : ""}}/>
                <input type="password" placeholder="password"/>
                <Bouton 
                    url = {IsLogin ? '/PrincipalScreen' : '/JokesCategorie'}
                    width = {400} 
                    height = {50} 
                    color = {Colors.hardBlue} 
                    content = {IsLogin ? "Login" : "Next"}
                    handleClick = {() => {}} 
                />
            </form>
            <div>Need an account ? <button className="simple-button" onClick={() => setIsLogin(!IsLogin)}>{ IsLogin ? "Signup" : "Login"}</button></div>
            <div className="auther-choice">
                <span className="line1"></span>
                <div>{IsLogin ? "or login with" : "or signup with"}</div>
                <span className="line2"></span>
            </div>
            <div className="btn-connexion_inscription">
                <div className="shadow">
                    <img src={google_logo} width={40} height={40} alt="google login" />
                </div>
                <div className="shadow" style={{width : 90, borderRadius : "2pc"}}>
                    <img src={horizon_logo} width={80} height={40} alt="horizon login" style={{borderRadius : "2pc"}}/>
                </div>
                <div className="shadow">
                    <img src={facebook_logo} width={40} height={40} alt="faceboo login" />
                </div>
            </div>
        </div>
    );
};

export default LoginAndSignup;
