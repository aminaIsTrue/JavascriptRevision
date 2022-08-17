'use strict';

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');
/////////////////////////////////////////////////////////////////////
// DATA ARCHITECTURE////////////////////////////////////////////////

class Workout {
  // prettier-ignore
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  date = new Date();
  id = (Date.now() + '').slice(-10);
  clicks = 0;
  constructor(coords, duration, distance) {
    this.coords = coords; //[lng,lat]
    this.duration = duration; //min
    this.distance = distance; //km
  }
  getDate() {
    this.stringDate = `${
      this.name[0].toUpperCase() + this.name.slice(1)
    } on ${this.date.getDate()} ${
      this.months[this.date.getMonth()]
    } ${this.date.getFullYear()}`;
  }
}

class Running extends Workout {
  name = 'running';
  constructor(coords, duration, distance, cadence) {
    super(coords, duration, distance);
    this.cadence = cadence;
    this.getPace();
    this.getDate();
  }
  getPace() {
    // min/km
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}
class Cycling extends Workout {
  name = 'cycling';
  constructor(coords, duration, distance, elevGain) {
    super(coords, duration, distance);
    this.elevGain = elevGain;
    this.getSpeed();
    this.getDate();
  }
  getSpeed() {
    // km/h
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

///////////////////////////////////////////////////////////////////

// APP ARCHITECTURE //////////////////////////////////////////////
class App {
  #map;
  #mapPosition;
  #workout;
  #zoomLevel = 13;
  workouts = []; //push all workouts to this array
  constructor() {
    // get position
    this._getPosition();
    // get stored workouts
    this._getStoredWorkouts();
    // initialize the event listener
    inputType.addEventListener('change', this._toggleElevationField);
    form.addEventListener('submit', this._newWorkout.bind(this));

    containerWorkouts.addEventListener(
      'click',
      this._goToMarkerOnMap.bind(this)
    );
  }
  _goToMarkerOnMap(e) {
    const El = e.target;
    const workoutEl = El.closest('.workout');
    if (!workoutEl) return;
    // extract the workout from the array
    const workout = this.workouts.find(
      work => work.id === workoutEl.dataset.id
    );
    //  move the map to the selected workout
    this.#map.setView(workout.coords, this.#zoomLevel, {
      animate: true,
      pan: { duration: 1 },
    });
    workout.clicks++;
    console.log(workout);
  }
  _getPosition() {
    navigator.geolocation.getCurrentPosition(
      this._loadMapPosition.bind(this),
      function () {
        alert('Your location can not be loaded');
      }
    );
  }
  _loadMapPosition(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    // console.log(`https://www.google.com/maps/@${latitude},${longitude}`);
    const coords = [latitude, longitude];
    this.#map = L.map('map').setView(coords, this.#zoomLevel);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    L.marker(coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 300,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
        })
      )
      .setPopupContent('you are here!')
      .openPopup();
    this.#map.on('click', this._showForm.bind(this));
    // render markers after loading th map
    this.workouts.forEach(workout => {
      this._renderWorkoutMarker(workout);
    });
  }
  _showForm(mapE) {
    this.#mapPosition = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  _hideForm() {
    form.classList.add('hidden');
    form.style.display = 'none';
    setTimeout(() => {
      form.style.display = 'grid';
    }, 1000);
  }
  _toggleElevationField() {
    // the closest form row is the parent div containing the input
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }
  _newWorkout(e) {
    //
    console.log(this.workouts);
    const isValidInputs = (...entries) =>
      entries.every(inp => Number.isFinite(inp));
    const allPositiveInputs = (...entries) => entries.every(inp => inp > 0);

    e.preventDefault();
    // take the data from the form
    const type = inputType.value;
    const duration = +inputDuration.value;
    const distance = +inputDistance.value;
    const cadence = +inputCadence.value;
    const elevation = +inputElevation.value;
    const { lat, lng } = this.#mapPosition.latlng;
    // if workout type is running => creat a running Object
    if (type === 'running') {
      // validate data (is a number and is positive)
      if (
        !isValidInputs(duration, distance, cadence) ||
        !allPositiveInputs(duration, distance, cadence)
      )
        return alert('Input needs to be a positive number!');
      this.#workout = new Running([lat, lng], duration, distance, cadence);
    }
    // if workout type is cycling => creat a cycling object Object
    if (type === 'cycling') {
      if (
        !isValidInputs(duration, distance, elevation) ||
        !allPositiveInputs(duration, distance, elevation)
      )
        return alert('Input needs to be a positive number!');
      this.#workout = new Cycling([lat, lng], duration, distance, elevation);
    }

    this.workouts.push(this.#workout);
    //////////////////////////////////////////////////
    inputCadence.value =
      inputDistance.value =
      inputDuration.value =
      inputElevation.value =
        '';
    // render workout marker
    this._renderWorkoutMarker(this.#workout);
    // render workout on te sidebar
    this._renderWorkoutSideBare(this.#workout);
    // store the workouts array in the navigator local storage
    this._storeWorkouts();
  }
  _storeWorkouts() {
    localStorage.setItem('workouts', JSON.stringify(this.workouts));
  }
  _getStoredWorkouts() {
    const data = JSON.parse(localStorage.getItem('workouts'));
    if (!data) return;
    this.workouts = data;
    this.workouts.forEach(workout => {
      this._renderWorkoutSideBare(workout);
    });
    // console.log(data);
  }

  _renderWorkoutMarker(workout) {
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 300,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.name}-popup`,
        })
      )
      .setPopupContent(
        `${workout.name === 'running' ? '🏃‍♂️' : '🚴'} ${workout.stringDate}`
      )
      .openPopup();
  }
  _renderWorkoutSideBare(workout) {
    let html = `
            <li class="workout workout--${workout.name}" data-id="${
      workout.id
    }">
              <h2 class="workout__title">${workout.stringDate}</h2>
              <div class="workout__details">
                <span class="workout__icon">${
                  workout.name === 'running' ? '🏃‍♂️' : '🚴'
                }</span>
                <span class="workout__value">${workout.distance}</span>
                <span class="workout__unit">km</span>
              </div>
              <div class="workout__details">
                <span class="workout__icon">⏱</span>
                <span class="workout__value">${workout.duration}</span>
                <span class="workout__unit">min</span>
              </div> `;
    if (workout.name === 'running') {
      html += `<div class="workout__details">
                <span class="workout__icon">⚡️</span>
                <span class="workout__value">${workout.pace.toFixed(1)}</span>
                <span class="workout__unit">min/km</span>
              </div>
              <div class="workout__details">
                <span class="workout__icon">🦶🏼</span>
                <span class="workout__value">${workout.cadence}</span>
                <span class="workout__unit">spm</span>
              </div>
            </li>`;
    }

    if (workout.name === 'cycling') {
      html += `<div class="workout__details">
                <span class="workout__icon">⚡️</span>
                <span class="workout__value">${workout.speed.toFixed(1)}</span>
                <span class="workout__unit">km/h</span>
              </div>
              <div class="workout__details">
                <span class="workout__icon">⛰</span>
                <span class="workout__value">${workout.elevGain}</span>
                <span class="workout__unit">m</span>
              </div>
            </li>`;
    }
    form.insertAdjacentHTML('afterend', html);
    this._hideForm();
  }
  clearStorage() {
    localStorage.removeItem('workouts');
    location.reload();
  }
}

const app = new App();
