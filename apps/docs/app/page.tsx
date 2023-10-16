// why it necessary

/* eslint-disable eslint-comments/require-description -- test */
// This directive comment disables the requirement to include descriptions for eslint-disable comments.

/* eslint-disable @typescript-eslint/dot-notation */
// This directive comment disables the rule that requires using dot notation instead of bracket notation for accessing object properties.

"use client";

import styles from "./page.module.css";

export default function Page(): JSX.Element {
  return (
    <main className={styles.main}>
      {process.env["NEXT_PUBLIC_MAIN_ENV"]}
      <br />
      
      dev env
    </main>
  );
}
