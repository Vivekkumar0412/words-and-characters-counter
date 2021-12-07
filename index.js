let texta = document.getElementById("textbox");
texta.addEventListener("input", function () {
  let text = this.value;
  let character = text.length;
  document.getElementById("cha").innerHTML = character;
  text = text.trim();

  let word = text.split(" ");
  let cleanList = word.filter(function (elm) {
    return elm != "";
  });
  let words = cleanList.length;
  document.getElementById("word").innerHTML = words;
});
