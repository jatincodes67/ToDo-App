import styles from "./FunMessage.module.css";
const FunMessage = ({ items }) => {
  console.log(items);
  return items.length === 0 && <p className="{styles.fun}">Have a nice day</p>;
};

export default FunMessage;
