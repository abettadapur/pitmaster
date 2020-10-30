import styles from "./header.module.scss";
import MenuIcon from "@material-ui/icons/Menu";
import { Typography, IconButton } from "@material-ui/core";
import { signOut, useSession } from "next-auth/client";
import Link from "next/link";

export default function LoggedInHeader() {
  const [session] = useSession();

  if (!session) {
    return null;
  }
  console.dir(styles);
  return (
    <>
      <div className={styles["left-header"]}>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">Pitmaster</Typography>
      </div>
      <div className={styles["right-header"]}>
        <Typography noWrap>{session.user.name}</Typography>
      </div>
    </>
  );
}
