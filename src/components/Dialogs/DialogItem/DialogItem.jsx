import classes from './DialogItem.module.css';
import { NavLink } from "react-router-dom";


const DialogItem = (props) => {
    return (
      <div className={classes.dialog}>
        <NavLink
          to={"/dialogs/" + props.id}
          className={(navData) =>
            navData.isActive ? classes.active : classes.dialog
          }
        >
          {props.name}
        </NavLink>
      </div>
    );
  };

  export default DialogItem;