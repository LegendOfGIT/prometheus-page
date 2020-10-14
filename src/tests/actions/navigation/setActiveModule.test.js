import setActiveModule from '@/actions/navigation/setActiveModule';

describe('setActiveModule action', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('call of action dispatches expected action', () => {
        const dispatchSpy = jest.fn();
        setActiveModule('MY_SWEET_MODULE')(dispatchSpy);
        expect(dispatchSpy).toHaveBeenCalledWith({
            type: 'SET_ACTIVE_MODULE',
            activeModule: 'MY_SWEET_MODULE'
        });
    });
});
