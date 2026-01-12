import s from "./Contact.module.css";

const Contact = ({ name, number, onDelete }) => {
  return (
    <div className={s.container}>
      <div className={s.info}>
        <p className={s.text}>
          <span className={s.icon}>👤</span> {name}
        </p>
        <p className={s.text}>
          <span className={s.icon}>📞</span> {number}
        </p>
      </div>
      <button className={s.btn} onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;