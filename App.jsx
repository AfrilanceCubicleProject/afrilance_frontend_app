import React from "react";
import Router from "./src/router/router.jsx";
import {store} from "./src/store/store.jsx";
import {Provider} from "react-redux";

function App() {

  return (
      <div>
          <Provider store={store} >
        <Router />
          </Provider>
      </div>
  )
}

export default App
