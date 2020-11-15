import { connect } from 'react-redux';
import Settings from '../../../components/stages/settings/Settings';
import {MODULE_ID_SETTINGS} from '../../../constants';
import translations from '../../../configs/translations';
import getTranslation from '../../../helpers/getTranslation';
import { bindActionCreators } from 'redux';
import saveUserSettings from '../../../actions/settings/saveUserSettings';

const mapStateToProps = (state) => {

    const displayLanguages = Object.keys(translations).map(locale => {
        const languageLabel = getTranslation(state, `LANGUAGE_${locale.replace('-','_').toUpperCase()}`);

        if (!languageLabel) {
            return undefined;
        }

        return {
            isSelected: locale === state.user.settings.displayLanguage,
            languageLabel,
            locale
        };
    }).filter(language => language);

    return {
        displayLanguages,
        renderModule: MODULE_ID_SETTINGS === state.activeModule,
        translations: {
            displayLanguageLabel: getTranslation(state, 'SETTINGS_DISPLAY_LANGUAGE'),
            pageTitle: getTranslation(state, 'PAGE_TITLE'),
            saveButtonLabel: getTranslation(state, 'SETTINGS_SAVE_BUTTON_LABEL'),
            titleLabel: getTranslation(state, 'SETTINGS_TITLE'),
        }
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ saveUserSettings }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
