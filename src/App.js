import moment from "moment";
import localization from "moment/locale/th";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import Layout from "./containers/Layout";
import RouteSwitch from "./Router";
// eslint-disable-next-line
import { persistor, store } from "./store";

const App = () => {
  moment.updateLocale("th", localization);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Layout>
            <RouteSwitch />
          </Layout>
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
