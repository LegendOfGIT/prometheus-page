const React = require('react');
const renderer = require('react-test-renderer');

import WishlistIcon from '@/components/stages/header/WishlistIcon';

describe('WishlistIcon', () => {
    const getTestingProps = (props) => {
        return Object.assign(
            {},
            {
                setActiveModule: jest.fn()
            },
            props
        )
    };

    function assertSnapshot(props = getTestingProps()) {
        expect(renderer.create(<WishlistIcon {...props} />).toJSON()).toMatchSnapshot();
    }

    test('component renders without exploding', () => {
        assertSnapshot();
    });

    test('component renders active wishlist-icon if there is an item on the wishlist', () => {
        assertSnapshot(getTestingProps({
            wishlistHasItems: true
        }))
    });
});
