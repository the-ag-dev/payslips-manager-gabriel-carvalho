import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  fetchPayslipsThunk,
  selectPayslipsList,
  selectStatus,
} from "./PayslipsSlice";

import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonList,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonGrid,
  IonRow,
  IonIcon,
  IonListHeader,
  IonSkeletonText,
  IonThumbnail,
} from "@ionic/react";

const PayslipsList: React.FC = () => {
  const dispatch = useAppDispatch();
  const payslipsListData = useAppSelector(selectPayslipsList);
  const status = useAppSelector(selectStatus);

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
  } else if (status === "succeeded") {
    content = (
      <IonGrid>
        <IonRow>
          {payslipsListData.map((item) => (
            <IonCol
              class="payslip-list-item"
              key={item.id}
              size="12"
              size-sm="4"
            >
              <IonCard
                // style={{ maxHeight: "305px", overflow: "hidden" }}
                routerLink={`/payslip/${item.id}`}
                routerDirection="none"
              >
                <img alt="payslip image" src={item.file} />
                <IonCardHeader>
                  <IonCardTitle>
                    {item.currency}
                    {"  "}
                    {item.amount}
                  </IonCardTitle>
                  <IonCardSubtitle>
                    {item.fromDate} - {item.toDate}
                  </IonCardSubtitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
          ))}
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
