import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Settings } from 'src/app/interfaces/settings';

@Component({
  selector: 'db-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  @Output() settingsChange = new EventEmitter<Settings>();

  newSettings: Settings = {
    scale: 'C',
    distance: 'km',
    pressure: 'mb',
    precipitation: 'mm'
  };

  inputScale = new FormControl('');
  inputDistance = new FormControl('');
  inputPressure = new FormControl('');
  inputPrecipitation = new FormControl('');

  
  constructor() { }

  ngOnInit(): void {
  }

  onChangeScale() {
    this.inputScale.valueChanges
      .subscribe(value => {
        this.newSettings.scale = value ? 'F' : 'C';
        this.settingsChange.emit(this.newSettings);
      });
  }

  onChangeDistance() {
    this.inputDistance.valueChanges
    .subscribe(value => {
      this.newSettings.distance = value ? 'miles' : 'km';
      this.settingsChange.emit(this.newSettings);
    });
  }

  onChangePressure() {
    this.inputPressure.valueChanges
    .subscribe(value => {
      this.newSettings.pressure = value ? 'in' : 'mb';
      this.settingsChange.emit(this.newSettings);
    });
  }

  onChangePrecipitation() {
    this.inputPrecipitation.valueChanges
    .subscribe(value => {
      this.newSettings.precipitation = value ? 'in' : 'mm';
      this.settingsChange.emit(this.newSettings);
    });
  }

}
