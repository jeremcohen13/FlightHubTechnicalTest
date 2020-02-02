import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Switch } from "react-router-dom";
import People from "./components/People";
import Planets from "./components/Planets";
import Starships from "./components/Starships";

function App() {
  let [people, setPeople] = useState([]);
  let [planets, setPlanets] = useState([]);
  let [starships, setStarships] = useState([]);

  useEffect(() => {
    async function handlePeople() {
      let res = await fetch("https://swapi.co/api/people/?format=json");
      let data = await res.json();
      setPeople(data.results);
    }

    async function handlePlanets() {
      let res = await fetch("https://swapi.co/api/planets/?format=json");
      let data = await res.json();
      setPlanets(data.results);
    }
    async function handleStarships() {
      let res = await fetch("https://swapi.co/api/starships/?format=json");
      let data = await res.json();
      setStarships(data.results);
    }

    handlePeople();
    handlePlanets();
    handleStarships();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <BrowserRouter exact path="/"></BrowserRouter>
          <BrowserRouter exact path="/People">
            <People />
          </BrowserRouter>
          <BrowserRouter exact path="/Planets">
            <Planets />
          </BrowserRouter>
          <BrowserRouter exact path="/Starships">
            <Starships />
          </BrowserRouter>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
