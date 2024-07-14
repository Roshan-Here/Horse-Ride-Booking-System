"use client";

import { Provider } from "react-redux";

import store, { persistor } from "./store";
import { PersistGate } from "redux-persist/es/integration/react";

export function Providers({ children }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>{children}</PersistGate>
    </Provider>
  );
}
