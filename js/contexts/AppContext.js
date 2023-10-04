class AppContext extends OpenScript.Context {
  theme;
  comments;
  commentCount = 3; // just data, not a state

  // the has method creates a state if it doesn't already exist in the context;

  constructor() {
    super();
    this.has("theme").value = "dark";
    this.has("user").value = {
      name: "John Doe",
      role: "User",
      loggedIn: false,
    };
    this.has("comments").value = [
      {
        user: "James",
        content: "This is comment 1",
        postId: 1,
      },
      {
        user: "Mary",
        content: "This is comment 2",
        postId: 1,
      },
      {
        user: "Paul",
        content: "This is comment 3",
        postId: 1,
      },
    ];
  }
}
