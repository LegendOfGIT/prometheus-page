import { combineReducers } from 'redux';
import informationItems from './informationItems';
import navigation from './navigation';
import translations from './translations';
import user from './user';
import wishlist from './wishlist';

export default combineReducers({
    informationItems,
    navigation,
    translations,
    user,
    wishlist
});
