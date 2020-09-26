import React from 'react';
import './App.css';
import ItemsContainer from './containers/stages/ItemsContainer';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import reducers from './reducers/reducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

let store;

if ('development' === process.env.NODE_ENV) {
    store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}
else {
    store = createStore(reducers, applyMiddleware(thunk));
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Provider store={store}>
            <ItemsContainer/>
          </Provider>
      </header>
    </div>
  );
}

export default App;
