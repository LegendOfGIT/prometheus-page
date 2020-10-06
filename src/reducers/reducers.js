import { combineReducers } from 'redux';
import informationItems from './informationItems';
import navigation from './navigation';
import translations from './translations';

export default combineReducers({
    informationItems,
    navigation,
    translations
});
