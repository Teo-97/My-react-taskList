import Header from "./Components/Header";
import { Task } from "./Components/Task";

const MealsOfTheDay = [
  { name: "Breackfast" },
  { name: "Snack" },
  { name: "Lunch" },
];
function App() {
  return (
    <div className="app">
      <Header />
      <Task list={MealsOfTheDay} />
    </div>
  );
}

export default App;
