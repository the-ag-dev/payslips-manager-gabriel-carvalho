import type { PayloadAction } from "@reduxjs/toolkit";
import { createAppSlice } from "../../app/createAppSlice";
import type { AppThunk } from "../../app/store";
import { fetchPayslips, downloadFile } from "./payslipAPI";

export interface Payslip {
  id: string;
  fromDate: string;
  toDate: string;
  file: string;
  amount: number;
  currency: string;
}

export interface PayslipsSliceState {
  value: Payslip[];
  status: "initial" | "loading" | "failed" | "succeeded";
  payslipDownloadStatus:
    | "idle"
    | "loading"
    | "Downlaod failed."
    | "File downloaded successfully!";
}

const initialState: PayslipsSliceState = {
  value: [],
  status: "initial",
  payslipDownloadStatus: "idle",
};

export const payslipsSlice = createAppSlice({
  name: "payslips",
  initialState,
  reducers: (create) => ({
    downloadPayslipThunk: create.asyncThunk(
      async (fileData: Payslip) => {
        await downloadFile(fileData);
        return;
      },
      {
        pending: (state) => {
          state.payslipDownloadStatus = "loading";
        },
        fulfilled: (state, action) => {
          state.payslipDownloadStatus = "File downloaded successfully!";
        },
        rejected: (state) => {
          state.payslipDownloadStatus = "Downlaod failed.";
        },
      }
    ),

    fetchPayslipsThunk: create.asyncThunk(
      async () => {
        const response = await fetchPayslips();
        return response.data;
      },
      {
        pending: (state) => {
          state.status = "loading";
        },
        fulfilled: (state, action) => {
          state.status = "succeeded";
          state.value = action.payload;
        },
        rejected: (state) => {
          state.status = "failed";
        },
      }
    ),
  }),
  selectors: {
    selectPayslipsList: (payslips) => payslips.value,
    selectPayslipsById: (payslips, id: string) => {
      return payslips.value.find((payslip) => payslip.id === id);
    },
    selectStatus: (payslips) => payslips.status,
    selectPayslipDownloadStatus: (payslips) => payslips.payslipDownloadStatus,
  },
});

export const { fetchPayslipsThunk, downloadPayslipThunk } =
  payslipsSlice.actions;

export const {
  selectPayslipsList,
  selectPayslipsById,
  selectStatus,
  selectPayslipDownloadStatus,
} = payslipsSlice.selectors;
