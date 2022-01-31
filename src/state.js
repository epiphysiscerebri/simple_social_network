let rerenderEntiredTree = () => {};

let state = {
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
};

export const addPost = () => {
  let newPost= {id: 3, message: state.profileComponent.newPostText , like: "1"};
  state.profileComponent.posts.push(newPost);
  state.profileComponent.newPostText = '';
  rerenderEntiredTree(state);
}

export const updateNewPostText = (newText) => {
  state.profileComponent.newPostText= newText;
  rerenderEntiredTree(state);
}

export const addMessage = () => {
  let newMessage= {id: 4, message: state.dialogsComponent.newMessageText};
  state.dialogsComponent.messages.push(newMessage);
  state.dialogsComponent.newMessageText = '';
  rerenderEntiredTree(state);
}

export const updateNewMessageText = (newText) => {
  state.dialogsComponent.newMessageText= newText;
  rerenderEntiredTree(state);
}

export const subscribe = (observer) => {
  rerenderEntiredTree = observer;
};

export default state;
