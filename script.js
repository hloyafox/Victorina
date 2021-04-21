function onDragStart(event) {
  event.dataTransfer.setData("text", event.target.id);
  const newColor = "white";
  event.currentTarget.style.backgroundColor = newColor;
}

function onDragOver(event) {
  event.preventDefault();
}

function onDrop(event) {
  let idAnswer = event.dataTransfer.getData("text");
  console.log(idAnswer);
  let Answer = document.getElementById(idAnswer);
  let Weapon = event.target;
  let idWeapon = event.target.id;
  let Result = document.getElementById(idWeapon);
  console.log(idWeapon);
  let n = idAnswer.substr(6, 1);
  console.log(n);
  let t = idWeapon.substr(6, 1);
  console.log(t);
  if (n == t) {
    Result.style.border = "5px solid green";
    Answer.remove();
  } else {
    alert("Не угадали!");
  }
}
