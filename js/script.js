console.log("JS OK");

//# PRELIMINARI
const expenseElement = document.getElementById("spesa");

//# Creiamo la lista della spesa
const expenseList = ["Carne", "Latte", "Uova", "Cipolle"];

//# Inizializzo la variabile vuota
let expense = "";

//# Creo il ciclo con il FOR
// for (let i = 0; i < expenseList.length; i++) {
//   expense += " " + expenseList[i];
// }

//# Creo il ciclo con il WHILE
let i = 0;
while (i < expenseList.length) {
  expense += " " + expenseList[i];
  i++;
}

//# Stampo in pagina
expenseElement.innerText = expense;
