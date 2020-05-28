import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';


const loggerMiddleware = createLogger({
  level: 'info',
  collapsed: true,
});


// You need to include thunkMiddleware because its what allows you to make asyncronous actions trigger
// Include loggerMiddleware to see in the browser console the actions of redux, but do it only for development enviroment
const enhancer = composeWithDevTools(
  applyMiddleware(
    loggerMiddleware,
  ),
);


export default function configureStore(initialState = {}) {
  return createStore(
    rootReducer(),
    initialState,
    enhancer
  );
}