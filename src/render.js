export const renderCountri = (countri) => {       
     const {capital,flags,name,population } = countri[0];
     return `
    <img src="${flags.svg}" alt="${name.official}flag" width="20px">
    <h2>${name.official}</h2>
    <ul>
        <li>capital:${capital}</li>
        <li>population:${population}</li>
        <li>languages:${Object.values(countri[0].languages)}</li>
    </ul>
    `
}