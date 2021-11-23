
const subjectUnderTest = require('@/repositories/activities/addActivityRepository').default;

describe('add activity repository', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('empty activity item given', () => {
        subjectUnderTest({});
    });
});
