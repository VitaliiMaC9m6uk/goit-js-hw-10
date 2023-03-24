export const renderCountri = (countri) => {       
    //  const {capital,flags,name,population } = countri[0];
     return `
    <img src="${countri[0].flags.svg}" alt="${countri[0].name.official}flag" width="20px">
    <h2>${countri[0].name.official}</h2>
    <ul>
        <li>capital:${countri[0].capital}</li>
        <li>population:${countri[0].population}</li>
        <li>languages:${Object.values(countri[0].languages)}</li>
    </ul>
    `
}