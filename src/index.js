import React from "react";
import ReactDOM from "react-dom/client";
import FaviconNotificationContextProvider, {
  useFaviconNotification,
} from "./FaviconNotificationContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

function App() {
  const [favicon, setFavicon] = useFaviconNotification();

  const handleIncrease = () => {
    setFavicon({ ...favicon, show: true, counter: favicon.counter + 1 });
  };

  const handleDecrease = () => {
    setFavicon({ ...favicon, show: true, counter: favicon.counter - 1 });
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={handleDecrease}>-</button>
      <button onClick={handleIncrease}>+</button>
    </div>
  );
}

root.render(
  <FaviconNotificationContextProvider>
    <App />
  </FaviconNotificationContextProvider>
);
