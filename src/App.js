import React from "react";
import './App.less';
import AppRouter from "./router";
import { QueryCache, ReactQueryCacheProvider } from 'react-query'

const queryCache = new QueryCache()

const App = () =>
  <ReactQueryCacheProvider queryCache={queryCache}>
      <AppRouter />
  </ReactQueryCacheProvider>

export default App;
