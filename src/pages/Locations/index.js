import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  locationSelector,
  errorSelector,
  statusSelector,
  fetchAllLocations,
  fetchCharactersforLocations,
} from "../../redux/locationSlice";
import styles from "./styles.module.css";
import Item from "./Item";

function Location() {
  const dispatch = useDispatch();
  const data = useSelector(locationSelector);
  const status = useSelector(statusSelector);
  const error = useSelector(errorSelector);
  const nextPage = useSelector((state) => state.locations.page);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchAllLocations());
    }
  }, [dispatch, status]);

  if (error) {
  }

  return (
    <div className={styles.div}>
      <h1>Locations</h1>
      {status === "loading" && "Loading...."}
      {data.map((item) => {
        return <Item key={item.id} item={item} />;
      })}
      {/* {status === "succeeded" && <div>{data.length} locations</div>} */}
      <button
        className={styles.button}
        onClick={() => dispatch(fetchAllLocations(nextPage))}
      >
        Show more
      </button>
    </div>
  );
}

export default Location;
