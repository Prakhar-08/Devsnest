# Latest News - ReactJs

React Server Side Rendering demo project. This project uses [NEWS API](https://newsapi.org/).


## Getting Started

This project created for a Meetup talk about Server Side Rendering with React.

There is also a SPA version of same project.

- [Visit Repo](https://github.com/ilkeraltin/react-spa-news)
- [Click to see DEMO](https://react-spa-ilker.herokuapp.com/)

### Installing

First clone project and install dependencies

```sh
$ mkdir react-news && cd react-news
$ git clone https://github.com/ilkeraltin/react-ssr-news.git
$ cd react-ssr-news
$ npm install
```


Navigate to [News API](https://newsapi.org/) and grab your API key.

Find config.js in root folder and update API Key.

```javascript
const config = {
  apikey: 'enter-your-api-key'
};
```

Run on local

```sh
$ npm run dev
```

Navigate to [http://localhost:3000](http://localhost:3000)

## Deployment

Deployment build

```sh
$ npm run build:prod
```

You can deploy this project to:

- [Heroku](https://www.heroku.com/)

## Built With

- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
