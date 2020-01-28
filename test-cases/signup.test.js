import puppeteer from 'puppeteer';
import { signup, cleanCurrentUser } from '../helpers';

describe('Signup page', () => {
    let browser;
    let page;

    beforeAll(async () => {
        browser = await puppeteer.launch({
            headless: true
        });
        page = await browser.newPage();
    });

    afterAll(() => {
        browser.close();
    });

    it('Should sigup and go to career interests', async () => {
        await signup(page)();
        expect(page.url()).toMatch(`${process.env.SITE_URL}/setup`);
        await cleanCurrentUser(page);
    });
});
