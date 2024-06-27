import type { Payslip } from "./PayslipsSlice";
import { mockData } from "./mockData";
import { Filesystem } from "@capacitor/filesystem";

export const fetchPayslips = () => {
  return new Promise<{ data: Payslip[] }>((resolve) =>
    setTimeout(() => resolve({ data: mockData }), 500)
  );
};

export async function downloadFile(fileData: Payslip) {
  try {
    const contents = await Filesystem.downloadFile({
      url: fileData.file,
      path: `file:///payslip-${Date.now()}.png`,
      recursive: true,
    });
    console.log("data:", contents);
  } catch (error) {
    console.error("Error downloading or saving file:", error);
  }
}
