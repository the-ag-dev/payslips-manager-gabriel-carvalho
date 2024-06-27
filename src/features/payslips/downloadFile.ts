import { Filesystem } from "@capacitor/filesystem";
import type { Payslip } from "./PayslipsSlice";

async function downloadFile(url: string, fileData: Payslip) {
  try {
    const contents = await Filesystem.downloadFile({
      url,
      path: `file:///payslip-${Date.now()}.png`,
      recursive: true,
    });
    console.log("data:", contents);
  } catch (error) {
    console.error("Error downloading or saving file:", error);
  }
}
