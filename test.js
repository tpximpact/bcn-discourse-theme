
<script type="text/x-handlebars" data-template-name="/connectors/below-site-header/custom-homepage">
    {{#if displayCustomHomepage}}
        <h1>custom homepage not logged in</h1>
    {{/if}}
</script>

<script type="text/x-handlebars" data-template-name="/connectors/below-site-header/custom-homepage-logged-in">
  {{#if displayCustomHomepageLoggedIn }}
  <div class="content-container">

  <section class="o-article-cta" data-section="" data-color="yellow" data-theme="">
    <div class="o-article-cta__theme-wrapper">
      <div class="container-large">
        <div class="container">
          <div class="container-inner">
            <div class="o-article-cta__inner">
              <h3>Stay in touch</h3>
  
              <div class="o-article-cta__copy">We'd love to keep in touch about how you can get involved through our email newletter.</div>
  
              <a class="o-article-cta__link" href="https://www.google.com" title="Sign up">Sign up</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
  {{/if}}
</script>





<script  type="text/discourse-plugin" version="0.8">
  api.registerConnectorClass("below-site-header", "custom-homepage", {
    setupComponent(args, component) {
     api.onPageChange((url) => {
      const user = api.getCurrentUser();

        if (url === "/" && !user){
          document.querySelector("html").classList.add("custom-homepage");
          component.set("displayCustomHomepage", true);
        } else {
          document.querySelector("html").classList.remove("custom-homepage");
          component.set("displayCustomHomepage", false)
        }
      });
    }

  });
</script>

<script type="text/discourse-plugin" version="0.8">

  api.registerConnectorClass("below-site-header", "custom-homepage-logged-in", {
    setupComponent(args, component) {
     api.onPageChange((url) => {
      const user = api.getCurrentUser();
        if (url === "/" && user ){
          document.querySelector("html").classList.add("custom-homepage-logged-in");
          component.set("displayCustomHomepageLoggedIn", true);
        } else  {
          document.querySelector("html").classList.remove("custom-homepage-logged-in");
          component.set("displayCustomHomepageLoggedIn", false);
        }
      });
    }
  });
</script>
