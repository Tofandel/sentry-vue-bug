jest.mock('@sentry/vue');
//jest.mock('@sentry/vue', () => ({ init: jest.fn(), setUser: jest.fn(), setTag: jest.fn(), showReportDialog: jest.fn(), configureScope: jest.fn() }));


describe('main.js', () => {
    it('runs a simple test', () => {
        expect(() => {
            import('@sentry/vue').then(({init}) => {
                init(/* Config doesn't matter, it's a mock */)
            });
        }).not.toThrow();
    });
});