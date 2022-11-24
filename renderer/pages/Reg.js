import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { Router, useRouter } from "next/router";
function Reg() {
  const [user, getUser] = useState("");
  const [pass, getPass] = useState("");
  console.log(user);
  console.log(pass);

  return (
    <div className="body">
      <Head>
        <title>Register</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.username}>
          <label>Username</label>
          <input
            type="text"
            value={user}
            onChange={(e) => {
              getUser(e.target.value);
            }}
          ></input>
        </div>
        <div className={styles.password}>
          <label>Password</label>
          <input
            type="password"
            id="pass"
            name="pass"
            value={pass}
            onChange={(e) => {
              getPass(e.target.value);
            }}
          ></input>
        </div>
        <div className={styles.password}>
          <label>Password</label>
          <input
            type="password"
            id="pass"
            name="pass"
            value={pass}
            onChange={(e) => {
              getPass(e.target.value);
            }}
          ></input>
        </div>
        <div className={styles.password}>
          <label>Password</label>
          <input
            type="password"
            id="pass"
            name="pass"
            value={pass}
            onChange={(e) => {
              getPass(e.target.value);
            }}
          ></input>
        </div>
        <div className={styles.password}>
          <label>Password</label>
          <input
            type="password"
            id="pass"
            name="pass"
            value={pass}
            onChange={(e) => {
              getPass(e.target.value);
            }}
          ></input>
        </div>
        <div className={styles.password}>
          <label>Password</label>
          <input
            type="password"
            id="pass"
            name="pass"
            value={pass}
            onChange={(e) => {
              getPass(e.target.value);
            }}
          ></input>
        </div>
        <div className={styles.password}>
          <label>Password</label>
          <input
            type="password"
            id="pass"
            name="pass"
            value={pass}
            onChange={(e) => {
              getPass(e.target.value);
            }}
          ></input>
        </div>
        <div className={styles.button1}>
          <button type="button">Login</button>
        </div>
        <div className={styles.button2}>
          <button type="button">REGISTER</button>
        </div>
        <div className={styles.button3}>
          <button type="button">Нууц үгээ мартсан</button>
        </div>
      </div>
    </div>
  );
}

export default Reg;
