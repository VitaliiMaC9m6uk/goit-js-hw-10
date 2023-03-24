import './css/styles.css';
import { debounce } from "lodash.debounce"
import { getCountries } from './fetchCountries.js'
import { getCountriesZwei } from './fetchCountries.js';
import { renderCountri } from './render';
const DEBOUNCE_DELAY = 300;

const searchInput = document.querySelector('#search-box');

const serverRequest = (search) => getCountries(search)
    .then(
        response => {
            if (response.length === 1) {
                const markup = renderCountri(response);   
                
                console.log(markup);
                document.querySelector('.country-info')
    .insertAdjacentHTML('beforebegin',renderCountri())
            }
            
        }
    )
    .catch(e => console.log(e));


searchInput.addEventListener('input', () => {
    const search = document.querySelector('#search-box').value;
    serverRequest(search);
});

