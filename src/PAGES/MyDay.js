// import { styles } from "./Home";

export default function CatPage({ handleBack }) {
  return (
    <main>
      <h1>Cat!</h1>
      <div onClick={handleBack} style={styles.link}>
        Back to home
      </div>
      <img src="https://i.imgur.com/VzCQCF1.png" height={500} width={800} />
    </main>
  );
}