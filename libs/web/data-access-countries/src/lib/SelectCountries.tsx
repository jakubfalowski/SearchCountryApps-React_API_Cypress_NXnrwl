export function SelectCountries(
  countries: any[],
  userCountries: number,
  page: any
) {
  return (
    <tbody>
      {countries
        .slice(userCountries * (page - 1), userCountries * page)
        .map((country) => (
          <tr key={country.code}>
            <td className="countryName">{country.name}</td>
            <td className="countryNative">{country.native}</td>
            <td className="countryCode">{country.code}</td>
            <td className="countryCapital">
              {country.capital === null
                ? (country.capital = '-')
                : country.capital}
            </td>
            <td className="countryCurrency">
              {country.currency === null
                ? (country.currency = '-')
                : country.currency}
            </td>
            <td className="countryPhone">+{country.phone}</td>
          </tr>
        ))}
    </tbody>
  );
}
