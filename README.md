# Northcoders News Server (Front-End)

Northcoders News is a social news aggregation, web content rating, and discussion website which has been created using React.js.

Northcoders News has articles which are divided into topics. 
Each article has user curated ratings and can be up or down voted using the API. 
Users can also add comments about an article. 
Comments can also be up or down voted. 
A user can add comments and remove any comments which they have added.

Data is fetched using a RESTful API which has also been built by me. (See Links)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development.

### Prerequisites

Download and install 

 node minimum version 13.9.0 [node](https://nodejs.org/en/download/)


### Installing

Clone this repo:

```bash
git clone https://github.com/northcoders/fe-nc-news

cd fe-nc-news

```

Install required packages and dependencies
```bash
npm install
```

Start northcoders-news app
```bash
npm start
```

## User Stories

As a user, I can:

* view all articles
* view all articles on a certain topic
* sort articles by date, comments, or votes
* click on an article title to view an individual article and its comments
* post a new comment to an existing article (as a default logged in user)
* delete my own comments
* vote on an article and immediately see the change
* vote on a comment and immediately see the change
* receive a 404 error if I go on a non-existent path/a path for a non-existent article/topic
* receive a 400 error if I go on a invalid article ID
* not post a comment if I have not filled in the text box

## Built With

* [React](https://reactjs.org/) - A JavaScript library for building user interfaces
* [Bootstrap](https://getbootstrap.com/) - The world’s most popular front-end component library.
* [Axios](https://www.npmjs.com/package/axios) - Promise based HTTP client for the browser and node.js
* [react-router-dom](https://www.npmjs.com/package/react-router-dom) - The standard routing library for React.


## Authors

* **Azlina Yeo** - *Initial work* - [nax2uk](https://github.com/nax2uk)

