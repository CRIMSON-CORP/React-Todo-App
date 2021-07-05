import Create from "../help-vids/Create Task.mp4";
import NewList from "../help-vids/Newlist.mp4";
import Edit_rem from "../help-vids/Editing_Reminder.mp4";
import RenameList from "../help-vids/RenameList.mp4";
import Blue from "../help-vids/new.PNG";
import Yellow from "../help-vids/near.PNG";
import Red from "../help-vids/passed.PNG";
import LockApp from "../help-vids/lock.png";
import Option from "../help-vids/opt.png";
import { store } from "react-notifications-component";

function Notif() {
    store.addNotification({
        title: "Copied!",
        message: "Account Number Copied, Thank You so Much!",
        type: "success",
        container: "top-center",
        animationIn: ["animated", "jackInTheBox"],
        animationOut: ["animated", "bounceOut"],
        dismiss: {
            duration: 3000,
            onScreen: true,
            showIcon: true,
            touch: true,
            click: true,
        },
    });
}

export { Create, NewList, Edit_rem, RenameList, Blue, Yellow, Red, LockApp, Option, Notif };
