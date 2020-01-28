import puppeteer from 'puppeteer';
import { login } from '../helpers';

describe('Login page', () => {
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

    it('Should sigin and go to explore', async () => {
        await login(page)();
        expect(page.url()).toMatch(`${process.env.SITE_URL}/explore`);
    });
});
