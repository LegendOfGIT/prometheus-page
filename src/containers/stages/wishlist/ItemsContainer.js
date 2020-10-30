import { connect } from 'react-redux';
import Items from '../../../components/stages/wishlist/Items';
import { MODULE_ID_WISHLIST } from '../../../constants';

const mapStateToProps = (state) => {
    return {
        informationItems: (state.wishlist.items || []).filter(item => item['title-image']),
        renderModule: MODULE_ID_WISHLIST === state.activeModule
    };
};

export default connect(mapStateToProps)(Items);
