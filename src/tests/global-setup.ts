import { FullConfig, chromium, firefox, webkit } from "@playwright/test";
import LoginPage from "../pages/login-page";
import Env from "../config/environment";

async function globalSetup(config: FullConfig){
    const browserName = config.projects[0].use.browserName || 'chromium';

    const browserType = browserName === 'firefox' ? firefox : browserName === 'webkit' ? webkit : chromium;

    const browser =await browserType.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto(Env.BASE_URL);
    const loginPage = new LoginPage(page);
   // await loginPage.visit(true /* isBaseUrlNeedToBeIndicated */);
    await loginPage.login(Env.USERNAME, Env.PASSWORD);
    await context.storageState({path: 'src/config/auth/auth.json'});
    await browser.close();
}

export default globalSetup;