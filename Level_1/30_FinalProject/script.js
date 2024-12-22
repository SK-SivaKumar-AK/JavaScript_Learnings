document.addEventListener("DOMContentLoaded", () => {
    const addTransactionBtn = document.getElementById("addTransactionBtn");
    const transactionList = document.getElementById("transactionList");
    const totalIncome = document.getElementById("totalIncome");
    const totalExpenses = document.getElementById("totalExpenses");
    const balance = document.getElementById("balance");

    // Function to display the transaction list
    function displayTransaction() {
        transactionList.innerHTML = ""; // Clear the transaction list first
        const storedTransactions = localStorage.getItem("transaction");
        const transaction = storedTransactions ? JSON.parse(storedTransactions) : [];
        
        transaction.forEach((transactions, index) => {
            const li = document.createElement("li");
            const amountFormatted = transactions.amount.toFixed(2);

            // Set different background color based on category
            if (transactions.category === "Income") {
                li.innerHTML = `${transactions.name} - ${amountFormatted} (${transactions.category}) <button class="delete-btn" onclick="deleteTransaction(${index})">Delete</button>`;
                li.style.backgroundColor = "#0e3a0f";
                li.style.color = "white";
            } else {
                li.innerHTML = `${transactions.name} - ${amountFormatted} (${transactions.category}) <button class="delete-btn" onclick="deleteTransaction(${index})">Delete</button>`;
                li.style.backgroundColor = "#705814";
                li.style.color = "white";
            }
            transactionList.appendChild(li);
        });
    }

    // Add transaction event listener
    addTransactionBtn.addEventListener("click", addTransaction);

    // Function to add a new transaction
    function addTransaction() {
        const name = document.getElementById("transactionName").value;
        const amount = parseFloat(document.getElementById("transactionAmount").value);
        const category = document.getElementById("transactionCategory").value;

        // Validate the input
        if (name && !isNaN(amount)) {
            const transaction = JSON.parse(localStorage.getItem("transaction") || "[]");
            const newTransaction = { name, amount, category };
            transaction.push(newTransaction);
            localStorage.setItem("transaction", JSON.stringify(transaction)); // Save to localStorage
            displayTransaction(); // Update the displayed list
            updateSummary(); // Update the summary (total income, expenses, balance)
        }
    }

    // Function to update the summary
    function updateSummary() {
        const transaction = JSON.parse(localStorage.getItem("transaction") || "[]");
        let totalIncomeValue = 0;
        let totalExpensesValue = 0;

        // Calculate total income and total expenses
        transaction.forEach((transaction) => {
            if (transaction.category === "Income") {
                totalIncomeValue += transaction.amount;
            } else {
                totalExpensesValue += transaction.amount;
            }
        });

        // Calculate balance
        const balanceValue = totalIncomeValue - totalExpensesValue;

        // Update the summary in the UI
        totalIncome.textContent = totalIncomeValue.toFixed(2);
        totalExpenses.textContent = totalExpensesValue.toFixed(2);
        balance.textContent = balanceValue.toFixed(2);
    }

    // Function to delete a transaction
    function deleteTransaction(index) {
        const transaction = JSON.parse(localStorage.getItem("transaction"));
        transaction.splice(index, 1); // Remove the transaction at the given index
        localStorage.setItem("transaction", JSON.stringify(transaction)); // Save updated list to localStorage
        displayTransaction(); // Re-display the updated transaction list
        updateSummary(); // Update the summary
    }

    // Expose the deleteTransaction function globally
    window.deleteTransaction = deleteTransaction;

    // Initial display and summary update when the page loads
    displayTransaction();
    updateSummary();
});
