"use strict";

const baseUrl = "https://www.breakingbadapi.com/api";
const characters = "/characters";
/* const episodes = "/episodes"; */
/* const quotes = "/quotes"; */
/* const deaths = "/deaths"; */

const displayData = async () => {
  try {
    const response = await fetch(`${baseUrl}${characters}`);
    const data = await response.json();
    const ul = document.querySelector("#character__list");
    const allTheTags = [];

    data.forEach((character) => {
      const characterItem = document.createElement("li");
      characterItem.classList.add("character");

      const name = document.createElement("h2");
      name.textContent = character.name;
      name.classList.add("character__name");

      const img = document.createElement("img");
      img.src = character.img;
      img.classList.add("character__img");

      const div = document.createElement("div");
      div.classList.add("character__info");

      const birthday = document.createElement("p");
      birthday.textContent = `Birthday: ${character.birthday}`;

      const occupation = document.createElement("p");
      occupation.textContent = `Occupation: ${character.occupation}`;

      const status = document.createElement("p");
      status.textContent = `Status: ${character.status}`;

      const nickname = document.createElement("p");
      nickname.textContent = `Nickname: ${character.nickname}`;

      const portrayed = document.createElement("p");
      portrayed.textContent = `Portrayed: ${character.portrayed}`;

      div.append(birthday, occupation, status, nickname, portrayed);
      characterItem.append(name, img, div);

      allTheTags.push(characterItem);
    });
    ul.append(...allTheTags);
  } catch (error) {
    console.error(error);
  }
};

displayData();
