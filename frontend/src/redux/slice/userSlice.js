import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  user: null,
  token: null,
  tripList: [],
  wishList: [],
  propertyList: [],
  reservationList: [],
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.user = action.payload.user
      state.token = action.payload.token
    },

    setLogout: (state) => {
      state.user = null
      state.token = null
      state.tripList = []
      state.wishList = []
      state.propertyList = []
      state.reservationList = []
    },

    setTripList: (state, action) => {
      state.tripList = action.payload
    },

    setWishList: (state, action) => {
      state.wishList = action.payload
    },

    setPropertyList: (state, action) => {
      state.propertyList = action.payload
    },

    setReservationList: (state, action) => {
      state.reservationList = action.payload
    },
  },
})

export const {
  setLogin,
  setTripList,
  setLogout,
  setWishList,
  setPropertyList,
  setReservationList,
} = userSlice.actions

export default userSlice.reducer
