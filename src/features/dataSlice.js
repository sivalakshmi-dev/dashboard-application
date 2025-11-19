import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


export const fetchUsers = createAsyncThunk('data/fetchUsers', async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    if (!res.ok) throw new Error('Failed to fetch')
    return res.json()
})


const dataSlice = createSlice({
    name: 'data',
    initialState: {
        users: [],
        loading: false,
        error: null,
        search: '',
        page: 1,
        perPage: 5,
    },
    reducers: {
        setSearch(state, action) { state.search = action.payload; state.page = 1 },
        setPage(state, action) { state.page = action.payload },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => { state.loading = true; state.error = null })
            .addCase(fetchUsers.fulfilled, (state, action) => { state.loading = false; state.users = action.payload })
            .addCase(fetchUsers.rejected, (state, action) => { state.loading = false; state.error = action.error.message })
    }
})


export const { setSearch, setPage } = dataSlice.actions
export default dataSlice.reducer


















































