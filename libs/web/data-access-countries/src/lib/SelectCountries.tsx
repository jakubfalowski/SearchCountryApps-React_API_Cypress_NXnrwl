export default function SelectCountries(
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
            <td>{country.name}</td>
            <td>{country.native}</td>
            <td>{country.code}</td>
            <td>
              {country.capital === null
                ? (country.capital = '-')
                : country.capital}
            </td>
            <td>
              {country.currency === null
                ? (country.currency = '-')
                : country.currency}
            </td>
            <td>+{country.phone}</td>
          </tr>
        ))}
    </tbody>
  );
}
