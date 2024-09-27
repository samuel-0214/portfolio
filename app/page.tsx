import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Flex container for profile picture and text (title and links) */}
      <div className={styles.profileSection}>
        <Image src="/pfp.jpg" alt="Profile Picture" width={200} height={200} className={styles.image} />
        
        <div className={styles.textWrapper}>
          <h1 className={styles.title}>sams.me</h1>
          
          <div className={styles.links}>
            <a href="https://github.com/samuel-0214" target="_blank" rel="noopener noreferrer">[github]</a>
            <a href="https://x.com/sams_0214" target="_blank" rel="noopener noreferrer">[x]</a>
            <a href="mailto:samscool2104@gmail.com" target="_blank" rel="noopener noreferrer">[mail]</a>
          </div>
        </div>
      </div>

      <hr className={styles.hrLine} /> {/* Line between sections */}

      <div className={styles.bio}>
        <p>heylo hoomans, thank&apos;s for stumbling upon my page. I&apos;m a student, programmer. I&apos;m a machine learning engineer, currently building a project on Solana.</p>
        <p>i used to work as a ML researcher but now i&apos;m more into intgrating ml in blockchain.</p>
        <p>i&apos;ve built a project known as RUG DETECTION API which basically tells us if there is a risk associated with Token on Solana(built it as a Capstone project turbin3,though i didnt graduate from the cohort :)).</p>
      </div>

      <hr className={styles.hrLine} /> {/* Line between sections */}

      <div className={styles.contact}>
        <h2>contact me:</h2>
        <p>[email: <a href="mailto:samscool2104@gmail.com">samscool2104@gmail.com</a>]</p>
        <p>[x: <a href="https://x.com/sams_0214" target="_blank" rel="noopener noreferrer">@sams_0214</a>]</p>
        <p>[discord: sams]</p>
      </div>

      <hr className={styles.hrLine} /> {/* Line between sections */}

      <p className={styles.thanks}>thanks for visiting! still under construction!</p>
    </main>
  );
}
