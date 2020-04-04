import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/rootReducer';
import initialState from './reducers/initialState';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga';

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(sagaMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__({
          serialize: true,
        })
    )
  );
  sagaMiddleware.run(rootSaga);

  return store;
}
