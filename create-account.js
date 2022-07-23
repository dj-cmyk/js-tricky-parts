function createAccount(pin, amount=0) {

    return {
        checkBalance(inputPin) {
            if (inputPin !== pin) return "Incorrect PIN";
            return `$${amount}`;
          },
          deposit(inputPin, newAmount) {
            if (inputPin !== pin) return "Incorrect PIN";
            amount += newAmount;
            return `Succesfully deposited $${newAmount}. Current balance: $${amount}.`;
          },
          withdraw(inputPin, withdrawalAmount) {
            if (inputPin !== pin) return "Incorrect PIN";
            if (withdrawalAmount > amount)
              return "Withdrawal amount exceeds account balance. Transaction cancelled.";
            amount -= withdrawalAmount;
            return `Succesfully withdrew $${withdrawalAmount}. Current balance: $${amount}.`;
          },
          changePin(oldPin, newPin) {
            if (oldPin !== pin) return "Incorrect PIN";
            pin = newPin;
            return "PIN successfully changed!";
          }
    }
}

module.exports = { createAccount };
