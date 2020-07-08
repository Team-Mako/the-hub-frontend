import { createStore } from 'redux';
import { persistStore } from 'redux-persist';
import rootReducer from './reducers/rootReducer';
import persistReducers from './reducers/persistReducers';

const enhancer = process.env.NODE_ENV === 'development' ? console.tron.createEnhancer() : null;

const store = createStore(persistReducers(rootReducer), enhancer);
const persistor = persistStore(store);

export { store, persistor };
