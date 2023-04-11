const Textarea = document.getElementById("mainTextArea");
const ConvertedWord = document.getElementById("converted-word");

Textarea.addEventListener("input", (event) => {
  let inputText = event.target.value;
  let convertedText = AddNewline(inputText);

  ConvertedWord.textContent = convertedText;
});

function AddNewline(text) {
  let datNewLine = text.replaceAll("-", "\r\n-");
  let newParagraph = datNewLine.replaceAll(
    "..",
    "\r\n\r\n===================================================================================="
  );
  let finalText = newParagraph.replaceAll("*", "*\r\n");

  return finalText;
}
