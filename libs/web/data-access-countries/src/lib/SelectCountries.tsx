export default function SelectCountries(countries :any[], userCountries: number){
    return(
        <tbody>
        {countries.slice(0, userCountries).map(country => (     
        <tr key={country.code}>
            <td>{country.name}</td>
            <td>{country.native}</td>
            <td>{country.code}</td>
            <td>{country.capital === null ? country.capital = '-' : country.capital}</td>
            <td>{country.currency === null ? country.currency = '-' : country.currency}</td>
            <td>+{country.phone}</td>
        </tr>
        ))}
        </tbody>
        );
}