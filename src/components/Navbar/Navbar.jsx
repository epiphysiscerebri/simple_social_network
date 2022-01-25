import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import Friends from "./Friends/Friends";

const Navbar = (props) => {
  let friendsElement = props.state.friends.map((friend) => (
    <Friends name={friend.name} id={friend.id} />
  ));

  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <NavLink
          to="/profile"
          className={(navData) =>
            navData.isActive ? classes.active : classes.item
          }
        >
          Profile
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink
          to="/dialogs"
          className={(navData) =>
            navData.isActive ? classes.active : classes.item
          }
        >
          Messages
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink
          to="/news"
          className={(navData) =>
            navData.isActive ? classes.active : classes.item
          }
        >
          News
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink
          to="music"
          className={(navData) =>
            navData.isActive ? classes.active : classes.item
          }
        >
          Music
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink
          to="settings"
          className={(navData) =>
            navData.isActive ? classes.active : classes.item
          }
        >
          Settings
        </NavLink>
      </div>
      <div className={classes.friends}>Friends</div>
      <div>{friendsElement}</div>
    </nav>
  );
};

export default Navbar;
