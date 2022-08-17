'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
const showCountryCard = function (contry) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${contry}`);
  request.send();
  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(`the response is ${request.responseText}`);
    const html = `<article class="country">
                    <img class="country__img" src="${
                      Object.entries(data.flags)[0][1]
                    }" />
                    <div class="country__data">
                        <h3 class="country__name">${data.name.common}</h3>
                        <h4 class="country__region">${data.region}</h4>
                        <p class="country__row"><span>👫</span>${(
                          data.population / 1000000
                        ).toFixed(1)}</p>
                        <p class="country__row"><span>🗣️</span>${
                          Object.entries(data.languages)[0][1]
                        }</p>
                        <p class="country__row"><span>💰</span>${
                          Object.entries(data.currencies)[0][1].name
                        }</p>
                    </div>
                </article>`;
    countriesContainer.insertAdjacentHTML('afterbegin', html);
    countriesContainer.style.opacity = 1;
  });
};

showCountryCard('morocco');
showCountryCard('germany');
showCountryCard('saudi arabia');
