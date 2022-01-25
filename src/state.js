let state = {
  dialogsComponent: {
    messages: [
      { id: 1, message: "Hi" },
      { id: 2, message: "Hello" },
      { id: 3, message: "Hello world" },
    ],
    dialogs: [
      { id: 1, name: "Anton" },
      { id: 2, name: "Alexey" },
      { id: 3, name: "Andrey" },
    ],
  },
  headerComponent: {},
  musicComponent: {},
  navbarComponent: {
    friends: [{ name: "Liza", id: 1 }, { name: "Inga", id: 2 }, { name: "Luba", id: 3 }],
  },
  newsComponent: {},
  profileComponent: {
    posts: [
      { id: 1, message: "Hi, how are you?", like: "15" },
      { id: 2, message: "It's my first post", like: "20" },
    ],
  },
  settComponent: {},
};

export default state;
