# Currency Exchanger

## The purpose of this app is to allow a user to choose a currency type and amount, and choose which type of currency they would like the exchange rate for

### Written by Alex Pulvers 7/2020.

**How it works**

1. the async callback function in main instantiates a new object called currency Exchanger.
2. A new variable called response is created, which calls the function callAPI().
3. callAPI runs a try-catch case that calls the function getRate(). getRate() is a switch case with each case being a newUrl with the result we want to provide.
4. the newUrl is given to a fetch command as an argument. we then wait to see if the request was successful. If so, we return the response as the variable jsonifiedResponse.
5. Our jsonifiedResponse is given to getElements() as an argument. getElements invokes an if statement that returns a result if response is true.
