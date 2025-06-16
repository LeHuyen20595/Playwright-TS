import { Page } from "playwright";
import LeftMenuComponent from "./components/left-menu-component";
import TopMenuComponent from "./components/top-menu-component";

class HomePage {
  /*
        Home Page always contains: 
            - Left menu component
            - Top menu component
    */
  private leftMenuComponent: LeftMenuComponent;
  private topMenuComponent: TopMenuComponent;
  constructor(private readonly page: Page) {
    this.leftMenuComponent = new LeftMenuComponent(page);
    this.topMenuComponent = new TopMenuComponent(page);
  }

  async goToDashboard(){
    await this.page.goto("/web/index.php/dashboard/index")
  }

  getLeftMenuComponent() {
    return this.leftMenuComponent;
  }

  getTopMenuComponent() {
    return this.topMenuComponent;
  }
}

export default HomePage;
