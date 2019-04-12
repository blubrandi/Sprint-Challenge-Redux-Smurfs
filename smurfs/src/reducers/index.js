/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  FETCHING_SMURFS_START,
  FETCHING_SMURFS_SUCCESS,
  FETCHING_SMURFS_FAILURE,
  ADD_SMURF_START,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAILURE
} from '../actions'


const initialState = 
 {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 }
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS_START:
    return {
      ...state,
      error: '',
      fetchingSmurfs: true
    }
    case FETCHING_SMURFS_SUCCESS:
      return {
        ...state,
        error: '',
        fetchingSmurfs: false,
        smurfs: [...state.smurfs, ...action.payload]
      }
      case FETCHING_SMURFS_FAILURE:
        return {
          ...state,
          error: action.payload,
          fetchingSmurfs: false
        }
      case ADD_SMURF_START:
        return {
          ...state,
          addSmurf: true,
          error:''
        }
      case ADD_SMURF_SUCCESS:
        return {
          ...state,
          addSmurf: false,
          error:''
        }
        case ADD_SMURF_FAILURE:
        return {
          ...state,
          addSmurf: false,
          error:''
        }
        default:
      return state
  }
}

export default rootReducer

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
