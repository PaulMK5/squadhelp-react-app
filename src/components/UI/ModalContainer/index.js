import styles from './ModalContainer.module.css';

const ModalContainer = ({ children }) => {
  return <div className={styles['modal-container']}>{children}</div>;
};

export default ModalContainer;
