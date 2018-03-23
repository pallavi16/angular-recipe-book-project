import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [	
    new Recipe('Recipe 1', 'Coffee - Espresso', 'https://www.nespresso.com/ecom/medias/sys_master/public/10373543428126/A-0349-VIEW-Recipe-Main-684x378.jpg'),
    new Recipe(' Recipe 2', 'Salmon with herbs', 'https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-articleLarge.jpg'),	
    	];
  constructor() { }

  ngOnInit() {
  }

}
