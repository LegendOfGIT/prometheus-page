import { combineReducers } from 'redux';
import activeModule from './activeModule';
import currentState from './currentState';
import informationItems from './informationItems';
import navigation from './navigation';
import search from './search';
import selectedItemId from './selectedItemId';
import translations from './translations';
import user from './user';
import wishlist from './wishlist';

export default combineReducers({
    activeModule,
    currentState,
    informationItems,
    navigation,
    search,
    selectedItemId,
    translations,
    user,
    wishlist
});
