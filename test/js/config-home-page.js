requirejs.config({
    "baseUrl": "js/lib",
    "paths": {
      "config": "../config-home-page",
      "jquery": "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min",
      // "jquery": "jquery-3.2.1",
      "flexslider": "jquery-flexslider",
      "home-page": "home-page",
      "header": "header",
      "footer": "footer",
      "web-mobile": "web-mobile",
      "scrollbar": "custom-scrollbar"
    }
});
requirejs(["../main/main-home-page"]);
