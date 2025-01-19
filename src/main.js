const data = Deno.readTextFileSync("data/usersLoginData.json");
const transactions = Deno.readTextFileSync("data/usersTransactionsData.json");
const accountsData = Deno.readTextFileSync("data/usersAccountDetails.json");

console.log(data);
console.log(transactions);
console.log(accountsData);
