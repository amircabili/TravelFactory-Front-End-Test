<<<<<<< HEAD
#TRAVELFACTORY - CONTACT APPLICATION#
Welcome in our Test !   
  
The goal of this test is to create an application to manage our contact.

Below you have a .zip with all the assets and the screen

### Be careful, you don’t have to create a server (node.js) or a database. Only the front side (html, css, js file only).

### HTML / CSS Integration ###
* You have to integrate this two screen in responsive design
* Pay attention to browser compatibility for Chrome (latest version), Firefox (latest version), IE11 and Edge

### JAVASCRIPT - DOM MODIFICATION
In this step, we have to add interactivity to our page

* Delete (trash icon) : delete the contact and modify the DOM
* Edit (pencil icon) :  You can edit all the contact details (without of the contact picture - to save time)
* With the "plus" bouton, you can add a new contact. For simplify, it's not necessary to create an image uploader, you can use the same image for all the new contacts
* Before to post the modification (add or edit), you have to verify the phone field : it can contain only : number, (), +

### JAVASCRIPT - CALL AJAX
For each contact we want to add the Gps coordinates relative to the adress filled

* Call the API Google : https://maps.googleapis.com/maps/api/geocode/json?address=paris&key=AIzaSyDKvvBgAkSCugEbXckutuAFuqPzthsCnJ8
* Take the object RESULTS > GEOMETRY > LOCATION and display the "lat" and "long" on the contact.

### BITBUCKET - GIT PUSH 
When you finish, you have to : 

* Create a new branch with your name
* Push your code in this branch


###LINK TO DOWNLOAD ALL THE TEST ASSETS

[Click Here to download](https://bitbucket.org/!api/2.0/snippets/fronttravelfactory/XEayE/7c6de067b21f5939dd465522c29d73d0ba65c509/files/TEST%20JS%20-%20HTML.zip)
###Desktop Screen
![Desktop Screen2.PNG](https://bytebucket.org/snippets/fronttravelfactory/B8AaAk/raw/d8c2ad7c9e17d18c6d41585c3c98f8a1724cc344/Desktop%20Screen2.PNG)

###Mobile-Table Screen (Responsive version)![Mobile - Tablet Screen2.png](https://bytebucket.org/snippets/fronttravelfactory/8r9xr4/raw/ae8863bf7ce402cd2c4edd41f48a902dd5fd3c9d/Mobile%20-%20Tablet%20Screen2.png)
=======
# MyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
>>>>>>> amir cabili -  test - 0546902616 - 15.07.2021