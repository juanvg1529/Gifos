import React from "react";
import "./Search.css";
function Search() {
  return (
    <div className="Search-component">
      <section className="Search-Title">
        <h2 className="Title-Searrc"> ¡Inspirate y busca los mejores GIFS!</h2>
      </section>
      <section>
        <img
          className="SearchIMG"
          src="https://i.imgur.com/DuCVsVp.png"
          alt="headerIMG"
        />
      </section>
      <section className=" ">
        <input
          className="SearchBAR"
          type="search"
          id="gsearch"
          name="gsearch"
        ></input>
        <input type="submit" value="Submit"></input>
      </section>
    </div>
  );
}

export default Search;
