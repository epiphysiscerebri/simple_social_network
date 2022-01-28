import classes from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";



const Dialogs = (props) => {
  
  
  let dialogsElements = props.state.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  
  let messagesElements = props.state.messages.map((message) => (
    <Message message={message.message} />
  ));

  let newMessageElement = React.createRef();

  let addMessage = () => {
    alert(newMessageElement.current.value);
  }

  

  return (
    <div>
         <div className={classes.dialogs}>
      <div className={classes.dialogsItem}>
        {dialogsElements}
      </div>
      <div className={classes.messages}>
        {messagesElements}
      </div>
      
    </div>
    <textarea className={classes.textArea} ref={newMessageElement}></textarea>
    <button className={classes.button} onClick={addMessage}>add message</button>
    </div>
   
  );
};

export default Dialogs;
