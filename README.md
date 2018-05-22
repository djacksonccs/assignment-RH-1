# Notes from the Developer Doing The Code Challenge
This application is built around dependency injection and Subject/Subscriptions.  The app loads to Main.Component.ts.  
When a view needs data from a RESTful api it calls a DataController Service method and asynchronously waits for a response and an event to fire with the results.  
I did my best to follow best practices where necessary; however, since it was a code project, I would do a few things slightly differently in a real world application.  
First it would be best to have an Application Config service to allow settings to be changed without recompilation and to keep things clean and organized (I.e. ServiceURL, endpoint paths, and other things subject to change).  
Second Bootstrap is currently included by a CDN, it would be best to do this with a minified version to be included in the resource files.

#### Main Files for the Application
1.  DataController - Makes HTTP REST calls to get data.  Components subscribe to receive data from it.  Can be found in the ~/src/services/ folder.
2.	Main.Component - Single View that displays data.  Makes calls through the DataController to get data for view.






<br />
<br />
<br />
<br />

# Original Assignment

## Github-Profile-Search
The goal of this challenge is to see whether you can do some basic front end development. You don’t have to know angular2 or material design or typescript. 


### Getting started
1.  Make sure you have node  and npm installed
1.  Fork this repository 
1.  If you do not have latest angular cli installed, run `npm install -g @angular/cli`
2.	Run `npm install`
3.	Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### General Guideline
1.  Feel free to use internet
3.  We recommend you to spend maximum two hours and submit as much as you can
2.  The project has angular material design incorporated. Feel free to use it 
1.  Before start coding 
    *   Create a branch by using your full name
    *   When you are done, send a pull request



## Fetch data and display user profile
1.	Github user api: `https://api.github.com/search/users?q=eric` takes a search string to search users in github. The search string could be passed as parameter q
4.	Create a textbox in the main component under src\app\main to take user by using the above mentioned api
5.	From the search result display the total number of github user in `total_count`
6.  Display first 10 users in the search result


### Further help
1.  Feel free to ask google or the person sent you this challenge

