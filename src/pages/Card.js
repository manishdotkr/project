import React from "react";
import "../assets/css/card.css";

function Card() {
  return (
    <article className="magic-card-box">
      <a href="#">
        <div class="magic-card">
          <div class="wrapper">
            <img src={require(`../assets/images/dark_rider-cover.jpg`)} class="cover-image" />
          </div>
          <img src={require(`../assets/images/dark_rider-title.png`)} class="title" />
          <img src={require(`../assets/images/dark_rider-character.webp`)} class="character" />
        </div>
      </a>

      <a href="#">
        <div class="magic-card">
          <div class="wrapper">
            <img src={require(`../assets/images/force_mage-cover.jpg`)} class="cover-image" />
          </div>
          <img src={require(`../assets/images/force_mage-title.png`)} class="title" />
          <img src={require(`../assets/images/force_mage-character.webp`)} class="character" />
        </div>
      </a>
    </article>
  );
}

export default Card;
