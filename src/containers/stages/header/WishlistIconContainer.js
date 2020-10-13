import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import setActiveModule from '../../../actions/navigation/setActiveModule';
import WishlistIcon from '../../../components/stages/header/WishlistIcon';

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ setActiveModule }, dispatch);
};

export default connect(undefined, mapDispatchToProps)(WishlistIcon);
