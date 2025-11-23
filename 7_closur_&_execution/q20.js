
// Question 1: Closure Counter


// createCounter uses a closure to store a private count variable
function createCounter() {
    let count = 0; // private variable

    return {
        // increases count
        increment: function () {
            count++;
            console.log("Current count:", count);
        },
        // decreases count
        decrement: function () {
            count--;
            console.log("Current count:", count);
        },
        // displays count
        getCount: function () {
            console.log("Current count:", count);
        }
    };
}


const counter1 = createCounter();
counter1.increment();
counter1.increment();
counter1.decrement();

// Creating another counter shows separate private values
const counter2 = createCounter();
counter2.increment();



// Question 2: Bank Account Closures


// createBankAccount uses closures to keep balance and history private
function createBankAccount() {
    let balance = 0; // private variable
    let transactionHistory = []; // private history

    return {
        // deposit money and record transaction
        deposit: function (amount) {
            balance += amount;
            transactionHistory.push(`Deposited: ${amount}`);
            console.log(`Deposited: ${amount}`);
        },
        // withdraw money only if balance is enough
        withdraw: function (amount) {
            if (amount > balance) {
                transactionHistory.push(`Failed withdrawal: ${amount}`);
                console.log("Insufficient balance");
            } else {
                balance -= amount;
                transactionHistory.push(`Withdrawn: ${amount}`);
                console.log(`Withdrawn: ${amount}`);
            }
        },
        // check current balance
        getBalance: function () {
            console.log("Current balance:", balance);
        },
        // view transaction history
        getHistory: function () {
            console.log("Transaction History:", transactionHistory);
        }
    };
}


const account = createBankAccount();
account.deposit(500);
account.withdraw(200);
account.withdraw(400);
account.getBalance();
account.getHistory();

console.log(account.balance); // undefined