import logo from "./logo.svg";
import "./App.css";
import Homepage from "./components/Homepage.component";
import { useEffect, useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (window.paypal) {
      setIsLoading(false);
    }
  }, [window.paypal]);
  return <div>{!isLoading && <Homepage />}</div>;
}

export default App;
