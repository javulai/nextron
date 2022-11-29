import Card from "./Card";
import styles from "./itemList.module.css";
const ItemList = () => {
  return (
    <div className={styles.container}>
      <div className={styles.searchBar}>
        <div className={styles.search}>
          <input />
          <button>Хайх</button>
        </div>
      </div>
      <div className={styles.filterButton}>
        <button>Шүүлт</button>
      </div>
      <a href="#" className={styles.suuldnemegdsen}>
        Сүүлд нэмэгдсэн
      </a>
      <div className={styles.items}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default ItemList;
