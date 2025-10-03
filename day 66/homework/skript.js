// 2) Check OR with checkboxes
function checkOr() {
    let v1 = document.getElementById("val1").checked;
    let v2 = document.getElementById("val2").checked;
    let result = v1 || v2; // || → true თუ ერთ-ერთი მაინც trueა
    document.getElementById("orOut").innerText = "Result: " + result;
}
document.getElementById("orBtn").addEventListener("click", checkOr);


// 3) Check NOT with checkbox
function checkNot() {
    let val = document.getElementById("notVal").checked;
    let result = !val; // ! → აბრუნებს საპირისპიროს
    document.getElementById("notOut").innerText = "Result: " + result;
}
document.getElementById("notBtn").addEventListener("click", checkNot);


// 4) Check AND with numbers
function checkAnd() {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let result = (n1 > 10) && (n2 > 10); // && → true მხოლოდ მაშინ, თუ ორივე პირობა სწორია
    document.getElementById("andOut").innerText = "Result: " + result;
}
document.getElementById("andBtn").addEventListener("click", checkAnd);


// 5) Check OR with numbers
function checkOrNum() {
    let a = Number(document.getElementById("valA").value);
    let b = Number(document.getElementById("valB").value);
    let result = (a < 5) || (b < 5); // || → true თუ რომელიმე ნაკლებია 5-ზე
    document.getElementById("orNumOut").innerText = "Result: " + result;
}
document.getElementById("orNumBtn").addEventListener("click", checkOrNum);