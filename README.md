# Shopping List Tracker (Client)
This is a front-end application which allows a User to access and edit their own saved shopping lists. User authentication and user lists are handled through a custom back-end API (see links below).


## Relevant Links
+ Link to [API Repository](https://github.com/lizcramerfox/shopping-list-api)

+ Link to [Deployed API](https://apricot-custard-90647.herokuapp.com/)

+ Link to [Deployed Client](https://lizcramerfox.github.io/shopping-list-client/)


## Wireframe & User Stories
##### [Client Site Wireframe](https://imgur.com/a/lZlqj7a)

![Wireframe Image](https://i.imgur.com/7cNnOLb.jpg)


##### User Stories
+ As a new user, I'd like to create an account
+ As a user with an account, I would like to sign in
+ As a signed-in user, I'd like to change my password
+ As a signed-in user, I'd like to log out
+ As a signed-in user, I'd like to create a new list
+ As a signed-in user, I'd like to see a list of all my lists so I can select one
+ As a list owner, I'd like to view/edit my list
+ As a list owner, I'd like to rename my list
+ As a list owner, I'd like to edit the text in my list
+ As a list owner, I'd like to save changes to my list
+ As a list owner, I'd like to ONLY save changes to my list after I confirm
+ As a list owner, I'd like to delete my list
+ As a list user, I'd like to enter my list data as plain text into a text box
+ As a list user, I'd like to enter my list data as individual line items
+ As a list user, I'd like to be able to check unchecked items, and uncheck checked items
+ As a list user, I'd like my list items to sort alphabetically
+ As a list user, I'd like to sort my list so unpurchased items (not checked off) are all at the top of the list, followed by already-purchased items (checked)


## Technologies Used

+ HTML, CSS/SASS, Handlebars (*NOTE: Bootstrap provided in browser template, but not used in this project*)

+ Ruby, Ruby on Rails

+ JavaScript, jQuery/AJAX

+ Templates *(provided by General Assembly Boston)*:
  + [Rails API Template](https://git.generalassemb.ly/ga-wdi-boston/rails-api-template)
  + [Browser Template](https://git.generalassemb.ly/ga-wdi-boston/browser-template)


### Unsolved Problems for Future Versions
##### Authentication
- When User is logged in, display the User's email address (i.e. "*Currently logged in as: example@email.com*").

- Float all User-Authentication UI items to the left into their own sidebar.

##### Lists
+ When User updates a list (PATCH), remove all null fields from JSON to prevent them overwriting existing data.

+ Change "Content" field into multiple "List Item" fields (i.e. split content section into individual line items which he user can create/update/delete individually).

+ Add checkbox functionality to List Items, wherein a "checked" List Item is rendered to diplay in the UI in gray italics (or other styling to represent a "done" state).

+ Upon log-in, User's lists collection should automatically display in sidebar (right) with a link to each list, using the ```<list[id]>``` and ```<list[title]>``` as the link's text. Also, remove existing "View All Lists" button from UI.

+ Move "Update List" and "Delete List" buttons to only appear *within* the list that is *currently displayed* on the screen. Remove inputs where User is asked to provide the List's ID and updated list-events.js to automatically provide the ```<list[id]>``` of the currently-displayed list.




### Planning & Development Narrative
In an effort to *not* try reinventing the wheel, I always first reference my client's specifications and timeline (in this case, the client is my course - General Assembly Boston SEI-09). Luckily, they provided me with some very thorough input on those fronts, so I followed their directions and began by creating my:

  1. User Stories
  2. Front-End Wireframe
  3. Back-End ERD

I've come to like this order regardles of instructions because the User Stories dictate what the UI must present (Front-End Wireframe), and that in turn also dictates the entitites and relationships you'll need to scaffold the back-end. However, I do still sometimes find myself skipping steps and growing to regret it.

In this case, the biggest struggle I had came while I was debugging - particularly the "Update" patch request for updating lists. It turns out that if I had *continued* following the steps laid out by my client (GA Boston), I would have saved many hours due to a small typo in my routing. GA told me that I should FIRST create curl scripts to test my routes before moving on, but I did not, thinking this step an unnecessary excercise. My reasoning was that the curl scripts are never directly used in the final product (instead we use AJAX calls) - and yet, it turns out that this tiny step would have alerted me about my mistake and directed me to specific place the problem originated (typos between my API and Client).

This challenging lesson was instead learned the hard way, as I tried every other conceivable way of finding the error with no luck. After many hours of that, I finally thought "maybe I should just double-check that this obvious element is indeed correctly written" and, voila! The curl-script errored out immediately, making the mistake obvious and easy to fix.
