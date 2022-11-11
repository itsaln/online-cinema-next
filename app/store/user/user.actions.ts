import { createAsyncThunk } from '@reduxjs/toolkit'

import { IAuthResponse, IEmailPassword } from '@/store/user/user.interface'
import { AuthService } from '@/services/auth/auth.service'
import { toastr } from 'react-redux-toastr'
import { toastError } from '@/utils/toast-error'

export const register = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'auth/register',
	async ({ email, password }, thunkApi) => {
		try {
			const response = await AuthService.register(email, password)
			toastr.success('Registration', 'Completed successfully')
			return response.data
		} catch (e) {
			toastError(e)
			return thunkApi.rejectWithValue(e)
		}
	}
)
