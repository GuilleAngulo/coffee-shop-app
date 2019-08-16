# Coffee Shop console app 

This application installs three basic commands simulating a coffee shop (displayed tipying "coffee-shop -h"):
```
coffee-shop ls / coffee-shop list.
```
- Displays the menu list of coffees.
```
coffee-shop c / coffee-shop contact. 
```
- Displays Coffee shop contact information.
```
coffee-shop o / coffee-shop order.
```
- Through an interactive set of options, it creates a new order showed in console and also creates a text file in './orders/' with a timestamp in its filename.


## Modules used
* [Commander](https://www.npmjs.com/package/commander) - Adding commands to console
* [Inquirer](https://www.npmjs.com/package/inquirer) - Adding interactive options while ordering
* [Pad](https://www.npmjs.com/package/pad) - Formatting final order view in console
* [Colors](https://www.npmjs.com/package/colors) - Adding font colors to console

## Prerequisite
Installing the coffee-app command module  
```
npm install -g ./
```

# Demo

![](https://github.com/GuilleAngulo/coffee-shop-app/blob/master/coffee-shop-app.gif)
