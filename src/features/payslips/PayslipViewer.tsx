import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  fetchPayslipsThunk,
  selectStatus,
  selectPayslipsById,
  selectPayslipDownloadStatus,
  downloadPayslipThunk,
} from "./PayslipsSlice";

import {
  IonButton,
  IonCol,
  IonGrid,
  IonRow,
  IonSkeletonText,
  IonToast,
  IonItem,
  IonLabel,
  IonList,
} from "@ionic/react";

const PayslipsList: React.FC<{ payslipId: string }> = ({ payslipId }) => {
  const dispatch = useAppDispatch();
  const payslipData = useAppSelector((state) =>
    selectPayslipsById(state, payslipId)
  );
  const status = useAppSelector(selectStatus);
  const payslipDownloadStatus = useAppSelector(selectPayslipDownloadStatus);

  useEffect(() => {
    if (status === "initial") {
      dispatch(fetchPayslipsThunk());
    }
  }, [status, dispatch]);

  let content;

  if (status === "loading") {
    content = (
      <IonSkeletonText
        animated={true}
        style={{ width: "100%", height: "80svh" }}
      ></IonSkeletonText>
    );
  } else if (status === "succeeded" && payslipData) {
    content = (
      <IonGrid key={payslipData.id}>
        <IonRow>
          <IonCol size="12" size-sm="12">
            <IonList className="payslip-details">
              <IonItem className="payslip-id">
                <IonLabel> Id: {payslipData.id}</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>Amount: {payslipData.amount}</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>Currency: {payslipData.currency}</IonLabel>
              </IonItem>

              <IonItem className="payslip-period">
                <IonLabel>
                  Period : {payslipData.fromDate} - {payslipData.toDate}
                </IonLabel>
              </IonItem>
            </IonList>

            <IonButton
              className="download-button"
              expand="block"
              fill="solid"
              onClick={() => dispatch(downloadPayslipThunk(payslipData))}
              id="open-toast"
            >
              Download
            </IonButton>
          </IonCol>
          <IonCol size="12" size-sm="12">
            <IonToast
              className="download-toast"
              trigger="open-toast"
              message={payslipDownloadStatus}
              duration={5000}
            ></IonToast>
            <div style={{ padding: "10px" }}>
              <img
                style={{ borderRadius: "10px", maxWidth: "100%" }}
                width="100%"
                height="auto"
                alt="payslip image"
                src={payslipData.file}
              />
            </div>
          </IonCol>
        </IonRow>
      </IonGrid>
    );
  } else if (status === "failed") {
    content = (
      <div>
        <p>
          There was an error fetching the data.{" "}
          <button onClick={() => dispatch(fetchPayslipsThunk())}>
            Try again
          </button>
        </p>
        <p>Contact support if the problem persists.</p>
      </div>
    );
  }

  return <div>{content}</div>;
};

export default PayslipsList;
