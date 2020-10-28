import React from 'react';
import './App.css';
import ItemsContainer from './containers/stages/overview/ItemsContainer';
import SearchContainer from './containers/stages/header/SearchContainer';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import reducers from './reducers/reducers';
import storageStub from './storage/storageStub';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import NavigationContainer from './containers/stages/header/NavigationContainer';
import welcomeUser from './actions/welcomeUser';
import WishlistContainer from './containers/stages/wishlist/ItemsContainer';
import WishlistIconContainer from './containers/stages/header/WishlistIconContainer';

import './styling/main.css';

let store;

const storage = sessionStorage || storageStub;

if ('development' === process.env.NODE_ENV) {
    store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
} else {
    store = createStore(reducers, applyMiddleware(thunk));
}

function App() {
    if (!storage.getItem('prometheusFirstVisit')) {
        welcomeUser()(store.dispatch, store.getState);
    }

    return (
        <Provider store={store}>
            <div className="App">
                <header className="prometheus-header">
                    <h1 className="prometheus-header__title">PROMETHEUS</h1>
                    <section className="prometheus-header__content">
                        <section className="prometheus-header__logo">
                            <img src={'/pLogo.png'}/>
                        </section>
                        <NavigationContainer/>
                        <SearchContainer/>
                        <WishlistIconContainer/>
                    </section>
                </header>
                <div className="App-content">
                    <ItemsContainer/>
                    <WishlistContainer/>
                </div>
            </div>
        </Provider>
    );
}

export default App;
