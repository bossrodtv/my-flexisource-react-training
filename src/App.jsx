import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [show, setShow] = useState(true);

  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <div>
      {show ? (
        <ShowButton onClick={toggleShow} />
      ) : (
        <HideButton onClick={toggleShow} />
      )}
    </div>
  );
}

export default App;

function ShowButton(props) {
  useEffect(() => {
    console.log("ShowButton mounted");
    // timer

    return () => {
      console.log("ShowButton unmounted");
    };
  }, []);

  return <button onClick={props.onClick}>Hide me</button>;
}

function HideButton(props) {
  useEffect(() => {
    console.log("HideButton mounted");

    return () => {
      console.log("HideButton unmounted");
    };
  }, []);

  return <button onClick={props.onClick}>Show me</button>;
}
