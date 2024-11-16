import { useEffect } from "react";

export function ShowButton(props) {
  useEffect(() => {
    console.log("ShowButton mounted");
    // timer

    return () => {
      console.log("ShowButton unmounted");
    };
  }, []);

  return <button onClick={props.onClick}>Hide me</button>;
}

export function HideButton(props) {
  useEffect(() => {
    console.log("HideButton mounted");

    return () => {
      console.log("HideButton unmounted");
    };
  }, []);

  return <button onClick={props.onClick}>Show me</button>;
}
