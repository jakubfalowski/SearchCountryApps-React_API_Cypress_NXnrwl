import styles from './search-google.module.css';

/* eslint-disable-next-line */
export interface SearchGoogleProps {}

export function SearchGoogle(props: SearchGoogleProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SearchGoogle!</h1>
    </div>
  );
}

export default SearchGoogle;
