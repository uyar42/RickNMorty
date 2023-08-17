import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

function Item({ item }) {
  return (
    <div>
      <Link className={styles.link} to={`/locations/${item.id}`}>
        <q key={item.id}> {item.location.name}</q>
      </Link>
      {/* <p>{item.gender}</p>
      <p>{item.status}</p> */}

      <strong key={item.id}>{item.name}</strong>
    </div>
  );
}

export default Item;
