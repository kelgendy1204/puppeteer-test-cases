import { signup, cleanCurrentUser } from '../helpers';

describe('Signup page', () => {
    it('Should be titled "Sign Up | WUZZUF"', async () => {
        await page.goto(`${process.env.SITE_URL}/signup/joinow`);
        await expect(page.title()).resolves.toMatch('Sign Up | WUZZUF');
    });

    it('Should sigup and go to career interests', async () => {
        await signup();
        expect(page.url()).toMatch(`${process.env.SITE_URL}/setup`);
        await cleanCurrentUser();
    });
});
