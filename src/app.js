/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Any string");

  const pronouns = [their, its, her, our];
  const adjs = [heavy, slow, large, dusty];
  const nouns = [shoes, cat, desk, car];

  const domains = [];

  for (const p of pronouns) {
    for (const a of adjs) {
      for (const n of nouns) {
        const d = p + a + n + ".com";
        domains.push(d);
      }
    }
  }
  console.log(domains);

  const listItems = domains.join("<br/>");
  document.querySelector("div").innerHTML = listItems;
};
