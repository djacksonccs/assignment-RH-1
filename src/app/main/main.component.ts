import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataController } from '../../services/DataController';
import { Subscription } from 'rxjs';
import { UserSearchResult } from '../../models/UserSearchResult';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

  // Subscriptions
  private dcUserSearchResultsReceivedSubscription: Subscription;

  // Binding
  public userSearchResult: UserSearchResult;
  public errorMessage: string;
  public searchString: string;
  public maxNumberOfResults: number = 10;  // Limit the number of results to display


  constructor(private _dataController: DataController) {
    // Register event handlers.  Events will come from the DataController.
    this.registerSubscriptions();
  }
  ngOnInit() {
    // Log
    console.log("Initializing Main Component");

    // Initialize Bind Objects
    this.userSearchResult = new UserSearchResult();
    this.errorMessage = '';
    this.searchString = '';
  }

  ngOnDestroy() {
    // Release from memory
    this.userSearchResult = null;

    // Unsubscribe from Events
    this.unsubscribeFromSubscriptions();
  }
  private unsubscribeFromSubscriptions() {
    // Make sure the Subscription is not null or undefined and then unsubscribe.
    if (this.dcUserSearchResultsReceivedSubscription) this.dcUserSearchResultsReceivedSubscription.unsubscribe();
  }
  private registerSubscriptions() {
    // User Search Results Event Handler
    this.dcUserSearchResultsReceivedSubscription = this._dataController.dcUserSearchResultsReceivedSubject.subscribe(args => {
      if (args.result.success) {
        if (args.searchResult) {
          console.log("Info: setting results to bindings.  Total Count: " + args.searchResult.total_count + ".  Items available for display: " + args.searchResult.items.length);
          this.userSearchResult = args.searchResult;
        }
        else {
          // This should not have happend so display an error
          console.error("Error: The searchResult passed was null.  Displaying generic error...");
          this.errorMessage = "An error occured and there were no results found"
        }
      }
      else {
        // There was an error, display error.
        console.error("Error: " + (args.result ? args.result.message : ''))
        this.errorMessage = (args.result ? args.result.message : '');
      }
    });
  }


  // UI Events
  public onSearchButtonClick(args) {
    // Check if Search String is Null or Empty and as DataController for data.  Else display friendly error message. 
    if (this.searchString && this.searchString != '') {
      this.errorMessage = '';
      this._dataController.readUsersWithSearchString(this.searchString);
    }
    else {
      this.errorMessage = "Please enter a name to search...";
    }
  }
  public onClearButtonClick(args) {
    // Clear the view of the results.
    this.userSearchResult = new UserSearchResult();
  }

}
