import { connect } from 'react-redux';
import Items from '../../../components/stages/overview/Items';
import loadInformationItems from '../../../actions/items/loadInformationItems';
import toggleWishlistItem from '../../../actions/wishlist/toggleWishlistItem';
import { bindActionCreators } from 'redux';
import { MODULE_ID_ITEM_OVERVIEW } from '../../../constants';

const mapStateToProps = (state) => {
    const isItemOnWishList = (itemId) => !!state.wishlist.items.find((item) => itemId === item.itemId);

    let informationItems = (state.informationItems || []).filter(item => item['title-image']);
    informationItems.forEach((informationItem) => {
        const { correspondingInformationItems = [] } = informationItem;
        const firstCorrespondingItem = correspondingInformationItems[0] || {};
        informationItem.isOnWishlist = isItemOnWishList(informationItem.itemId);
        informationItem.link = firstCorrespondingItem.link;
    });

    return {
        informationItems,
        renderModule: MODULE_ID_ITEM_OVERVIEW === state.activeModule
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ loadInformationItems, toggleWishlistItem }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Items);
