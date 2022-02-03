import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";

const Dialogs = (props) => {
  let newMessageElement = React.createRef();

  let dialogsElements = props.state.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messagesElements = props.state.messages.map((message) => (
    <Message message={message.message} />
  ));

  let addMessage = () => {
    props.dispatch({type: "ADD-MESSAGE"});
  };

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.dispatch({type: "UPDATE-NEW-MESSAGE-TEXT", newText: text});
  };

  return (
    <div>
      <div className={classes.dialogs}>
        <div className={classes.dialogsItem}>{dialogsElements}</div>
        <div className={classes.messages}>{messagesElements}</div>
      </div>
      <textarea
        className={classes.textArea}
        ref={newMessageElement}
        onChange={onMessageChange}
        value={props.state.newMessageText}
      />
      <button className={classes.button} onClick={addMessage}>
        Add message
      </button>
    </div>
  );
};

export default Dialogs;
