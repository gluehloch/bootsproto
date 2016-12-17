import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>{{hero.name}} details!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="hero.name" placeholder="name">
    </div>
    <button (click)="onClickMe()">Click me!</button>
    {{hero.id + hero.name}}
    <br/>
    <input #box (keyup)="0">
    <p>{{box.value}}</p>
  `
})

export class AppComponent  { 
  name = 'Angular';
  title = 'Tour of Heroes';
  hero: Hero = {
    id: 1,
    name: 'Windstorm',
  };

  onClickMe() {
    this.hero.name = 'You are my hero!';
  }
}
