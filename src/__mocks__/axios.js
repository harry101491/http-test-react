/**
 * mocking axios for testing.
 */
export default {
    get: jest.fn(() => {
        return Promise.resolve({
            data: []
        });
    }),
    post: jest.fn(() => {
        return Promise.resolve({
            data: []
        });
    })
};