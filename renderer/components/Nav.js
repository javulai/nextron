import styles from "../styles/Home.module.css";
const Nav = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navlogo}>Logo</div>
      <div className={styles.navHome}>
        <a href="/next">Home</a>
      </div>
      <div className={styles.userNamepnum}>
        {" "}
        <a href="#">Хэрэглэгчийн нэр болон утасны дугаар</a>
      </div>
      <button className={styles.navbutton}> Зар нэмэх</button>
    </nav>
  );
};

export default Nav;
