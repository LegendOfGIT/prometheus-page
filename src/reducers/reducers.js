import { combineReducers } from 'redux';
import activeModule from './activeModule';
import informationItems from './informationItems';
import navigation from './navigation';
import translations from './translations';
import user from './user';
import wishlist from './wishlist';

export default combineReducers({
    activeModule,
    informationItems,
    navigation,
    translations,
    user,
    wishlist
});
