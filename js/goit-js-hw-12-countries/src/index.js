import debounce from 'lodash.debounce';
import fetchCountries from './fetchCountries';
import { refs } from './refs';

let inputResult;

function inputHandler(event) {
  event.preventDefault();
  inputResult = event.currentTarget.value;
  console.log(inputResult);
  setTimeout(() => fetchCountries(inputResult), 500);
}

refs.input.addEventListener('input', inputHandler);
// refs.input.addEventListener('input', debounce(inputHandler, 2000));
