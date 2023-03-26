

export const renderCountry = (country) => {         
     const {capital,flags,name,population } = country[0];
     return `
    <img src="${flags.svg}" alt="${name.common}flag" width="90px">
    <h2>${name.common}</h2>
    <ul>
        <li class='list'><span class='text'>capital</span>: ${capital}</li>
        <li class='list'><span class='text'>population</span>: ${population}</li>
        <li class='list'><span class='text'>languages</span>: ${Object.values(country[0].languages)}</li>
    </ul>
    `
}
export const renderCountries = (countries) => {
    let elements = [];
    
    for (let i = 0; i < countries.length; i+=1) {
    const country = countries[i];
        const countryName = country.name.common;        
        const listEl = document.createElement('li');
        const imageEl = document.createElement('img');

        imageEl.src = country.flags.svg;
        imageEl.alt = country.name.official;
        imageEl.classList.add('list__flags');
        listEl.append(imageEl);
        listEl.append(countryName);
        listEl.classList.add('list');         
        elements.push(listEl);
        }
    return document.querySelector('.country-list').append(...elements);
}
