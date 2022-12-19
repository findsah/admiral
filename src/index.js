import React, { Suspense } from "react";
import ReactDom from "react-dom/client";
import App from "./App";

// toastify css
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter } from "react-router-dom";

// store
import { Provider } from "react-redux";
import store from "./services/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import "./assets/Global.css";

const loadingMarkup = (
  <div className="py-4 text-center">
    <h3>Loading..</h3>
  </div>
);

let persistor = persistStore(store);

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <Suspense fallback={loadingMarkup}>
    <React.StrictMode>
      <BrowserRouter>
        <Provider {...{ store }}>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  </Suspense>
);
