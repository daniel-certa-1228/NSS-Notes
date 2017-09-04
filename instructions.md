Requirements

In this exercise, you'll be requiring users to register and log into your application before they can use it. The user interface is very simple once they log in, because this is a basic application that will allow them to enter notes, and then view all notes.

Firebase

Create a Firebase collection named notes
Use the basic Firebase email/password authentication to register users for your application.
Application

Create an Angular application module.
Create 4 partials for views.
A registration view
A login view
A new note form
A note list form
Configure your application to support the following routes.
/register
/login
/notes
/new
Write a controller for each of the partials

New Note Form

Display a text field labeled Enter note: and a button labeled Save. When the button is clicked, save a new item in the Firebase notes collection, along with the current user's unique id.

Note List

When the user visits the /notes URL, the user should see all of the notes that were entered by that user, and no others. Use the orderBy and equalTo parameters in the $http request to only return notes created by the current user.