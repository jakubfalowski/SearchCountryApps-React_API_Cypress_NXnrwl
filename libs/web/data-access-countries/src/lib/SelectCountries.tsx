import CountryAPI from './CountryAPI';
import ContinentButton from './ContinentButton';
import './style.scss';

export function SelectCountries() {
  const continents = [
    {
      continent: 'Europe',
      continentCode: 'EU',
    },
    {
      continent: 'Africa',
      continentCode: 'AF',
    },
    {
      continent: 'South America',
      continentCode: 'SA',
    },
    {
      continent: 'North America',
      continentCode: 'NA',
    },
    {
      continent: 'Asia',
      continentCode: 'AS',
    },
    {
      continent: 'Oceania',
      continentCode: 'OC',
    },
    {
      continent: 'Antarctica',
      continentCode: 'AN',
    },
  ];

  return (
    <>
      <div className="buttonRow">
        {continents.map((continent) => (
          <ContinentButton
            key={continent.continentCode}
            continent={continent.continent}
            continentCode={continent.continentCode}
          />
        ))}
      </div>
      <CountryAPI />
    </>
  );
}

export default SelectCountries;