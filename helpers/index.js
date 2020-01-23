export async function login() {
    await page.goto(`${process.env.SITE_URL}/login`);

    const navigationPromise = page.waitForNavigation();

    await page.setViewport({ width: 1920, height: 948 });

    await page.waitForSelector('#login-form #input-signin-email');
    await page.type('#login-form #input-signin-email', process.env.SIGNIN_USER_EMAIL);

    await page.waitForSelector('#login-form #input-signin-password');
    await page.type(
        '#login-form #input-signin-password',
        process.env.SIGNIN_USER_PASSWORD
    );

    await page.waitForSelector(
        '#login-form > .btn'
    );
    await page.click('#login-form > .btn');

    await navigationPromise;
}

export async function getToken() {
    const cookies = await page.cookies();
    return cookies.find(({ name }) => name === 'user_access_token').value;
}
