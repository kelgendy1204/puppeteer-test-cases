describe('Login page', () => {
    beforeAll(async () => {
        await page.goto(`${process.env.SITE_URL}/login`);
    });

    it('Should be titled "Sign In | WUZZUF"', async () => {
        await expect(page.title()).resolves.toMatch('Sign In | WUZZUF');
    });

    it('Should sigin and go to explore', async () => {
        const navigationPromise = page.waitForNavigation();

        await page.setViewport({ width: 1920, height: 948 });

        await page.waitForSelector('.left-section-wrp > #login-form #input-signin-email');
        await page.type(
            '.left-section-wrp > #login-form #input-signin-email',
            process.env.USER_EMAIL
        );

        await page.waitForSelector('.left-section-wrp > #login-form #input-signin-password');
        await page.type('.left-section-wrp > #login-form #input-signin-password', process.env.USER_PASSWORD);

        await page.waitForSelector(
            '.content-card > .col-sm-6 > .left-section-wrp > #login-form > .btn'
        );
        await page.click('.content-card > .col-sm-6 > .left-section-wrp > #login-form > .btn');

        await navigationPromise;

        expect(page.url()).toMatch(`${process.env.SITE_URL}/explore`);
    });
});
