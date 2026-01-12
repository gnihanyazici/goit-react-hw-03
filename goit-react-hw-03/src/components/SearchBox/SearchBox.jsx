import s from "./SearchBox.module.css";

const SearchBox = ({ value, onFilter }) => {
  return (
    <div className={s.wrapper}>
      <p className={s.label}>Find contacts by name</p>
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;