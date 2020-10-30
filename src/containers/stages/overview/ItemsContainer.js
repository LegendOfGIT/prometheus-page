import { connect } from 'react-redux';
import Items from '../../../components/stages/overview/Items';
import loadInformationItems from '../../../actions/items/loadInformationItems';
import { bindActionCreators } from 'redux';
import { MODULE_ID_ITEM_OVERVIEW } from '../../../constants';

const mapStateToProps = (state) => {
    let informationItems = (state.informationItems || []).filter(item => item['title-image']);
    informationItems.forEach((informationItem) => {
        const { correspondingInformationItems = [] } = informationItem;
        const firstCorrespondingItem = correspondingInformationItems[0] || {};
        informationItem.imageLink = firstCorrespondingItem.link;
    });

    return {
        informationItems,
        renderModule: MODULE_ID_ITEM_OVERVIEW === state.activeModule
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ loadInformationItems }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Items);
