import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Subject } from "rxjs/Subject";
import { Result } from "../models/Result";
import { UserSearchResult } from "../models/UserSearchResult";

export { DataController }

@Injectable()
class DataController {


    // Globals... NOTE: This is only for the code project.  In a real world app items such as URL, paths, and query parameter names would be stored in an AppConfig to allow for settings to be changed without recompiling.
    private domain: string = "https://api.github.com/";
    private searchPath: string = "search/users";

    // Subjects
    public dcUserSearchResultsReceivedSubject = new Subject<{ result: Result, searchResult: UserSearchResult }>();

    constructor(private _http: HttpClient) { }

    public addingTestMethod() {
        console.log('Test!');
    }

    public readUsersWithSearchString(searchStr: string) {
        console.log("Info: Search Users with Search String: " + searchStr);
        var result: Result = new Result(); // Result Object to describe the success of action.  If an error occurs a message can be passed with object.

        // Build URL and add in search query parameter
        var url: string = this.domain + this.searchPath + '?q=' + searchStr;
        console.log("Info: enpoint for search = " + url);

        // Do Get Request
        this._http.get<UserSearchResult>(url)
            .subscribe(
                response => {
                    // Log
                    console.log("Info: User Search Response received");

                    // Set success to true
                    result.success = true;

                    // Pass data to subscribers
                    this.dcUserSearchResultsReceivedSubject.next({ result: result, searchResult: response });
                },
                error => {
                    // Log the errors
                    this.logError(error);

                    // Set general error message for end user
                    result.success = false;
                    result.message = "An error occured durring the search.";

                    // Pass error to subscribers
                    this.dcUserSearchResultsReceivedSubject.next({ result: result, searchResult: null });
                }
            );
    }

    private logError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('Error: An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
                `Error: Backend returned code ${error.status}, ` +
                `body was: ${JSON.stringify(error.error)}`);
        }
    };
}