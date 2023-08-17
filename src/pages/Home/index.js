import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCharacters } from "../../redux/charactersSlice";
import styles from "./styles.module.css";

function Home() {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters.items);
  const nextPage = useSelector((state) => state.characters.page);
  const status = useSelector((state) => state.characters.status);
  const error = useSelector((state) => state.characters.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCharacters());
    }
  }, [dispatch, status]);

  if (status === "failed") {
    return <div>Error {error}</div>;
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Characters</h1>
      <div className={styles.div1}>
        {characters.map((m) => (
          <Link
            className={styles.link}
            style={{
              textDecoration: "none",
              backgroundColor: "#fb646799",
              textAlign: "center",
              // paddingBottom: "1%",
            }}
            to={`char/${m.id}`}
          >
            <img className={styles.img} key={m.id} src={m.image} alt={m.name} />
            <h4 style={{ marginTop: "1%" }}>{m.name}</h4>
          </Link>
        ))}
      </div>

      {status === "loading" && "Loading..."}
      <button
        className={styles.button}
        onClick={() => dispatch(fetchCharacters(nextPage))}
      >
        Show more
      </button>
    </div>
  );
}

export default Home;
