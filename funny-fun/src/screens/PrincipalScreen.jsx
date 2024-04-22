import React, { useState, useEffect } from 'react';
import FunnyFunLogo from '../assets/logo ff.svg'
import Account from '../assets/user.png'
import back from '../assets/back.png'
import next from '../assets/next.png'
import copy from '../assets/copy.png'
import like from '../assets/like.png'
import heart from '../assets/heart.png'
import dislike from '../assets/negative-vote.png'
import { Link } from 'react-router-dom';

const PrincipalScreen = () => {

  const [Joke, setJoke] = useState([])
  const [SimpleJoke, setSimpleJoke] = useState("")
  const [IsJoke, setISJoke] = useState(false)
  const [JokeCategories, setJokeCategories] = useState([
    "Christmas", "Programming", "Misc", "Pun", "Spooky"
  ])
  const [TabEmojis, setTabEmojis] = useState([])
  
  const EmojiTab = ['😂', '🤣', '😅', '😆', '😉', '😜', '🤪', '🤭', '🙃', '🤡']

  const genererNombreAleatoire = (random_state) => {
    return Math.floor(Math.random() * random_state);
  }

  let nbr_emojis = 0 

  const fetchJoke = async () => {
    setISJoke(false)
    try {
      // Faire une requête GET au back-end avec la catégorie et la langue choisies
      let jokecat = JokeCategories[genererNombreAleatoire(JokeCategories.length)]
      const response = await fetch(
        `https://v2.jokeapi.dev/joke/${jokecat}?safe-mode&blacklistFlags=nsfw,racist,sexist,explicit`
        // "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,racist,sexist,explicit"
      );
      // Convertir la réponse en JSON
      const data = await response.json();
      // Vérifier si la réponse contient une blague
      if (data.joke) {
        // Mettre à jour l'état du composant avec la blague
        setSimpleJoke(data.joke);
      } else {
        // Afficher un message d'erreur
        setJoke([data.setup, data.delivery]);
        setSimpleJoke("");
      }
      console.log(response, jokecat);
    } catch (error) {
      // Afficher un message d'erreur
      setJoke("Désolé, il y a eu un problème avec la requête.");
    }
    // on gere les emojis
    nbr_emojis = genererNombreAleatoire(3)

    setTabEmojis([])

    for (let index = 0; index < nbr_emojis; index++) {
      setTabEmojis([...TabEmojis, EmojiTab[genererNombreAleatoire(3)]  
      ])      
    }
    setISJoke(true)
  };

  useEffect(() => {
    fetchJoke()
  }, []);

  
  return (
    <div>
      <nav>
        <img src={FunnyFunLogo} alt="funny fun logo" width={200} />
        <Link to={'/Account'}>
          <img src={Account} alt="account" width={60} height={60} />
        </Link>
      </nav>
      <div className="box-list" style={{width : `100%`}}>
          {IsJoke ? 
          <div className="box">
            <div className = {SimpleJoke === "" ? "text text1" : "text text3"}>{SimpleJoke === "" ? Joke[0] : SimpleJoke}</div>
            <div className="text text2">{SimpleJoke === "" ? Joke[1] : "" }</div>
            <div style={{zIndex : 1, position : "absolute", marginTop : 300, fontSize : 22}}>
              {TabEmojis.length === 0 ? '😆' : TabEmojis}
            </div>
            <div className="actions">
            </div>
          </div>
          
        :
        <div className="box b">
          <div className='load-joke text3'></div>
        </div>
        }
      </div>
      <div className="btns">
        <img src={next} alt="next" width={70} height={70} onClick={fetchJoke} />
      </div>
    </div>
  );
};

export default PrincipalScreen;
