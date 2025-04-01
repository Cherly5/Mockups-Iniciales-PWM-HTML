import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PruebaComponent} from './prueba/prueba.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PruebaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular';
}
