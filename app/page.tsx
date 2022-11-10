import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Portfolio is under construction!</h1>

        <p className={styles.description}>
          <code className={styles.code}>
            meanwhile, feel free to checkout my LinkedIn account...
            <a
              href="https://www.linkedin.com/in/sikandar-ramzan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.socialsLinkedIn}>
                <Image
                  src="/linked-in.svg"
                  alt="Linked In Logo"
                  width={32}
                  height={32}
                />
              </span>
            </a>
          </code>
        </p>

        <div>
          <p className={styles.description}>
            <em>or email me at:</em>
            <code className={styles.code}>
              <a href="mailto: hello@sikandar.dev"> hello@sikandar.dev</a>
            </code>
          </p>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          &copy; Sikandar Ramzan
        </a>
      </footer>
    </div>
  );
}
