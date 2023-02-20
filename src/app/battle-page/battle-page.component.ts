import { Component, OnInit } from '@angular/core';
import { PredictionEvent } from '../prediction-event';
import { HandtrackerComponent } from '../handtracker/handtracker.component';
import { BattleResultsComponent } from '../battle-results/battle-results.component';
import { ResultsDatabaseComponent } from '../results-database/results-database.component';


@Component({
  selector: 'app-battle-page',
  templateUrl: './battle-page.component.html',
  styleUrls: ['./battle-page.component.css']
})
export class BattlePageComponent implements OnInit {
 
  gesture: String = "";
  whoWon: String = "";
  playerOneAction: String = "";
  playerTwoAction: String = "";
  playerTurn: String = "Player One";
  imageURL: String = "../../assets/images/blank.jpg";
  errorMsg: String = "";
  errorMsg2: String = "";
  results:BattleResultsComponent;
  databaseService:ResultsDatabaseComponent = new ResultsDatabaseComponent();
 

  constructor() {}

  ngOnInit(): void {
    
  }

  // Gets predictions from handtracker and displays the appropriate image for each action
  prediction(event: PredictionEvent){
    this.gesture = event.getPrediction();
    console.log(this.gesture);

    if (this.gesture == "Rock") {
      this.errorMsg = "";
      this.imageURL = "../../assets/images/rock.png";
    }

    else if (this.gesture == "Paper") {
      this.errorMsg = "";
      this.imageURL = "../../assets/images/paper.png";
    }

    else if (this.gesture == "Scissors") {
      this.errorMsg = "";
      this.imageURL = "../../assets/images/scissors.png";
    }

    else if (this.gesture == "Lizard") {
      this.errorMsg = "";
      this.imageURL = "../../assets/images/lizard.png";
    }

    else if (this.gesture == "Guns") {
      this.errorMsg = "";
      this.imageURL = "../../assets/images/guns.png";
    }

    else if (this.gesture == "Wizard") {
      this.errorMsg = "";
      this.imageURL = "../../assets/images/wizard.png";
    }

    else if (this.gesture == "Ogre") {
      this.errorMsg = "";
      this.imageURL = "../../assets/images/ogre.png";
    }

    // Clear answer so the next player doesn't see your answer choice
    else if (this.gesture == "Removed Answer") {
      this.imageURL = "../../assets/images/blank.jpg";
    }
  }

  // Take in the players' actions
  actionSubmitted() {

    if (this.gesture != "Removed Answer" && this.gesture != "") {
      this.errorMsg = "";
      if (this.playerTurn == "Player One") {
        this.playerOneAction = this.gesture;
        
        this.playerTurn = "Player Two";
      }
      else {
        this.playerTwoAction = this.gesture;
        this.playerTurn = "Player One";
      }
      console.log("Player turn: " + this.playerTurn);
      console.log("Player 1 action: " + this.playerOneAction);
      console.log("Player 2 action: " + this.playerTwoAction);
    }

    else {
      this.errorMsg = "You can't submit a blank answer!";
    }
  }

  calculateResults() {
    if (this.playerOneAction == "" || this.playerTwoAction == "") {
      this.errorMsg2 = "ERROR: Both players need to submit before battling!";
    }
    else if (this.playerOneAction != "" && this.playerTwoAction != ""){
      this.errorMsg2 = "";
      
      this.realCalculateResults();

      this.playerOneAction = "";
      this.playerTwoAction = "";
    }
    
  }

  // Calculate which player wins based on their chosen actions
  realCalculateResults() {
    
    if (this.playerOneAction == "Rock" && (this.playerTwoAction == "Scissors"
                                       ||  this.playerTwoAction == "Guns"
                                       ||  this.playerTwoAction == "Lizard")) {
      this.whoWon = "Player One Won";

    }

    else if (this.playerOneAction == "Paper" && (this.playerTwoAction == "Rock"
                                       ||        this.playerTwoAction == "Ogre"
                                       ||        this.playerTwoAction == "Wizard")) {
      this.whoWon = "Player One Won";
    }

    else if (this.playerOneAction == "Scissors" && (this.playerTwoAction == "Paper"
                                       ||           this.playerTwoAction == "Guns"
                                       ||           this.playerTwoAction == "Lizard")) {
      this.whoWon = "Player One Won";
    }

    else if (this.playerOneAction == "Lizard" && (this.playerTwoAction == "Wizard"
                                       ||         this.playerTwoAction == "Paper"
                                       ||         this.playerTwoAction == "Ogre")) {
      this.whoWon = "Player One Won";
    }

    else if (this.playerOneAction == "Wizard" && (this.playerTwoAction == "Rock"
                                       ||         this.playerTwoAction == "Scissors"
                                       ||         this.playerTwoAction == "Guns")) {
      this.whoWon = "Player One Won";
    }

    else if (this.playerOneAction == "Guns" && (this.playerTwoAction == "Lizard"
                                       ||       this.playerTwoAction == "Paper"
                                       ||       this.playerTwoAction == "Ogre")) {
      this.whoWon = "Player One Won";
    }

    else if (this.playerOneAction == "Ogre" && (this.playerTwoAction == "Scissors"
                                       ||       this.playerTwoAction == "Rock"
                                       ||       this.playerTwoAction == "Wizard")) {
      this.whoWon = "Player One Won";
    }

    else if (this.playerOneAction == this.playerTwoAction) {
      this.whoWon = "TIE";
    }

    else {
      this.whoWon = "Player Two Won";
    }
    
    this.addResults();

  }

  addResults() {
    this.results = new BattleResultsComponent(this.whoWon, this.playerOneAction, this.playerTwoAction);
    console.log(this.results);

    console.log(this.databaseService);
    this.databaseService.logBattleResults(this.results);
    console.log(this.databaseService.getResults());

    
  }

}

