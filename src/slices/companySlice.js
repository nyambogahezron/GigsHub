import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  companyInfo: localStorage.getItem('companyInfo')
    ? JSON.parse(localStorage.getItem('companyInfo'))
    : null,
};

const companySlice = createSlice({
  name: 'company',
  initialState,
  reducers: {
    setCompanyInfo: (state, action) => {
      state.companyInfo = action.payload;
      localStorage.setItem('companyInfo', JSON.stringify(action.payload));
    },
    logout: (state, action) => {
      state.companyInfo = null;
      localStorage.removeItem('companyInfo');
    },
  },
});

export const { setCompanyInfo, logout } = companySlice.actions;

export default companySlice.reducer;
