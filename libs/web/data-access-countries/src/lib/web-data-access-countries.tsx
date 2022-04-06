import styles from './web-data-access-countries.module.css';

/* eslint-disable-next-line */
export interface WebDataAccessCountriesProps {}

export function WebDataAccessCountries(props: WebDataAccessCountriesProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to WebDataAccessCountries!</h1>
    </div>
  );
}

export default WebDataAccessCountries;
