/**
 * Example Redux slice
 * This is a template for creating new slices
 */

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ExampleState {
  // Define state here
}

const initialState: ExampleState = {
  // Initial state
}

const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    // Add reducers here
  },
})

export const { } = exampleSlice.actions
export default exampleSlice.reducer
