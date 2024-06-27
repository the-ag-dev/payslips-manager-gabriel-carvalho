import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useParams } from "react-router";

import PayslipViewer from "../features/payslips/PayslipViewer";

const PayslipDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Payslip: {id}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">My Payslip: {id}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <PayslipViewer payslipId={id} />
      </IonContent>
    </IonPage>
  );
};

export default PayslipDetails;
