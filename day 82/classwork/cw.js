 // Account კლასი
    class Account {
        constructor(firstName, lastName, email, password) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.email = email;
            this.password = password;
        }
    }

    const accounts = [];

    // ფორმის წამოღება
    const form = document.getElementById("accountForm");

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // გვერდის გადატვირთვის თავიდან აცილება

        // Arrow function — იღებს მნიშვნელობებს და ქმნის ობიექტს
        const handleSubmit = () => {
            const firstName = document.getElementById("firstName").value;
            const lastName = document.getElementById("lastName").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            // ახალი ობიექტის შექმნა
            const account = new Account(firstName, lastName, email, password);

            // მასივში დამატება
            accounts.push(account);

            console.log("ახალი ობიექტი:", account);
            console.log("Accounts array:", accounts);
        };

        handleSubmit();
    });

