import { useState } from "react";
import { Provider } from "react-redux";
import store from "./reduxContainer/Store";
import BookContainer from "./reduxContainer/BookContainer";
import Addtodo from "./components/Addtodo";

function App() {
  return (
    <div className=" App">
      <Addtodo/>
      <Todos />
    </div>
  );
}

export default App;
