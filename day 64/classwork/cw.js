// ფუნქცია, რომელიც იმუშავებს ღილაკზე დაჭერისას
function combineCredentials() {
  // ვიღებთ username ველის მნიშვნელობას
  let username = document.getElementById("username").value;
  
  // ვიღებთ password ველის მნიშვნელობას
  let password = document.getElementById("password").value;
  
  // ვაერთიანებთ მათ ერთ სტრინგში
  let combined = username + " " + password;
  
  // ვბეჭდავთ შედეგს კონსოლში
  console.log(combined);
}