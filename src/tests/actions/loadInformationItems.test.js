let configMock = { useMocks: true };
jest.doMock('../../config.js', () => configMock);

jest.mock('../../repositories/getInformationItemsRepository');
jest.mock('../../repositories/getInformationItemsMockRepository');

import getInformationItemsRepository from '../../repositories/getInformationItemsRepository';
import getInformationItemsMockRepository from '../../repositories/getInformationItemsMockRepository';

const loadInformationItems = require('../../actions/loadInformationItems').default;

describe('loadInformationItems action', () => {
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
             loadInformationItems('NAVIGATION')();
             expect(getInformationItemsMockRepository).toHaveBeenCalledWith(undefined, 'NAVIGATION');
         });

         test('dispatches resolved items of repository with expected action', (done) => {
             const dispatchSpy = jest.fn();
             loadInformationItems('NAVIGATION')(dispatchSpy).then(() => {
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
            loadInformationItems('NAVIGATION')();
            expect(getInformationItemsRepository).toHaveBeenCalledWith(undefined, 'NAVIGATION');
        });
    });
});
