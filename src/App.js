import React from 'react';
import './App.css';
import ItemsContainer from './containers/stages/overview/ItemsContainer';
import SearchContainer from './containers/stages/header/SearchContainer';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import getTranslation from './helpers/getTranslation';
import reducers from './reducers/reducers';
import storageStub from './storage/storageStub';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import NavigationContainer from './containers/stages/header/NavigationContainer';
import refreshPage from './actions/refreshPage';
import LogoIconContainer from './containers/stages/header/LogoIconContainer';
import SettingsContainer from './containers/stages/settings/SettingsContainer';
import SettingsIconContainer from './containers/stages/header/SettingsIconContainer';
import SingleItemViewContainer from './containers/stages/itemview/SingleItemViewContainer';
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
    refreshPage()(store.dispatch);

    if (!storage.getItem('prometheusFirstVisit')) {
        welcomeUser()(store.dispatch, store.getState);
    }

    document.title = getTranslation(store.getState(), 'PAGE_TITLE');

    return (
        <Provider store={store}>
            <div className="App">
                <header className="prometheus-header">
                    <section className="prometheus-header__content">
                        <LogoIconContainer/>
                        <SearchContainer/>
                        <NavigationContainer/>
                        <WishlistIconContainer/>
                        <SettingsIconContainer/>
                        <SingleItemViewContainer/>
                    </section>
                </header>
                <div className="App-content">
                    <ItemsContainer/>
                    <SettingsContainer/>
                    <WishlistContainer/>
                </div>
            </div>
        </Provider>
    );
}

export default App;
