import { Component, OnInit } from '@angular/core';

//imports the HeroService
import { HeroService } from '../hero.service';

//imports the interface from the below location 
import { Hero } from '../hero';


//imports the list of heroes from the below location - not needed now that we added the service
//import { HEROES } from '../mock-heroes';

//imports the Message Service 
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  
  //a service should be injected into the constructor
  //really cool typescript constructor, btw
  constructor(private heroService: HeroService, private messageService: MessageService) { }
  
  heroes: Hero[] = [];

  /*
  hero: Hero = {
    id: 1,
    name: `Nightwing`
  };*/
  
  //Selected Hero is a property that can be null of type Hero
  //selectedHero?: Hero; - OBSOLETE
  
  //The onselect method receives a hero object and sets the selected hero to the hero that it receieves
  /* OBSOLETE
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.name}`);
  } */

  //We use subscribe when dealing with getting from an observeable  
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes); 
  }

  
  ngOnInit(): void {
    this.getHeroes();
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

}
