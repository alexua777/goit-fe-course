import debounce from 'lodash.debounce';
import fetchCountries from './fetchCountries';
import { refs } from './refs';
// const debounce = require('lodash.debounce');

let inputResult;

function inputHandler(event) {
  event.preventDefault();
  inputResult = event.target.value;
  fetchCountries(inputResult);
}
// refs.input.addEventListener('input', inputHandler);
refs.input.addEventListener('input', debounce(inputHandler, 500));
