import { connect } from 'react-redux';
import Items from '../../../components/stages/wishlist/Items';
import toggleWishlistItem from '../../../actions/wishlist/toggleWishlistItem';
import { bindActionCreators } from 'redux';
import { MODULE_ID_WISHLIST } from '../../../constants';

const mapStateToProps = (state) => {
    return {
        informationItems: (state.wishlist.items || []).filter(item => item['title-image']),
        renderModule: MODULE_ID_WISHLIST === state.activeModule
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ toggleWishlistItem }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Items);
