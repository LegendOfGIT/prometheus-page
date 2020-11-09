import { connect } from 'react-redux';
import Settings from '../../../components/stages/settings/Settings';
import {MODULE_ID_SETTINGS} from '../../../constants';
import translations from '../../../configs/translations';
import getTranslation from '../../../helpers/getTranslation';

const mapStateToProps = (state) => {
    const languages = Object.keys(translations).map(locale => {
        const language = locale.split('-')[0];

        const languageLabel = getTranslation(state, `LANGUAGE_${language.toUpperCase()}`);

        if (!languageLabel) {
            return;
        }

        return {
            language,
            languageLabel,
            locale
        };
    });

    return {
        renderModule: MODULE_ID_SETTINGS === state.activeModule
    };
};

export default connect(mapStateToProps)(Settings);
