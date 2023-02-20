import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-battle-results',
  templateUrl: './battle-results.component.html',
  styleUrls: ['./battle-results.component.css']
})
export class BattleResultsComponent implements OnInit{
  
  private whoWon: String = "";
  private playerOneAction: String = "";
  private playerTwoAction: String = "";

  private playerOneActionPng: String = "";
  private playerTwoActionPng: String = "";

  constructor(whoWon:String, playerOneAction:String, playerTwoAction: String) {
    this.whoWon = whoWon;
    this.playerOneAction = playerOneAction;
    this.playerTwoAction = playerTwoAction;

    this.playerOneActionPng = "../../assets/images/" + playerOneAction.toLowerCase() + ".png";
    this.playerTwoActionPng = "../../assets/images/" + playerTwoAction.toLowerCase() + ".png";
  }

  ngOnInit(): void {
    
  }

  getWinner() {
    return this.whoWon;
  }

  getPlayerOneAction() {
    return this.playerOneAction;
  }

  getPlayerOneActionPng() {
    return this.playerOneActionPng;
  }

  getPlayerTwoAction() {
    return this.playerTwoAction;
  }

  getPlayerTwoActionPng() {
    return this.playerTwoActionPng;
  }

  

}
