import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.css";

function LocationDetail() {
  const { location_id } = useParams();
  const location = useSelector((state) =>
    state.locations.items.find((item) => item.id === Number(location_id))
  );

  const p = JSON.stringify(location.location);
  if (!location) {
    return <Navigate to={"/locations"}></Navigate>;
  }

  return (
    <div className={styles.div1}>
      <h1>Location Detail</h1>

      <p className={styles.p}>{p}</p>
    </div>
  );
}

export default LocationDetail;
