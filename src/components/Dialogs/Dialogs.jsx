import classes from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
  let dialogsData = [
    { id: 1, name: "Anton" },
    { id: 2, name: "Alexey" },
    { id: 3, name: "Andrey" },
  ];

  let dialogsElements = dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messagesData = [
    { id: 1, message: "Hi" },
    { id: 2, message: "Hello" },
    { id: 3, message: "Hello world" },
  ];
  
  let messagesElements = messagesData.map((message) => (
    <Message message={message.message} />
  ));

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItem}>
        {dialogsElements}
      </div>
      <div className={classes.messages}>
        {messagesElements}
      </div>
    </div>
  );
};

export default Dialogs;
