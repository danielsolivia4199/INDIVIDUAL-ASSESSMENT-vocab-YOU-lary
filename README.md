# Q2 - Individual Assessment: Vocab-YOU-lary
# Code Words - Vocabulary Card Website

Code Words is a vocabulary card website that allows users to learn and manage programming language terms. The website provides vocabulary cards for JavaScript, HTML, and CSS. The site also includes features like authentication, card filtering/sorting, creation, updating, and deletion. 

# Features 
-Google Authentication: Users can log in to the website using their Google account, ensuring secure access.

-Navigation Bar: The navigation bar displays the site name "Code Words" and includes tabs for easy navigation to different sections of the site.

More Features of navigation bar:

    -View Cards: Users can view vocabulary cards based on different programming languages: "All Vocabulary Cards", "JavaScript", "HTML", and "CSS".
    
    -Search Bar: Functional search bar allows users to filter through terms and quickly find specific vocabulary cards.

    -Sort Button: Users can click the sort button to alphabetically sort the vocabulary cards.

    -Sign Out Button: Functional sign out button allows user to securely log out of the website.

-Create Vocabulary Card: Users can create new vocabulary cards by clicking the "Add a Vocabulary Card" button, which opens a form.

-Card Form: User can create a card by filling out the form which asks for the term, definition, and language (dropdown menu) of the new vocabulary term. Once the user clicks the submit button, the card is added to the website.

-Card Display: Each vocabulary card shows the term, definition, language, and date that the card was created. 

    Cards also feature-

    Update button: Opens the card form, enabling the user to make changes to the card and resubmit with the updates. 

    Delete button: Allows user to delete card off of the site. 

# Technologies Used

Frontend: HTML, CSS, JavaScript
Backend: Firebase (Google Authentication, Realtime Database), Postman

# Getting Started
1.Clone the repository: git clone https://github.com/danielsolivia4199/INDIVIDUAL-ASSESSMENT-vocab-YOU-lary
2. Set up Firebase project and enable Google Authentication and Realtime   Database.
3. Update Firebase configuration in the code to connect your project.

## Tools To Use:
- Postman for API testing
- Firebase for database, rules, and authentication
- Webpack template setup steps
- dbdiagram.io or something similar for creating your ERD
- Figma, google slides, or paper for flow charting your application
- Fetch for requests
- Github issues/milestones for planning out work
- Bootstrap for styling

## Starting the Project
1. Open the `package.json` file and change the `name` property to the name of your application, and `author` to  your name.
2. Rename the `.sample.env` file to `.env` file. The final file name should be `.env`
3. From your command line, be in the root directory and run `npm install` OR `npm i` for short.
4. To start your application, run `npm start`
5. Open browser
6. Start Coding

# Extra Information

### Planning
- Webpack template setup steps
- dbdiagram.io or something similar for creating your ERD
- Figma, google slides, or paper for flow charting your application
- Github issues/milestones for planning out work
### Including Images with Webpack
If you have a folder of local images that you want to load into your code things get a little strange with webpack.  Remember the only way webpack knows about assets is if they are imported into your javascript files.  Even our CSS is not added until those files are imported into our javascript files.  Below is some sample code for how to load a local image file into your project

```js
import cat from './assets/cat.jpg';

let domString = `<img src=${cat} alt="picture of a cat"/>`;

document.getElementById('cat').innerHTMl = domString;
```

### Importing CSS/SCSS
**NOTE:** We will be using SCSS files. They are used the same way your CSS files work, with some added benefits that we will discuss later.

Since Webpack is making the connection to the JS and CSS for us and we are no longer manually adding links or script tags to our HTML, we have to get our styles to the application some way...

Here is how we add our styles using webpack:

```js
import '../styles/main.scss';

const init = () => {
  document.querySelector('#app').innerHTML = '<h1>HELLO! You are up and running!</h1>';
  console.log('YOU ARE UP AND RUNNING!');
};

init();
```

### Deploying on Netlify

- Build Command: `npm run build`
- Publish directory: `dist`
- Add Environmental Variables (NOT REQUIRED for Apps that do not use API Keys, etc)
    - Any Enviromental variables you are using in your `.env` file should be added to Netlify. 
        - Go to Site settings > Build & deploy > Environment > Environment variables and the keys and values there.

- Update Firebase URL Settings
    - In Firebase under Authentication select sign in methods, scroll to Authorized domains. Add your Netlify URL.
        
## More Info and Resources on Webpack
- Visit the [Webpack documentation](https://webpack.js.org/concepts/) if you want to explore more.
- [Info on our Webpack Config](https://github.com/nss-nightclass-projects/Night-Class-Resources/blob/master/book-2-patterns-and-tools/chapters/webpack-configure.md)
