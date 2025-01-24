const data = Deno.readTextFileSync("data/usersLoginData.json");
const transactions = Deno.readTextFileSync("data/usersTransactionsData.json");
const accountsData = Deno.readTextFileSync("data/usersAccountDetails.json");
const test = JSON.parse(Deno.readTextFileSync("data/test.json"));

console.log(test);
console.log(test["123"]);
console.log(test["234"]);
console.log(test["345"]);
test["345"].msg = "good";
const x = JSON.stringify(test);
console.log(x);

Deno.writeTextFileSync("data/test.json", x);
console.log(data);
console.log(transactions);
console.log(accountsData);
