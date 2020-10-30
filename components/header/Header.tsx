import styles from "./header.module.scss";
import { AppBar, Toolbar } from "@material-ui/core";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/client";
import LoggedOutHeader from "./LoggedOutHeader";
import LoggedInHeader from "./LoggedInHeader";

const Header: React.FC = () => {
  const router = useRouter();
  const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname;

  const [session, loading] = useSession();

  return (
    <AppBar position="static">
      <Toolbar>
        {!session && <LoggedOutHeader />}
        {session && <LoggedInHeader />}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
