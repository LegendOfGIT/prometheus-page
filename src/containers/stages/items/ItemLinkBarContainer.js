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
        links: correspondingInformationItems.map((item) => {
            const providerInformation = providerIconMapping.find((mappingItem) => -1 !== item.itemId.indexOf(mappingItem.provider)) || {};
            const priceCurrent = item['price-current'] || 0;
            const priceInitial = item['price-initial'] || 0;

            const getReducedPrice = () => priceCurrent > 0 && priceInitial > 0 && priceCurrent !== priceInitial
                ? priceCurrent.toFixed(2)
                : undefined;

            return {
                itemId: item.itemId,
                link: item.link,
                linkImage: providerInformation.iconImage,
                priceInitial: priceInitial === 0 ? undefined : priceInitial.toFixed(2),
                priceReduced: getReducedPrice(),
                providerName: providerInformation.provider
            };
        })
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ loadInformationItems, toggleWishlistItem }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemLinkBar);
