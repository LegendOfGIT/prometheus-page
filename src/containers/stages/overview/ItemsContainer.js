import { connect } from 'react-redux';
import Items from '../../../components/stages/overview/Items';
import loadInformationItems from '../../../actions/items/loadInformationItems';
import toggleWishlistItem from '../../../actions/wishlist/toggleWishlistItem';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => {
    const isItemOnWishList = (itemId) => !!state.wishlist.items.find((item) => itemId === item._id);

    let informationItems = (state.informationItems || []).filter(item => item['title-image']);
    informationItems.forEach((informationItem) => {
        informationItem.isOnWishlist = isItemOnWishList(informationItem._id);
    });

    return {
        informationItems,
        renderModule: 'item-overview' === state.activeModule
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ loadInformationItems, toggleWishlistItem }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Items);
