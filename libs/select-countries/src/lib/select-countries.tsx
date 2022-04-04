import styles from './select-countries.module.css';

/* eslint-disable-next-line */
export interface SelectCountriesProps {}

export function SelectCountries(props: SelectCountriesProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SelectCountries!</h1>
    </div>
  );
}

export default SelectCountries;
