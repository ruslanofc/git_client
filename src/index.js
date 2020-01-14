// import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App.js';
// import * as serviceWorker from './serviceWorker';
// import { ApolloProvider } from 'react-apollo';
// import { ApolloClient } from 'apollo-client';
// import { BrowserRouter } from 'react-router-dom';
// import createBrowserHistory from "history/createBrowserHistory";
// import {createHttpLink} from 'apollo-link-http';
// import { InMemoryCache } from 'apollo-cache-inmemory';
// import {AUTH_TOKEN} from "./authtoken.js";
// import {setContext} from "apollo-link-context";

// const history = createBrowserHistory();

// const httpLink = createHttpLink({
//     uri: 'https://api.github.com/graphql'
// });

// const authLink = setContext((_, { headers }) => {
//     const token = localStorage.getItem(AUTH_TOKEN)
//     return {
//         headers: {
//         ...headers,
//         authorization: token ? `Bearer ${token}` : ''
//         }
//     }
// });

// const client = new ApolloClient({
//     link: authLink.concat(httpLink),
//     cache: new InMemoryCache()
// });

// ReactDOM.render(
// <BrowserRouter history={history}>
//     <ApolloProvider client={client}>
//         <App/>
//     </ApolloProvider>
// </BrowserRouter>,
// document.getElementById('root'));

import React from 'react';
import App from './App';

ReactDOM.render(<App/>,
document.getElementById('root'));

//serviceWorker.unregister();
