/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "../Database";
import { v4 as uuidv4 } from "uuid";
const initialState = {
  enrollments: enrollments,
};
const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    enroll: (state, { payload: enrollment }) => {
      const newEnrollment: any = {
        _id: uuidv4(),
        course: enrollment.course._id,
        user: enrollment.user._id,
      };
      state.enrollments = [...state.enrollments, newEnrollment] as any;
    },
    unenroll: (state, { payload: enrollment }) => {
      state.enrollments = state.enrollments.filter(
        (m: any) => m.user !== enrollment.user._id || m.course !== enrollment.course._id
      ) as any;
    },
  },
});
export const { enroll, unenroll } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;
