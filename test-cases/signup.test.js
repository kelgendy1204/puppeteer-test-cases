import { getAPI } from '../helpers/api';

describe('Signup page', () => {
    it('Should be titled "Sign Up | WUZZUF"', async () => {
        await page.goto(`${process.env.SITE_URL}/signup/joinow`);
        await expect(page.title()).resolves.toMatch('Sign Up | WUZZUF');
    });

    it('Should sigup and go to career interests', async () => {
        await page.goto(`${process.env.SITE_URL}/signup/joinow`);

        const navigationPromise = page.waitForNavigation();

        await page.setViewport({ width: 1920, height: 948 });

        await page.waitForSelector('.row #input-first-name');
        await page.type('.row #input-first-name', 'first');

        await page.waitForSelector('.row #input-last-name');
        await page.type('.row #input-last-name', 'last');

        await page.waitForSelector('.signup-form-wrp > #jobseeker-signup-form #input-signup-email');
        await page.type(
            '.signup-form-wrp > #jobseeker-signup-form #input-signup-email',
            'test240000@gmail.com'
        );

        await page.waitForSelector(
            '.signup-form-wrp > #jobseeker-signup-form #input-signin-password'
        );
        await page.type(
            '.signup-form-wrp > #jobseeker-signup-form #input-signin-password',
            '12345678'
        );

        await page.waitForSelector('.signup-form-wrp > #jobseeker-signup-form #input-country');
        await page.select('.signup-form-wrp > #jobseeker-signup-form #input-country', '56');

        await page.waitForSelector(
            '.content-card > .col-sm-6 > .signup-form-wrp > #jobseeker-signup-form > .btn'
        );
        await page.click(
            '.content-card > .col-sm-6 > .signup-form-wrp > #jobseeker-signup-form > .btn'
        );

        await navigationPromise;

        expect(page.url()).toMatch(`${process.env.SITE_URL}/setup`);

        const API = await getAPI();

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
    });
});
