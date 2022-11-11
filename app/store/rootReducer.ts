import { reducer as toastrReducer } from 'react-redux-toastr'
import { reducer as userReducer } from '@/store/user/user.slice'

export const reducers = {
	toastr: toastrReducer,
	user: userReducer
}
