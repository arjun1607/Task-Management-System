import "./App.css";
import ListTodoComponent from "./components/ListTodoComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoComponent from "./components/TodoComponent";
import RegisterComponent from "./components/RegisterComponent";
import LoginComponent from "./components/LoginComponent";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          {/* // http://localhost:3000 */}
          <Route path="/" element={<LoginComponent />}></Route>

          <Route path="/login" element={<LoginComponent />}></Route>

          <Route path="/register" element={<RegisterComponent />}></Route>
          {/* // http://localhost:3000/update-todo/1 */}
          <Route path="/update-todo/:id" element={<TodoComponent />}></Route>
          {/* // http://localhost:3000/add-todo */}
          <Route path="/add-todo" element={<TodoComponent />}></Route>
          {/* // http://localhost:3000/todos */}
          <Route path="/todos" element={<ListTodoComponent />}></Route>
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
