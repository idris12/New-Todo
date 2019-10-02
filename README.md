# New-Todo
Todo app is a web application in the category of Task Management, Project Management, Productivity, “Getting Things Done” (GTD),
Scheduling, and Collaboration.

## Technology used
* HTML
* Javascript

## How to run the app
1. Either fork or download the app.
2. Then store the file in a folder of your choice
3. Finaly open the todo.html file

## How to search for todos
Enter the first letter or word you are seraching for in the text box, and it will display the data in real time

## User stories
- A user can search for a particular todo
- User can add todo
- Displaying todo that are incomplete

## Features
*Filtering todos*
 * Input gets sent to an object
 * A function is ran where all the todos data are compared to the object to see if the word passed is included in the todo data.
 * If the user input matches the already filtered todo data. The whole todo is cleared and the new filtered todo will be rendered to the homepage
 
 *Adding Todo*
 * Input is collected from an input form
 * The form is prevented from default behaviour
 * The new input is put into and object and pushed to the array
 
 *Incomplete todo*
 * user clicks a checkbox and the return value is used to determine weather to show the incomleted todo or not
 * The value is then passed into a filtering function to show only todos that are incompleted then rendered to the page

## Future Features
- Ability to store added todo locally
