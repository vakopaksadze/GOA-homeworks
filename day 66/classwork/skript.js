// ყველა ელემენტის შენახვა ცვლადში
let chk1 = document.getElementById("chk1");
let chk2 = document.getElementById("chk2");
let btn = document.getElementById("checkBtn");
let result = document.getElementById("result");

// ღილაკზე დაჭერისას
btn.onclick = function() {
  // მომხმარებლის მონიშნული მნიშვნელობები (true ან false)
  let val1 = chk1.checked;
  let val2 = chk2.checked;

  // AND ოპერაცია
  let output = val1 && val2;

  // შედეგის გამოტანა პარაგრაფში
  result.textContent = "შედეგი: " + output;
};