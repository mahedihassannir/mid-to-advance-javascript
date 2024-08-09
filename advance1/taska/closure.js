const createBackAccount = (initialBalance) => {

    let balance = initialBalance; // this is the private variable

    return {

        deposit: (amount) => {
            console.log(balance);
        },

        withdraw: (amount) => {
            console.log("withdraw");
        },
        getBalance: () => {

            console.log("balance");
        }
    };

};





const account = createBackAccount(2000);

account.deposit()
account.withdraw()
account.getBalance()
