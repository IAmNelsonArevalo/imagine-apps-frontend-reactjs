import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
/** Local Modules */
import useConfig from "config";
import Router from "routes";

const App: React.FC = (): JSX.Element => {
  /** Config */
  const { useRedux } = useConfig();
  const { store, persist } = useRedux();

  return (
    <React.Suspense fallback={<p>Cargando...!</p>}>
      <Provider store={store}>
        <PersistGate persistor={persist} loading={null}>
          <Router />
        </PersistGate>
      </Provider>
    </React.Suspense>
  );
}

export default App;