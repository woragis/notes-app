import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MessagesState {
  message: string;
  level: "message" | "warning" | "error";
}

const messagesSlice = createSlice({
  name: "warnings",
  initialState: {} as MessagesState,
  reducers: {
    setWarning: (state, action: PayloadAction<MessagesState>) => {
      state.message = action.payload.message;
      state.level = action.payload.level;
    },
  },
});

export const { setWarning } = messagesSlice.actions;
export default messagesSlice.reducer;
