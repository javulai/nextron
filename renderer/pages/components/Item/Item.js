import styles from "./item.module.css";

const Item = () => {
  return (
    <div className={styles.container}>
      <div className={styles.parent}>
        <div className={styles.div1}>
          <label>Гарчиг</label>
        </div>
        <div className={styles.div2}>
          <label>Зураг</label>
        </div>
        <div className={styles.div3}>
          <label>Барааны тайлбар</label>
        </div>
        <div className={styles.div4}>
          <label>Орж үзсэн хэрэглэгчийн тоо</label>
        </div>
        <div className={styles.div5}>
          <label>Үнэ Утасны дугаар</label>
        </div>
      </div>
    </div>
  );
};

export default Item;
