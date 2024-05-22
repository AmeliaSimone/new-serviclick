import React from "react";
import styles from "./Search.module.scss";

const Search = () => {
  return (
    <div className={styles.searchContainer}>
      <input className={styles.searchBar} type="text" placeholder="Buscar..." />
    </div>
  );
};

export default Search;
