This application is built around dependency injection and Subject/Subscriptions.  The app loads to Main.Component.ts.  When a view needs data from a RESTful api it calls a DataController Service method and asynchronously waits for a response and an event to fire with the results.  
I did my best to follow best practices where necessary; however, since it was a code project, I would do a few things slightly differently in a real world application.  First it would be best to have an Application Config service to allow settings to be changed without recompilation (I.e. ServiceURL, endpoint paths, and other things subject to change).  Second Bootstrap is currently included by a CDN, it would be best to do this with a minified version to be included in the resource files.



DataController - Makes HTTP REST calls to get data.  Components subscribe to receive data from it.  Can be found in the ~/src/services/ folder.

Main.Component - Single View that displays data.  Makes calls through the DataController to get data for view.