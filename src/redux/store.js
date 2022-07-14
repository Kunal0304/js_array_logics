import {createStore} from 'redux'
import { incReducer } from './reducer';

export const store = createStore(incReducer);