import { connect } from 'react-redux';
import Items from '../../../components/stages/overview/Items';
import loadInformationItems from '../../../actions/items/loadInformationItems';
import toggleWishlistItem from '../../../actions/wishlist/toggleWishlistItem';
import { bindActionCreators } from 'redux';
import { MODULE_ID_ITEM_OVERVIEW } from '../../../constants';

const mapStateToProps = (state) => {
    const isItemOnWishList = (itemId) => !!state.wishlist.items.find((item) => itemId === item.itemId);

    const providerIconMapping = [
        { provider: 'amazon', iconImage: 'amazon-icon.png' },
        { provider: 'otto', iconImage: 'otto-icon.png' }
    ];

    let informationItems = (state.informationItems || []).filter(item => item['title-image']);
    informationItems.forEach((informationItem) => {
        const { correspondingInformationItems = [], itemId } = informationItem;
        const firstCorrespondingItem = correspondingInformationItems[0] || {};
        informationItem.isOnWishlist = isItemOnWishList(itemId);

        informationItem.imageLink = firstCorrespondingItem.link;
        informationItem.links = correspondingInformationItems.map((item) => ({
            itemId: item.itemId,
            link: item.link,
            linkImage: (providerIconMapping.find((mappingItem) => -1 !== item.itemId.indexOf(mappingItem.provider)) || {}).iconImage
        }));
    });

    console.log(informationItems);

    return {
        informationItems,
        renderModule: MODULE_ID_ITEM_OVERVIEW === state.activeModule
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ loadInformationItems, toggleWishlistItem }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Items);
