import { connect } from 'react-redux';
import ItemLinkBar from '../../../components/stages/items/ItemLinkBar';
import loadInformationItems from '../../../actions/items/loadInformationItems';
import toggleWishlistItem from '../../../actions/wishlist/toggleWishlistItem';
import { bindActionCreators } from 'redux';
import { MODULE_ID_WISHLIST } from '../../../constants';

const mapStateToProps = (state, {itemId}) => {
    const { activeModule } = state;

    const informationItems = (MODULE_ID_WISHLIST === activeModule ? state.wishlist.items : state.informationItems) || [];
    const informationItem = informationItems.find((item) => itemId === item.itemId) || {};
    const correspondingInformationItems = informationItem.correspondingInformationItems;

    if(!correspondingInformationItems) {
        return {};
    }

    const providerIconMapping = [
        { provider: 'amazon', iconImage: 'amazon-icon.png' },
        { provider: 'otto', iconImage: 'otto-icon.png' },
        { provider: 'thalia', iconImage: 'thalia-icon.png' }
    ];

    return {
        links: correspondingInformationItems.map((item) => ({
            itemId: item.itemId,
            link: item.link,
            linkImage: (providerIconMapping.find((mappingItem) => -1 !== item.itemId.indexOf(mappingItem.provider)) || {}).iconImage
        }))
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ loadInformationItems, toggleWishlistItem }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemLinkBar);
