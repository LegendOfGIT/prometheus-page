let configMock = { useMocks: true };
jest.doMock('@/config', () => configMock);

jest.mock('@/repositories/getInformationItemsRepository');
jest.mock('@/repositories/getInformationItemsMockRepository');

import getInformationItemsRepository from '@/repositories/getInformationItemsRepository';
import getInformationItemsMockRepository from '@/repositories/getInformationItemsMockRepository';

const searchInformationItems = require('@/actions/items/searchInformationItems').default;

describe('searchInformationItems action', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('action uses mocks', () => {
         beforeEach(() => {
             getInformationItemsMockRepository.mockReturnValue(Promise.resolve({
                 items: [
                     { my: 'itemA' },
                     { my: 'itemB' }
                 ]
             }));
         });

         test('action calls repository mock with expected arguments', () => {
             searchInformationItems('NAVIGATION', 'abc')();
             expect(getInformationItemsMockRepository).toHaveBeenCalledWith('abc', 'NAVIGATION');
         });

         test('dispatches resolved items of repository with expected action', (done) => {
             const dispatchSpy = jest.fn();
             searchInformationItems('NAVIGATION')(dispatchSpy).then(() => {
                 expect(dispatchSpy).toHaveBeenCalledWith({
                     type: 'ADD_INFORMATION_ITEMS',
                     items: {
                         items: [
                             { my: 'itemA' },
                             { my: 'itemB' }
                         ]
                     }
                 });
                 done();
             });
         });
    });

    describe('action does not use mocks', () => {
        beforeEach(() => {
            getInformationItemsRepository.mockReturnValue(Promise.resolve());
            configMock.useMocks = false;
        });

        test('action calls repository with expected arguments', () => {
            searchInformationItems('NAVIGATION')();
            expect(getInformationItemsRepository).toHaveBeenCalledWith(undefined, 'NAVIGATION');
        });
    });
});
