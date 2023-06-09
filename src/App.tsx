import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ApolloProvider } from "@apollo/client";
/** Local Modules */
import useConfig from "config";
import Router from "routes";

const App: React.FC = (): JSX.Element => {
  /** Config */
  const { useRedux, useGraphql } = useConfig();
  const { store, persist } = useRedux();
  const { adminProductsClient } = useGraphql();

  return (
    <React.Suspense fallback={<p>Cargando...!</p>}>
      <Provider store={store}>
        <PersistGate persistor={persist} loading={null}>
          <ApolloProvider client={adminProductsClient}>
            <Router />
          </ApolloProvider>
        </PersistGate>
      </Provider>
    </React.Suspense>
  );
}

export default App;