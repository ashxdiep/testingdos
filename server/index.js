import makeStore from './src/store';
import startServer from './src/server';

export const store = makeStore();
startServer();

//loading off with the entries and dispatching next type
store.dispatch({
  type: 'SET_ENTRIES',
  entries: require ('./entries.json')
});
store.dispatch({type: 'NEXT'});
