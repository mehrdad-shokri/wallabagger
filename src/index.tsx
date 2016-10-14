import * as React from "react";
import * as ReactDOM from "react-dom";
import { getSetup } from "./setup";
import { Provider } from "react-redux";
import { setStatus, loading } from "./actions";
import { store } from "./store";
import { EAppStatus } from "./constants/consts";
import App  from "./components/App";

store.dispatch(setStatus(EAppStatus.info, "Loading Wallabagger setup"));
store.dispatch(loading(getSetup()));

  ReactDOM.render(
      <Provider store={ store }>
        <App />
      </Provider>,
    document.getElementById("root")
  );