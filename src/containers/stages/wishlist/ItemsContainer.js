import { connect } from 'react-redux';
import Items from '../../../components/stages/wishlist/Items';
import {MODULE_ID_ITEM_OVERVIEW, MODULE_ID_WISHLIST, STATE_PENDING} from '../../../constants';

const mapStateToProps = (state) => {
    return {
        informationItems: (state.wishlist.items || []).filter(item => item['title-image']),
        renderModule: MODULE_ID_WISHLIST === state.activeModule,
        showLoadingAnimation: MODULE_ID_WISHLIST === state.activeModule && STATE_PENDING === state.currentState,
    };
};

export default connect(mapStateToProps)(Items);
