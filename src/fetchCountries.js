import Notiflix from 'notiflix';

export const getCountries = (search) => {
    return fetch(`https://restcountries.com/v3.1/name/${search}?fields=name,capital,flags,population,languages`)
        .then(response => {            
            if (response.status===404) {    
                Notiflix.Notify.failure('Oops, there is no country with that name');
                throw new Error(response.status);                
            } else if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
    })
}
