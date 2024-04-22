// Home.js
import React from 'react';
import '../components/style.css'
import logoFunnyFun from '../assets/Funny Fun.png'
import { Link } from 'react-router-dom';
import { Colors } from '../components/colors';
import Bouton from '../components/Bouton';

const Welcome = () => {
  return (
    <div className="super-flex">
        <div><img src={logoFunnyFun} height={400} width={380} alt="funny fun presentarion"/> </div>
        <div className='welcome'>Welcome on funny fun,  your application for make fun</div>
        <Bouton url = '/LoginAndSignup' width = {350} height = {70} color = {Colors.hardBlue} content = "Get Started"/>
    </div>
  );
};

export default Welcome;
