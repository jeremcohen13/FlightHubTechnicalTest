import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Switch } from "react-router-dom";
import People from "./components/People";
import Planets from "./components/Planets";
import Starships from "./components/Starships";
import Home from "./components/Home";
import Searchbar from "./components/Searchbar";

function App() {
  let [people, setPeople] = useState([]);
  let [planets, setPlanets] = useState([]);
  let [starships, setStarships] = useState([]);
  let [searchPeople, setSearchPeople] = useState([]);

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

    async function handleSearchPeople() {
      let res = await fetch("https://swapi.co/api/people/?search");
      let data = await res.json();
      setSearchPeople(data.results);
    }

    handlePeople();
    handlePlanets();
    handleStarships();
    handleSearchPeople();
  }, []);
  console.log("data", searchPeople);

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <BrowserRouter exact path="/Home">
            <Home />
          </BrowserRouter>
          <BrowserRouter exact path="/People">
            <People data={people} />
          </BrowserRouter>
          <BrowserRouter exact path="/Planets">
            <Planets data={planets} />
          </BrowserRouter>
          <BrowserRouter exact path="/Starships">
            <Starships data={starships} />
          </BrowserRouter>
          <BrowserRouter>
            <Searchbar />
          </BrowserRouter>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
