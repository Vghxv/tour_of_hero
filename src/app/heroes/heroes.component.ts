import { Component } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {
  // selectedHero?: Hero;  // this is not used
  
  heroes: Hero[] = [];
  
  constructor(private heroService: HeroService, private messageService: MessageService) { }
  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }
  //   Observable.subscribe() is the critical difference.
  // The previous version assigns an array of heroes to the component's heroes property. The assignment occurs synchronously, as if the server could return heroes instantly or the browser could freeze the UI while it waited for the server's response.
  // That won't work when the HeroService is actually making requests of a remote server.
  
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }
  
  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  //   this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);  } this is not used
  }
  