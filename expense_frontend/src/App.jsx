import { HashRouter,Route,Routes } from "react-router-dom";
import CreateExpense from './components/CreateExpense';
import ExpenseList from './components/ExpenseList';
import Signin from './components/Signin';
import Home from './components/Home';
import Nav from "./components/Nav";
import Signup from "./components/Signup";
import EditExpense from "./components/EditExpense";
import './app.css';
import Budget_tracker from "./components/Budget_tracker";
// import {logo} from './assets/Expense_tracer_back.jpg';
function App() {

  return (
    <>
    <div className="min-h-screen bg-custom-pattern bg-cover fade-in-out bg-center">
    <HashRouter>
    <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/create-expense" element={<CreateExpense/>}/>
        <Route path="/expense-list" element={<ExpenseList/>}/>
        <Route path="/login" element={<Signin/>}/>
        <Route path="/register" element={<Signup/>}/>
        <Route path="/edit-record/:id" element={<EditExpense/>}/>
        <Route path='/budget-track' element={<Budget_tracker/>}/>
      </Routes>
    </HashRouter>
    </div>
    </>
  )
}

export default App
