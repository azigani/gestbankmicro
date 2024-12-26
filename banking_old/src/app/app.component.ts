import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'banking';


  cars = [
    { make: 'Toyota', model: 'Corolla', year: 2020 },
    { make: 'Ford', model: 'Focus', year: 2019 },
    { make: 'Honda', model: 'Civic', year: 2021 }
  ];

  handleClick() {
    alert('Le bouton a été cliqué!');
  }

  addCar() {
    const newCar = { make: 'Chevrolet', model: 'Cruze', year: 2022 };
    this.cars.push(newCar);
  }
}
