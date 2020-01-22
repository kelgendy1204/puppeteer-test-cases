export async function login() {
    await page.goto(`${process.env.SITE_URL}/login`);

    const navigationPromise = page.waitForNavigation();

    await page.setViewport({ width: 1920, height: 948 });

    await page.waitForSelector('.left-section-wrp > #login-form #input-signin-email');
    await page.type('.left-section-wrp > #login-form #input-signin-email', process.env.SIGNIN_USER_EMAIL);

    await page.waitForSelector('.left-section-wrp > #login-form #input-signin-password');
    await page.type(
        '.left-section-wrp > #login-form #input-signin-password',
        process.env.SIGNIN_USER_PASSWORD
    );

    await page.waitForSelector(
        '.content-card > .col-sm-6 > .left-section-wrp > #login-form > .btn'
    );
    await page.click('.content-card > .col-sm-6 > .left-section-wrp > #login-form > .btn');

    await navigationPromise;
}
