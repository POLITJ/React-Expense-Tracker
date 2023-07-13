import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    { title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 28) },
    { title: "Potatoes", amount: 24.67, date: new Date(2021, 5, 28) },
    { title: "Toilet Paper", amount: 94.67, date: new Date(2021, 3, 15) },
    { title: "Car Insurance", amount: 294.67, date: new Date(2021, 6, 28) },
  ];

  return (
    <div className="App">
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
