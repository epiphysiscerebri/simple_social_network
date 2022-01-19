import classes from './Dialogs.module.css';
import DialogItem from './DialogItems/DialogItems';
import Message from './Messages/Messages';


const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                <DialogItem name="Anton" id="1"/>
                <DialogItem name="Alexey" id="2"/>
                <DialogItem name="Andrey" id="3"/>
            </div>
            <div className={classes.messages}>
                <Message message="Hi" />
                <Message message="Hello" />
                <Message message="Hello world!" />
            </div>
        </div>
    )
}

export default Dialogs;