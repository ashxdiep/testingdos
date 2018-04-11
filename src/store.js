//store ties things together into something we'll able to use as the central point of application
//it holds current state, and over time receive actions that evolve state from one version to next
import { createStore } from 'redux';
import reducer from './reducer';


export default function makeStore(){
  return createStore(reducer);
}
