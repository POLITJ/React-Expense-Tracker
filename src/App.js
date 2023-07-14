import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    { title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 28) },
    { title: "Potatoes", amount: 24.67, date: new Date(2021, 5, 28) },
    { title: "Toilet Paper", amount: 94.67, date: new Date(2021, 3, 15) },
    { title: "Car Insurance", amount: 294.67, date: new Date(2021, 6, 28) },
  ];

  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
