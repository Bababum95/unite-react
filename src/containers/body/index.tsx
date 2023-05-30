import { ScrollRestoration } from "react-router-dom";
import Header from "../header"
import Footer from "../footer"
import styles from './Body.module.scss';

function Body(props: { children: JSX.Element | JSX.Element[] }) {
  return (
    <div className={styles.body}>
      <ScrollRestoration />
      <Header />
      <main className={styles.main}>
        {props.children}
      </main>
      <Footer />
    </div>
  );
}

export default Body;
