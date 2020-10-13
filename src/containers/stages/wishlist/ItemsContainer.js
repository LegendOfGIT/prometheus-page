import { connect } from 'react-redux';
import Items from '../../../components/stages/wishlist/Items';
import setActiveModule from '../../../actions/navigation/setActiveModule';
import toggleWishlistItem from '../../../actions/wishlist/toggleWishlistItem';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => {
    return {
        informationItems: (state.wishlist.items || []).filter(item => item['title-image']),
        renderModule: 'wishlist' === state.activeModule
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ setActiveModule, toggleWishlistItem }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Items);
