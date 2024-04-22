import React from "react";
import FunnyFunLogo from '../assets/logo ff.svg'
import JokeButton from "../components/JokeButton";
import Bouton from "../components/Bouton";
import { Colors } from "../components/colors";

export default function JokesCategorie() {
    return (
        <div className="super-flex">
            <img src={FunnyFunLogo} alt="le logo de funny fun" width={400} style={{zIndex : 0, marginBottom : 220}}/>
            <div className="joke-categories">
                Your Joke Categories
                <br />
                <div 
                    style={{
                        width : 180, 
                        display : "flex", 
                        justifyContent : "space-between",
                        marginTop : 20
                        }}
                    >
                    <JokeButton bg={"#FE5854"} buttonName = "Chrismas" clique = {true}/>
                    <JokeButton bg={"#0E8ABA"} buttonName = "Programing" clique = {true}/>
                </div>
                <div 
                    style={{
                        width : 180, 
                        display : "flex", 
                        justifyContent : "space-between",
                        marginTop : 20
                        }}
                    >
                    <JokeButton bg={"#FF8C00"} buttonName = "Misc"/>
                    <JokeButton bg={"#9ACD32"} buttonName = "Pun"/>
                </div>
                <div 
                    style={{
                        width : 180, 
                        display : "flex", 
                        justifyContent : "space-between",
                        marginTop : 20
                        }}
                    >
                    <JokeButton bg={"#40E0D0"} buttonName = "Spooky"/>
                </div>
            </div>
            <div style={{marginBottom : 100}}>
                <Bouton url = '/PrincipalScreen' width = {400} height = {50} color = {Colors.hardBlue} content = "Finish"/>
            </div>
        </div>
    )
};
