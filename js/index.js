const ccpContainer = document.getElementById("ccp-container");
const ccpText = document.getElementById("ccp-text-container");
const sp1Container = document.getElementById("sp1-container");
const sp1Text = document.getElementById("sp1-text-container");
const pe1Container = document.getElementById("pe1-container");
const pe1Text = document.getElementById("pe1-text-container");
const rainyLink = document.getElementById("rainy-link");
const rainyGit = document.getElementById("rainy-git");
const communityLink = document.getElementById("community-link");
const communityGit = document.getElementById("community-git");
const babelLink = document.getElementById("babel-link");
const babelGit = document.getElementById("babel-git");

ccpContainer.addEventListener("mouseover", () => {
  ccpText.style.display = "flex";
  ccpText.style.flexDirection = "column";
  ccpText.style.justifyContent = "space-evenly";
});
ccpContainer.addEventListener("mouseleave", () => {
  ccpText.style.display = "none";
});
sp1Container.addEventListener("mouseover", () => {
  sp1Text.style.display = "flex";
  sp1Text.style.flexDirection = "column";
  sp1Text.style.justifyContent = "space-evenly";
});
sp1Container.addEventListener("mouseleave", () => {
  sp1Text.style.display = "none";
});
pe1Container.addEventListener("mouseover", () => {
  pe1Text.style.display = "flex";
  pe1Text.style.flexDirection = "column";
  pe1Text.style.justifyContent = "space-evenly";
});
pe1Container.addEventListener("mouseleave", () => {
  pe1Text.style.display = "none";
});
//Code from https://www.google.com/search?q=new+tab+using+javascript&sca_esv=07554fca3e6d53b6&sxsrf=AE3TifPszpmvQEG1Pz8B8ZXZxoJnhUZO3g%3A1748343941041&ei=hZw1aIOhAp7NwPAPsO6b0Q0&oq=new+tab+using+javq&gs_lp=Egxnd3Mtd2l6LXNlcnAiEm5ldyB0YWIgdXNpbmcgamF2cSoCCAAyBhAAGA0YHjIFEAAY7wUyCBAAGIAEGKIEMgUQABjvBTIFEAAY7wVIxxpQowRY0BBwAXgBkAEAmAGYAaAB5weqAQMwLji4AQPIAQD4AQGYAgmgAp4IwgIKEAAYsAMY1gQYR8ICBBAjGCfCAgYQABgWGB6YAwCIBgGQBgiSBwMxLjigB9s6sgcDMC44uAeYCA&sclient=gws-wiz-serp
rainyLink.addEventListener("click", () => {
  window.open("https://gustavboe.github.io/html-css-ca-GustavBoe/", "_blank");
});
rainyGit.addEventListener("click", () => {
  window.open("https://github.com/GustavBoe/html-css-ca-GustavBoe", "_blank");
});

communityLink.addEventListener("click", () => {
  window.open(
    "https://gustavboe.github.io/Semester-project-autumn24/",
    "_blank"
  );
});
communityGit.addEventListener("click", () => {
  window.open(
    "https://github.com/GustavBoe/Semester-project-autumn24",
    "_blank"
  );
});
babelLink.addEventListener("click", () => {
  window.open("https://glittery-toffee-87fbc4.netlify.app/", "_blank");
});
babelGit.addEventListener("click", () => {
  window.open("https://github.com/NoroffFEU/FED1-PE1-GustavBoe", "_blank");
});
