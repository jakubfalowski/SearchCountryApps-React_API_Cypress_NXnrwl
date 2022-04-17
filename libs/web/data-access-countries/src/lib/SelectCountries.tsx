import { Sorting } from './Soritng';
import { continents } from './ContinentsList';
import React, { useState } from 'react';

export default function SelectCountries(countries :any[]){
    return(
        <tbody>
        {countries.slice(0, 10).map(country => (     
        <tr key={country.code}>
            <td>{country.name}</td>
            <td>{country.native}</td>
            <td>{country.code}</td>
            <td>{country.capital === null ? '-' : country.capital}</td>
            <td>{country.currency === null ? '-' : country.currency}</td>
            <td>+{country.phone}</td>
        </tr>
        ))}
        </tbody>
        );
}