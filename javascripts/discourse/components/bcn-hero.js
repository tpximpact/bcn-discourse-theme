import { inject as service } from "@ember/service";
import Component from "@glimmer/component";
import { defaultHomepage } from "discourse/lib/utilities";

export default class BcnHero extends Component {
  @service router;
  @service discovery;

  
  get showHero() {
    const { currentRouteName} = this.router;
    const { category  } = this.discovery;

    let categoryName = ""
    let categoryDescription = ""
    if (category) {
      categoryName = category.name
      categoryDescription = category.description
    }

    if (currentRouteName === `discovery.${defaultHomepage()}` || currentRouteName.startsWith("topic") ) {
      return { homepageHero: true }
    }

    if (currentRouteName === "discovery.category" ) {
      return { dynamicHero: true, title: categoryName, subtitle: categoryDescription }
    }
    return { emptyHero: true }
  }

} 