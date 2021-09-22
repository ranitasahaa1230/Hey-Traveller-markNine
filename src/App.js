import React, { useState } from "react";
import "./styles.css";

const travelDictionary = {
  Mountains: [
    ["Munnar", "Kerala", "5/5"],
    ["Auli", "Uttarakhand", "4.5/5"],
    ["Kanchenjunga Mountains", "Sikkim", "4.5/5"]
  ],
  Beach: [
    ["Railay Beach", "Thailand", "4/5"],
    ["Whitehaven Beach", "Australia", "5/5"],
    ["Durdle Door", "England", "4.5/5"]
  ],
  Religious: [
    ["Vaishno Devi", "Kashmir", "5/5"],
    ["Rishikesh", "Uttarakhand", "4.5/5"],
    ["Golden Temple", "Amritsar", "4.5/5"]
  ]
};

const travelLists = Object.keys(travelDictionary);

export default function App() {
  const [placeList, setPlaces] = useState("");

  function travelClickHandler(place) {
    var placeList = travelDictionary[place];
    setPlaces(placeList);
  }

  return (
    <div className="App">
      <div className="main">
        <h1>
          <span role="img" aria-label="water">
            🚣
          </span>{" "}
          Hey Traveller!
        </h1>
        <p className="about">
          See a list of various places, their location and rating.<br></br>
          Choose a type to get started{" "}
        </p>

        <div className="listName">
          {travelLists.map((place) => {
            return (
              <span
                onClick={() => {
                  travelClickHandler(place);
                }}
                key={place}
              >
                {place}
              </span>
            );
          })}
        </div>

        <div className="showPlaces">
          <ul>
            {Array.from(placeList).map((travel) => {
              return (
                <li key={travel}>
                  {travel[0]}
                  <br />
                  <span className="location">Location: {travel[1]}</span>
                  <br />
                  <span className="rating">Rating: {travel[2]}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <footer>
        <div>
          <article>
            Connect with me!{" "}
            <span role="img" aria-label="love">
              💕
            </span>
          </article>
          <a href="https://github.com/ranitasahaa1230">
            <img
              alt="links"
              src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg"
            />
          </a>
          <a href="https://twitter.com/RanitaS99535426">
            <img
              alt="links"
              src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/twitter.svg"
            />
          </a>
          <a href="https://linkedin.com/in/saharanitaa1230dreamer">
            <img
              alt="links"
              src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg"
            />
          </a>
          <a href="https://instagram.com/suitcase_full_of_sunshine">
            <img
              alt="links"
              src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/instagram.svg"
            />
          </a>
        </div>
      </footer>
    </div>
  );
}
