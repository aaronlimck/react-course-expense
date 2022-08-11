import ExpenseItem from "./ExpenseItem";

import Styles from "./ExpensesList.module.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <p>No Expenses Found</p>;
  }

  return (
    <ul className={Styles.expenses_list}>
      {props.items.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
