class App {

  static start() {
    window.onpopstate = () => {
      App.browse();
    }

    $(document).ready(() => {
      App.browse();

      $(".nav-link").on("click", (e) => {
        let button = $(e.target).closest(".navbar").find("navbar-toggler").not(".collapsed");
        button ? button.click() : null;
      })
    })
  }

  static browse() {
    let hash = (window.location.hash || "#accueil").substring(1);
    $("main").hide().html(hash).fadeIn();
  }
}