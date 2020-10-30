import { connect } from 'react-redux';
import ItemWishlistIcon from '../../../components/stages/items/ItemWishlistIcon';
import toggleWishlistItem from '../../../actions/wishlist/toggleWishlistItem';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state, { itemId }) => {
    const isItemOnWishList = () => !!state.wishlist.items.find((item) => itemId === item.itemId);

    return {
        isOnWishlist: isItemOnWishList()
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ toggleWishlistItem }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemWishlistIcon);
