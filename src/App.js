import React, { useState } from "react";
import "./App.css";
// import { menuList } from "./components/Cascader/mock";
import Cascader from "./components/Cascader";
import {MyTree} from "./components/Tree";

function App() {
  return (
    <div className="App">
      <Cascader></Cascader>
      <MyTree></MyTree>
    </div>
  );
}

export default App;
