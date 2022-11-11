import { createSlice } from '@reduxjs/toolkit'

import { getStoreLocal } from '@/utils/local-storage'

import { IInitialState } from '@/store/user/user.interface'

const initialState: IInitialState = {
	isLoading: false,
	user: getStoreLocal('user')
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: (builder) => {

	}
})

export const { reducer } = userSlice
