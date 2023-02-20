import { Component, OnInit } from '@angular/core';
import { BattleResultsComponent } from '../battle-results/battle-results.component';

@Component({
  selector: 'app-results-database',
  templateUrl: './results-database.component.html',
  styleUrls: ['./results-database.component.css']
})
export class ResultsDatabaseComponent{

  public static allBattleResults:BattleResultsComponent[] = [];

  constructor() {

  }

  logBattleResults(battleResult:BattleResultsComponent) {
    ResultsDatabaseComponent.allBattleResults.push(battleResult);
  }

  getResults() {
    return ResultsDatabaseComponent.allBattleResults;
  }

}
