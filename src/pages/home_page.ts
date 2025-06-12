import { Page } from "playwright";
import LeftMenuComponent from "./components/left_menu_component";
import TopMenuComponent from "./components/top_menu_component";

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

  getLeftMenuComponent() {
    return this.leftMenuComponent;
  }

  getTopMenuComponent() {
    return this.topMenuComponent;
  }
}

export default HomePage;
