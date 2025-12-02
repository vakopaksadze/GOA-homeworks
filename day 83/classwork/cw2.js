// Promise შექმნა
const requestPromise = new Promise((resolve, reject) => {
    const internetRequest = true;

    setTimeout(() => {
        if (internetRequest) {
            resolve("Internet OK");
        } else {
            reject("Internet ERROR");
        }
    }, 3000);
});

// ყოველ 0.5 წამში სტატუსის შემოწმება
const interval = setInterval(() => {
    console.log("Promise status: pending...");
}, 500);

// საბოლოო შედეგი
requestPromise
    .then(msg => {
        clearInterval(interval);
        console.log("Resolved:", msg);
    })
    .catch(err => {
        clearInterval(interval);
        console.log("Rejected:", err);
    });


    /*
Promise — ობიექტი ასინქრონული პროცესებისთვის.
აქვს 3 მდგომარეობა: pending, resolved, rejected.

resolve() — წარმატებით ასრულებს პრომისს.
reject() — შეცდომით ასრულებს პრომისს.

.then() — მუშაობს როცა resolve გამოიძახება.
.catch() — მუშაობს როცა reject გამოიძახება.
