import styles from "./header.module.scss";

import Link from "next/link";

export default function LoggedOutHeader() {
  return (
    <>
      <div className={styles["right-header"]}>
        <Link href="/api/auth/signin">
          <a>Log in</a>
        </Link>
        <style jsx>{``}</style>
      </div>
    </>
  );
}
