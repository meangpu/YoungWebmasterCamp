const Textarea = document.getElementById("mainTextArea");
const ConvertedWord = document.getElementById("converted-word");

Textarea.addEventListener("input", (event) => {
  let inputText = event.target.value;
  let convertedText = inputText.replaceAll("-", "\r\n-");
  ConvertedWord.textContent = convertedText;
});
