import { createSlice } from '@reduxjs/toolkit';

type initialStateProps = {
  user: object;
};

const initialState: initialStateProps = {
  user: {},
};

export const userSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    setProfile: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setProfile } = userSlice.actions;
export default userSlice.reducer;
