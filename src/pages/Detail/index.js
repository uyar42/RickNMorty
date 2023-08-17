import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./styles.module.css";

function Detail() {
  const [char, setChar] = useState(null);
  const [loading, setLoading] = useState(true);
  const { char_id } = useParams();

  useEffect(() => {
    axios(`${process.env.REACT_APP_API_ENDPOINT}/character/${char_id}`)
      .then((res) => res.data)
      .then((data) => setChar(data))
      .finally(() => setLoading(false));
  }, [char_id]);

  return (
    <div style={{ height: "80vh" }} className={styles.div}>
      {loading && "Loading...."}
      {char && (
        <div>
          <h1>{char.name}</h1> <img src={char.image} />
        </div>
      )}
      {char && (
        <pre>
          {char.status} {char.gender} {char.origin.name} {char.origin.species}
        </pre>
      )}
    </div>
  );
}

export default Detail;
