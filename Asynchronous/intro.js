/*
Diff Asynchronous vs Synchronous
-> Async is multi-thread, which means operations or programs can run in parallel. Sync is a single-thread, so only one operation or program will run at a time. Async is non-blocking, which means it will send multiple requests to a server.
*/

/*HTTP (Hypertext Transfer Protocol) 
 Request -> What do we eant to do
 Response -> What was actually done
*/

/*network in console show type http or https*/

/*what we're going to do is make Http request yhat allow us to get Json back and we can then parse that Json into a JavaScript object to extract the data off of it.*/

/*XMLHttpRequest: readyState :- The readyState property in HTML is used to return the loading status of the current document.
 */

//XMLHttpRequest (XHR) objects are used to interact with servers. You can retrieve data from a URL without having to do a full page refresh. This enables a Web page to update just part of a page without disrupting what the user is doing.

/*
iso 3166-2state_name state name give country code
 */

/*readystatechange event :=
The readystatechange event is fired when the readyState attribute of a document has changed.
*/

/*
// function
function greet(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
}

// callback function
function callMe() {
    console.log('I am callback function');
}

// passing function as an argument
greet('Peter', callMe);

Callback function
A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

A callback is a function passed as an argument of another function.

This means that the parent function is usually built to use any kind of function. But the callback function, on the other hand, is meant to be used in a specific case (or a restricted number of cases) in which the parent function is used.
*/
