import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Reactotron from 'reactotron-react-js';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
  courses: [],
  page: 0,
  searchQuery: '',
  selectedCourse: '',
  selectedDepartments: [],
  selectedCredits: [],
  selectedGenEds: []
}

export default function configureStore() {
  return Reactotron.createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  );
}

