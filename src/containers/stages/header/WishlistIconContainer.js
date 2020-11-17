import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import setActiveModule from '../../../actions/navigation/setActiveModule';
import WishlistIcon from '../../../components/stages/header/WishlistIcon';
import getTranslation from '../../../helpers/getTranslation';

const mapStateToProps = (state) => {
    const { isSearchFieldActive } = state.search;

    return {
        renderIcon: !isSearchFieldActive,
        translations: {
            wishlistIconLabel: getTranslation(state, 'WISHLIST_ICON_LABEL')
        },
        wishlistHasItems: state.wishlist.items.length > 0
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ setActiveModule }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(WishlistIcon);
