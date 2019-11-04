import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const Header = props => {
  return (
    <>
      <h1>{props.title}</h1>
      <h3>{props.subtitle}</h3>
    </>
  );
};
// const Nav = () => {
//   return nav;
// };
// const ImgList = () => {
//   return ImgList;
// };

function App() {
  return (
    <div className="App">
      <Header title="my sample app" subtitle="my sub-t" />
      {/*
      <Nav />
      <ImgList />
       */}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
