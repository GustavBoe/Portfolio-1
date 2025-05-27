const ccpContainer = document.getElementById("ccp-container");
const ccpText = document.getElementById("ccp-text-container");
const sp1Container = document.getElementById("sp1-container");
const sp1Text = document.getElementById("sp1-text-container");
const pe1Container = document.getElementById("pe1-container");
const pe1Text = document.getElementById("pe1-text-container");

ccpContainer.addEventListener("mouseover", () => {
  ccpText.style.display = "block";
});
ccpContainer.addEventListener("mouseleave", () => {
  ccpText.style.display = "none";
});
sp1Container.addEventListener("mouseover", () => {
  sp1Text.style.display = "block";
});
sp1Container.addEventListener("mouseleave", () => {
  sp1Text.style.display = "none";
});
pe1Container.addEventListener("mouseover", () => {
  pe1Text.style.display = "block";
});
pe1Container.addEventListener("mouseleave", () => {
  pe1Text.style.display = "none";
});
