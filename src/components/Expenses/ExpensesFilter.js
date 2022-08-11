import Styles from "./ExpensesFilter.module.css";

const ExpensesFilter = ({ onChangeFilter, selectedYear }) => {
  const filterYearHandler = (event) => {
    onChangeFilter(event.target.value);
  };

  return (
    <div className={Styles.expenses_filter}>
      <div className={Styles.expenses_filter__control}>
        <label>Filter by year</label>
        <select value={selectedYear} onChange={filterYearHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
