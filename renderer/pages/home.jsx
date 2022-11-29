import React, { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { Router, useRouter } from "next/router";
function Home() {
  const router = useRouter();
  typeof window !== "undefined" && router.push("/Login");
  return (
    <div className="body">
      <Head>
        <title>Home</title>
      </Head>
      <div className={styles.container}></div>
    </div>
  );
}

export default Home;
