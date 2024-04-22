// App.js
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Welcome from './screens/Welcome';
import LoginAndSignup from './screens/LoginAndSignup';
import PrincipalScreen from './screens/PrincipalScreen';
import JokesCategorie from './screens/JokesCategorie';
import Account from './screens/Account';

const App = () => {
  return (
    <Routes>
      <Route path="/LoginAndSignup" element={<LoginAndSignup />} />
      <Route path="/JokesCategorie" element={<JokesCategorie />} />
      <Route path="/PrincipalScreen" element={<PrincipalScreen />} />
      <Route path="/Account" element={<Account />} />
      <Route path="/" element={<Welcome />} />
    </Routes>
  );
};

export default App;

// import React, { useState, useEffect } from "react";

// function App() {
//   // Définir l'état du composant pour stocker la blague
//   const [joke, setJoke] = useState("");

//   // Définir une fonction pour faire une requête au back-end et obtenir une blague
//   const fetchJoke = async () => {
//     try {
//       // Faire une requête GET au back-end avec la catégorie et la langue choisies
//       const response = await fetch(
//         "https://v2.jokeapi.dev/joke/Programming"
//       );
//       // Convertir la réponse en JSON
//       const data = await response.json();
//       // Vérifier si la réponse contient une blague
//       if (data.joke) {
//         // Mettre à jour l'état du composant avec la blague
//         setJoke(data.joke);
//       } else {
//         // Afficher un message d'erreur
//         setJoke("Veillez patienter un moment...");
//       }
//       console.log(response);
//     } catch (error) {
//       // Afficher un message d'erreur
//       setJoke("Désolé, il y a eu un problème avec la requête.");
//     }
//   };


// // Définir une fonction pour faire une requête à l'API LibreTranslate
// // const translate = async () => {
// //   try {
// //     // Faire une requête POST à l'URL de l'API avec les paramètres
// //     const res = await fetch("https://libretranslate.com/translate", {
// //     method: "POST",
// //     body: JSON.stringify({
// //       q: "Hello!",
// //       source: "en",
// //       target: "es"
// //     }),
// //     headers: { "Content-Type": "application/json" }
// //   });

// //   console.log(await res.json());


// //   } catch (error) {
// //     // Afficher un message d'erreur dans la console
// //     console.error(error.message);
// //   }
// // };

// // // Appeler la fonction translate
// // translate();

//   // Utiliser le hook useEffect pour appeler la fonction fetchJoke au montage du composant
//   useEffect(() => {
//     fetchJoke();
//   }, []);

//   // Rendre le composant avec la blague
//   return (
//     <div className="App">
//       <h1>Projet de blagues</h1>
//       <p>{joke}</p>
//       <button onClick={fetchJoke}>Nouvelle blague</button>
//     </div>
//   );
// }

// export default App;
