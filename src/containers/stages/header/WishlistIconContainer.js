import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import setActiveModule from '../../../actions/navigation/setActiveModule';
import WishlistIcon from '../../../components/stages/header/WishlistIcon';

const mapStateToProps = (state) => {
    return {
        wishlistHasItems: state.wishlist.items.length > 0
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ setActiveModule }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(WishlistIcon);
