import { createStore } from 'redux';
import { rootReducer } from './rootReducer';



// Redux requires a store to be created - this is an empty container 
// We pass the rootReducer - this is becuase in another file I have made two seperate states one for country one for region 
// I have combined them using combineReducer this is provided by react Redux 
const store = createStore(rootReducer);
export { store }
