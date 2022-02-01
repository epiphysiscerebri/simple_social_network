let store = {
  _state : {
    dialogsComponent: {
      messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "Hello" },
        { id: 3, message: "Hello world" },
      ],
      newMessageText: 'Hola!',
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
      newPostText: 'Samu_Rai',
    },
    settComponent: {},
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
  },
  addPost() {
    let newPost= {id: 3, message: this._state.profileComponent.newPostText , like: "1"};
    this._state.profileComponent.posts.push(newPost);
    this._state.profileComponent.newPostText = '';
    this._callSubscriber(this._state);
  },
  updateNewPostText(newText) {
    this._state.profileComponent.newPostText= newText;
    this._callSubscriber(this._state);
  },
  addMessage() {
    let newMessage= {id: 4, message: this._state.dialogsComponent.newMessageText};
    this._state.dialogsComponent.messages.push(newMessage);
    this._state.dialogsComponent.newMessageText = '';
    this._callSubscriber(this._state);
  },
  updateNewMessageText(newText) {
    this._state.dialogsComponent.newMessageText= newText;
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  }
};

export default store;
window.store = store;