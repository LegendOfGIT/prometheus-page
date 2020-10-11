import React from 'react';
import './App.css';
import ItemsContainer from './containers/stages/ItemsContainer';
import SearchContainer from './containers/stages/SearchContainer';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import reducers from './reducers/reducers';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import NavigationContainer from './containers/stages/NavigationContainer';

import './styling/main.css';

let store;

if ('development' === process.env.NODE_ENV) {
    store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
} else {
    store = createStore(reducers, applyMiddleware(thunk));
}

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <header className="prometheus-header">
                    <h1 className="prometheus-header__title">PROMETHEUS</h1>
                    <section className="prometheus-header__content">
                        <NavigationContainer/>
                        <SearchContainer/>
                    </section>
                </header>
                <div className="App-content">
                    <ItemsContainer/>
                </div>
            </div>
        </Provider>
    );
}

export default App;
