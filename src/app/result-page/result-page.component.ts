import { Component, OnInit } from '@angular/core';
import { ResultsDatabaseComponent } from '../results-database/results-database.component';
import { BattleResultsComponent } from '../battle-results/battle-results.component';
import { BattlePageComponent } from '../battle-page/battle-page.component';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css']
})
export class ResultPageComponent implements OnInit{
  public battleResults:BattleResultsComponent[] = [];
  public databaseService:ResultsDatabaseComponent = new ResultsDatabaseComponent();

  constructor() {

  }

  ngOnInit(): void {
    console.log(this.battleResults);
    this.battleResults = this.databaseService.getResults();
  }  

}
