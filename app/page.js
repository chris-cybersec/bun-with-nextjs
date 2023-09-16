import { Suspense } from "react";
import styles from "@/app/styles/min/Home.module.css";
import TypingComponent from "./components/typing";

const Home = () => {
  return (
    <div className={styles.container}>
      <section>
        <h1>Bun is a fast JavaScript</h1>
        <div className={styles.typing}>
          <Suspense fallback={"Loading ..."}>
            <TypingComponent />
          </Suspense>
        </div>
      </section>
      <section>
        <h1>Bun is a JavaScript runtime</h1>
        <div className={styles.content}>
          <ul>
            <li>
              <stron>Speed.</stron>
            </li>
            <li>
              <stron>Elegant APIs.</stron>
            </li>
            <li>
              <stron>Cohesive DX.</stron>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <h1>Nextjs is a Powerfull Framework for the Web</h1>
        <div className={styles.content}>
          <ul>
            <li>SEO friendly.</li>
            <li>Server Component by default.</li>
            <li>API route.</li>
            <li>and much more ...</li>
          </ul>
        </div>
      </section>
    <section>
<p className={styles.ending}>to be continued ...</p>
    </section>
    </div>
  );
};

export default Home;
