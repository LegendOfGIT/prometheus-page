import React from 'react';
import './App.css';
import ItemsContainer from './containers/stages/ItemsContainer';
import SearchContainer from './containers/stages/SearchContainer';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import reducers from './reducers/reducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import NavigationContainer from './containers/stages/NavigationContainer';

let store;

if ('development' === process.env.NODE_ENV) {
    store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}
else {
    store = createStore(reducers, applyMiddleware(thunk));
}

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <header className="App-header">
                    <NavigationContainer />
                    <SearchContainer/>
                </header>
                <div className="App-content">
                    <ItemsContainer/>
                </div>
            </div>
        </Provider>
    );
}

export default App;
