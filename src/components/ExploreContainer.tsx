import { IonButton, IonItem, IonLabel } from "@ionic/react";
import "./ExploreContainer.css";

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div id="container">
      <strong>{name}</strong>
      <p>We're under construction. Please check back for an update soon.</p>
      <IonButton fill="clear" routerLink="/">
        Back to Homepage
      </IonButton>
    </div>
  );
};

export default ExploreContainer;
