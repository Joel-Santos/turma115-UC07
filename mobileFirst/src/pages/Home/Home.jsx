import styles from "./Home.module.css";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";

function Home() {
    return (
        <div className={styles.container}>
            <Header />
            <Main />
            <Footer />
        </div>

    );
}

export default Home;