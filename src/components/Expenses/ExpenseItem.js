import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import styles from "./ExpenseItem.module.css";

function ExpenseItem(props) {
  return (
    <li>
      <Card className={styles.expense_item}>
        <ExpenseDate date={props.date} />
        <div className={styles.expense_item__description}>
          <h2>{props.title}</h2>
          <div className={styles.expense_item__price}>${props.amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
