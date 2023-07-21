const cityInput = document.getElementById("input-search-bar");
const searchBtn = document.getElementById("searchBtn");
const resetBtn = document.getElementById("resetBtn");

searchBtn.addEventListener("click", () => {
  console.log(cityInput.value);
});
