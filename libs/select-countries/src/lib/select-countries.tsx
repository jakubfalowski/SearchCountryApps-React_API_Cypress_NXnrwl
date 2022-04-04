import CountryAPI from './CountryAPI';
import ContinentButton from './ContinentButton';
import './style.css'

export function SelectCountries() {
  return (
    <div>
      <div className='buttonRow'><ContinentButton continent="Europe" continentCode="EU"/><ContinentButton continent="Africa" continentCode="AF"/><ContinentButton continent="South America" continentCode="SA"/><ContinentButton continent="North America" continentCode="NA"/><ContinentButton continent="Asia" continentCode="AS"/><ContinentButton continent="Oceania" continentCode="OC"/><ContinentButton continent="Antarctica" continentCode="AN"/></div>
      <CountryAPI />
      </div>
  );
}

export default SelectCountries;