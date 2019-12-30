import PNotify from 'pnotify/dist/es/PNotify';
import PNotifyButtons from 'pnotify/dist/es/PNotifyButtons';
import { refs } from './refs';
import countryList from './country-card.handlebars';
import countryOnly from './country-only.handlebars';

export default function fetchCountries(searchQuery) {
  fetch(refs.baseUrl)
    .then((response) => response.json())
    .then((data) => {
      const markup = data
        .filter((country) => country.name.toLowerCase().includes(searchQuery))
        .map((country) => countryOnly(country));


      if (markup.length > 10) {
        PNotify.alert({
          text: 'To many matches. Please enter a more specific query',
          type: 'notice',


        });
        refs.docBody.innerHTML = '';
        return;
      }
      if (markup.length === 0) {
        PNotify.alert({
          text: 'Sorry, there is no such country',
          type: 'notice',


        });
        refs.docBody.innerHTML = '';
        return;
      }

      if (markup.length === 1) {
        refs.docBody.innerHTML = '';
        const newMarkup = data
          .filter((country) => country.name.toLowerCase().includes(searchQuery))
          .map((country) => countryList(country));
        refs.docBody.insertAdjacentHTML('beforeend', newMarkup);
        return;
      }
      refs.docBody.innerHTML = '';
      refs.docBody.insertAdjacentHTML('beforeend', markup);
    });
}
