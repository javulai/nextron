import React from "react";
import Head from "next/head";
import Link from "next/link";
import Nav from "../components/Nav";
import ItemList from "../components/list/itemList";

function Next() {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Nav />
      <ItemList />
    </div>
  );
}

export default Next;
