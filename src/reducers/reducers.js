import { combineReducers } from 'redux';
import activeModule from './activeModule';
import informationItems from './informationItems';
import navigation from './navigation';
import selectedItemId from './selectedItemId';
import translations from './translations';
import user from './user';
import wishlist from './wishlist';

export default combineReducers({
    activeModule,
    informationItems,
    navigation,
    selectedItemId,
    translations,
    user,
    wishlist
});
