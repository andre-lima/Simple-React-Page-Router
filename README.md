# How To Simply Route Pages in React</h1>
This is a simple routing alternative to creating SPAs in React.

At the time of creating this, I have very limited knowledge of React.

This is just a test where the main objective was to better understand React.

## Example page

[Visit the page here](https://github.com/andre-lima/Simple-React-Page-Router) to see the code in action.

## Instructions

1.  [Click here](https://github.com/andre-lima/Simple-React-Page-Router) to go to the github repository for the project to clone the project.
2.  Copy the `Pages.js` to your `src` folder.
3.  Import your UI components there.
    *   example: `import AboutMe from './AboutMe.js';`
4.  Replace the components properties on the `items` variable
    *   example: `title:'About Me', component: AboutMe, page_id: 'about-me',`
5.  On your navigation, add an event that calls
    *   example: `pageRouting.navigateTo(itemId);` where `itemId` is the index of the page on the `items` variable.
6.  Now it gets messy...so it's better if you read the comments on the `App.js` file.
7.  I guess that's all...


----------------------------------------

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Read the create-react-app Manual [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
