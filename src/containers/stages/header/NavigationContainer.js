import { connect } from 'react-redux';
import Navigation from '../../../components/stages/header/Navigation';

const mapStateToProps = (state) => {
    const { navigationMode } = state.navigation;

    return {
        showBreadcrumbs: 'breadcrumbs' === navigationMode,
        showSelectNavigationId:  'selectNavigationId' === navigationMode
    };
};

export default connect(mapStateToProps)(Navigation);
