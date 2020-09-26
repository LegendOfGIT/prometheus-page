export default function informationItems(state = [], action) {
    switch (action.type) {
        case 'ADD_INFORMATION_ITEMS': {
            return action.items;
        }
        default:
            return state
    }
};
