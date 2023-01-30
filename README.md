# Development

### Link to Deployed Website
If you used the stencil code, this is `https://<your GitHub username>.github.io/<name of your repository>`

### Goal and Value of the Application

The goal of this application is to provide users with a view of toys that are usable both in and outdoors as well as toys that use batteries and some that dont. You are able to filter by these options so that you can buy toys even if you dont have outdoor access or batteries. 

### Usability Principles Considered
I placed all of the filtering and sort buttons at the top so that users can change that to their preference before scrolling meanwhile the add to wishlist buttons are on each card because they will need to change state as the user browses. 


### Organization of Components
Main button components are at the top followed by the 12 ToyObj components, which hold their own button components for adding to the wishlist. 


### How Data is Passed Down Through Components
Data is passed from the json file into the App.js where the json data is mapped to the ToyObj component. These mapped ToyObjs are then rendered on the page with the correct information. 

### How the User Triggers State Changes
The user can trigger a stat change in three main ways: using the filter button, using the sort button and using the add to wishlist buttons. 

