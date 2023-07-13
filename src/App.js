import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 28) },
    { title: "Potatoes", amount: 24.67, date: new Date(2021, 5, 28) },
    { title: "Toilet Paper", amount: 94.67, date: new Date(2021, 3, 15) },
    { title: "Car Insurance", amount: 294.67, date: new Date(2021, 6, 28) },
  ];

  return (
    <div className="App">
      <h1> Let's get started</h1>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;
