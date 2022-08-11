import styles from "./ExpenseDate.module.css";

function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });

  return (
    <div className={styles.expense_date}>
      <div className={styles.expense_date__month}>{month}</div>
      <div className={styles.expense_date__year}>{year}</div>
      <div className={styles.expense_date__day}>{day}</div>
    </div>
  );
}

export default ExpenseDate;
