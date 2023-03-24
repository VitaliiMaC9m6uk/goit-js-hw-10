export const getCountries = (search) => {
    return fetch(`https://restcountries.com/v3.1/name/${search}?fields=name,capital,flags,population,languages`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
    })
}
export const getCountriesZwei=(search) => {
    fetch(`https://restcountries.com/v3.1/name/${search}?fields=name,capital,flags,population,languages`)
    .then(response => {
        return response.json();
    })
    // .then(countri => {
    //     console.log(countri);       
    // }).catch(error => {
    //     console.log(error);
    // })
}