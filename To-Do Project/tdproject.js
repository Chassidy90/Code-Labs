
let textBox = document.querySelector("#textBox");

let button = document.querySelector("#submit");

let messagesContainer = document.querySelector("#messages");
button.addEventListener("click", () => {
  console.log(textBox.value);
  const li = document.querySelector("li");
  li.innerText = textBox.value;
  messagesContainer.appendChild(li);
});


