import Axios from "axios";

export default () => (dispatch) => {
    Axios.get('http://localhost:3002/information-items')
        .then(response => {
            if(200 === response.status) {
                dispatch({
                    type: 'ADD_INFORMATION_ITEMS',
                    items: response.data.items
                })
                this.setState({ informationItems: response.data.items });
            }
        })
        .catch(() => {
            //  nothing to do here
        });
};