import { connect } from 'react-redux';
import Settings from '../../../components/stages/settings/Settings';
import {MODULE_ID_SETTINGS} from '../../../constants';
import translations from '../../../configs/translations';
import getTranslation from '../../../helpers/getTranslation';

const mapStateToProps = (state) => {
    const displayLanguages = Object.keys(translations).map(locale => {
        const languageLabel = getTranslation(state, `LANGUAGE_${locale.replace('-','_').toUpperCase()}`);

        if (!languageLabel) {
            return;
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
            titleLabel: getTranslation(state, 'SETTINGS_TITLE'),
        }
    };
};

export default connect(mapStateToProps)(Settings);
