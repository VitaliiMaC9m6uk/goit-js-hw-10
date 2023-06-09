import './css/styles.css';
import Notiflix from 'notiflix';
import  debounce  from "lodash.debounce"
import { getCountries } from './fetchCountries.js'
import { renderCountry } from './render';
import { renderCountries } from './render';
const DEBOUNCE_DELAY = 300;

const searchInput = document.querySelector('#search-box');

const serverRequest = (search) => getCountries(search)
    .then(
        response => {
            document.querySelector('.country-list').textContent = "";
            document.querySelector('.country-info').textContent = "";
            if (response.length === 1) {
                renderCountry(response);                   
                document.querySelector('.country-info')
                    .insertAdjacentHTML('afterbegin', renderCountry(response))
                return;
            } else if (2 <= response.length && response.length <= 10) {
                renderCountries(response);                 
                return;
            }
            Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
        }
    )
    .catch(e => console.log(e));
    function makeInput(event) {    
        const search = event.target.value; 
        console.log(search);    
    if (search.trim()!=='') {
        serverRequest(search);
    } else {
        return;
    }    

}

searchInput.addEventListener('input', debounce(makeInput,DEBOUNCE_DELAY));

