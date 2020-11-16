import { connect } from 'react-redux';
import SingleProductView from '../../../components/stages/itemview/SingleItemView';
import { MODULE_ID_SINGLE_PRODUCT_VIEW } from '../../../constants';
import getItemByItemId from "../../../helpers/getItemByItemId";

const mapStateToProps = (state) => {
    const selectedItem = getItemByItemId(state, state.selectedItemId);

    return {
        selectedItem,
        renderModule: MODULE_ID_SINGLE_PRODUCT_VIEW === state.activeModule
    };
};

export default connect(mapStateToProps)(SingleProductView);
