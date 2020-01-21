import { login } from '../helpers';

describe('Login page', () => {
    it('Should be titled "Sign In | WUZZUF"', async () => {
        await page.goto(`${process.env.SITE_URL}/login`);
        await expect(page.title()).resolves.toMatch('Sign In | WUZZUF');
    });

    it('Should sigin and go to explore', async () => {
        await login();

        expect(page.url()).toMatch(`${process.env.SITE_URL}/explore`);
    });
});
