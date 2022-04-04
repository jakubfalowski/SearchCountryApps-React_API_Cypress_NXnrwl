import styles from './web.module.css';

/* eslint-disable-next-line */
export interface WebProps {}

export function Web(props: WebProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Web!</h1>
    </div>
  );
}

export default Web;
