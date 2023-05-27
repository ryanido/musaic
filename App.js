import React from "react";
import store from "./app/store";
import Routes from "./features/navigation/Routes";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

