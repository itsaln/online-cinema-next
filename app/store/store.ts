import { configureStore } from '@reduxjs/toolkit'

import { reducers } from '@/store/rootReducer'

export const store = configureStore({
	reducer: reducers,
	devTools: true
})
