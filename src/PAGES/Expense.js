// import { styles } from "./Home";

export default function Expense({ handleBack }) {
  return (
    <main>
      <h1>Expense!</h1>
      <div onClick={handleBack} style={styles.link}>
        Back to home
      </div>
      <img
        src="https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
        height={500}
        width={800}
      />
    </main>
  );
}