class Comment extends OpenScript.Component {
  /**
   * @param {string} content
   */
  render(content, ...args) {
    return h.div(
      { class: "container p-3" },
      h.div({ class: "fw-300" }, content),
      h.i({ class: "fas fa-thumbs-up" }),
      h.i({ class: "fas fa-reply" }),
      ...args
    );
  }
}

class App extends OpenScript.Component {
  render(...args) {
    return [
      h.nav(
        { class: "navbar navbar-expand-lg navbar-light bg-light" },
        h.div(
          { class: "container" },
          h.a(
            {
              class: "navbar-brand",
              href: "#",
            },
            "HELLO-OJS"
          ),
          h.button(
            {
              class: "navbar-toggler",
              type: "button",
              data_bs_toggle: "collapse",
              data_bs_target: "#navbarNav",
              aria_controls: "navbarNav",
              aria_expanded: "false",
              aria_label: "Toggle navigation",
            },
            h.span({ class: "navbar-toggler-icon" })
          ),
          h.div(
            {
              class: "collapse navbar-collapse",
              id: "navbarNav",
            },
            h.ul(
              { class: "navbar-nav ml-auto" },
              h.li(
                { class: "nav-item" },
                h.a(
                  {
                    class: "nav-link",
                    href: "#",
                  },
                  "Home"
                )
              ),
              h.li(
                { class: "nav-item" },
                h.a(
                  {
                    class: "nav-link",
                    href: "#",
                  },
                  "Docs"
                )
              ),
            )
          )
        )
      ),

      h.div(
        { class: "container py-4" },
        h.h1("Welcome to the Hello OJS App"),
        h.Comment('This is a comment')
      ),
    ];
  }
}
