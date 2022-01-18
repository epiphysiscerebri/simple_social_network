import classes from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                <div className={classes.dialog + ' ' + classes.active}>
                    Anton
                </div>
                <div className={classes.dialog}>
                    Alexey
                </div>
                <div className={classes.dialog}>
                    Andrey
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Hi</div>
                <div className={classes.message}>Hello</div>
                <div className={classes.message}>Hello world</div>
            </div>
        </div>
    )
}

export default Dialogs;