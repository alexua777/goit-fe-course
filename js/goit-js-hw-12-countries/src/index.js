import debounce from 'lodash.debounce';
import fetchCountries from './fetchCountries';


import { refs } from './refs';


refs.input.addEventListener('input', inputHandler);

let inputResult;

function inputHandler(event) {
  event.preventDefault();
  inputResult = event.currentTarget.value;
  console.log(inputResult);
  setTimeout(() => {
    fetchCountries(inputResult);
  }, 500);
}
