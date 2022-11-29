import styles from "../../styles/Home.module.css";
const Nav = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navlogo}>Logo</div>
      <div className={styles.navHome}>Home</div>
      <div className={styles.userNamepnum}>
        {" "}
        Хэрэглэгчийн нэр болон утасны дугаар
      </div>
      <button className={styles.navbutton}> Зар нэмэх</button>
    </nav>
  );
};

export default Nav;
