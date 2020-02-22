import React from "react";
// import { Route, Link } from 'react-router-dom';
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
// import WelcomePage from "./components/WelcomePage";



export default function App() {
  return (
    <main>
      <Header />
      <CharacterList />
      {/* <Link to='/'>Home</Link>
      <Link to='/character'>Character</Link>

      <Route exact path='/' component={WelcomePage} />
      <Route path='/characters' component={CharacterList} /> */}
    </main>
  );
}
