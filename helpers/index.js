import { getAPI } from './api';

export const login = (
    page
) => async (
    email = process.env.SIGNIN_USER_EMAIL,
    password = process.env.SIGNIN_USER_PASSWORD
) => {
    await page.goto(`${process.env.SITE_URL}/login`, { waitUntil: 'domcontentloaded' });

    const navigationPromise = page.waitForNavigation();

    await page.setViewport({ width: 1920, height: 948 });

    await page.waitForSelector('#login-form #input-signin-email');
    await page.type('#login-form #input-signin-email', email);

    await page.waitForSelector('#login-form #input-signin-password');
    await page.type('#login-form #input-signin-password', password);

    await page.waitForSelector('#login-form > .btn');
    await page.click('#login-form > .btn');

    await navigationPromise;
}

export const signup = (
    page
) => async (
    email = process.env.SIGNUP_USER_EMAIL,
    password = process.env.SIGNUP_USER_PASSWORD
) => {
    await page.goto(`${process.env.SITE_URL}/signup/joinow`, { waitUntil: 'domcontentloaded' });

    const navigationPromise = page.waitForNavigation();

    await page.setViewport({ width: 1920, height: 948 });

    await page.waitForSelector('.row #input-first-name');
    await page.type('#input-first-name', 'first');

    await page.waitForSelector('.row #input-last-name');
    await page.type('#input-last-name', 'last');

    await page.waitForSelector('#jobseeker-signup-form #input-signup-email');
    await page.type('#jobseeker-signup-form #input-signup-email', email);

    await page.waitForSelector('#jobseeker-signup-form #input-signin-password');
    await page.type('#jobseeker-signup-form #input-signin-password', password);

    await page.waitForSelector('#jobseeker-signup-form #input-country');
    await page.select('#jobseeker-signup-form #input-country', '56');

    await page.waitForSelector('#jobseeker-signup-form > .btn');
    await page.click('#jobseeker-signup-form > .btn');

    await navigationPromise;
}

export async function cleanCurrentUser(page) {
    const API = await getAPI(page);
    await API.delete('/talent', {
        data: {
            data: {
                type: 'generic',
                attributes: {
                    deleteReason: ''
                }
            }
        }
    });
}

export async function getToken(page) {
    const cookies = await page.cookies();
    return cookies.find(({ name }) => name === 'user_access_token').value;
}
