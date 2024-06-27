import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from "@ionic/react";

import { useLocation } from "react-router-dom";
import {
  archiveOutline,
  archiveSharp,
  heartOutline,
  heartSharp,
  documentOutline,
  documentSharp,
  shareSocialOutline,
  shareSocialSharp,
} from "ionicons/icons";
import "./Menu.css";

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: "My Payslips",
    url: "/",
    iosIcon: documentOutline,
    mdIcon: documentSharp,
  },
  {
    title: "Favorites",
    url: "/to-be-implemented/Favorites",
    iosIcon: heartOutline,
    mdIcon: heartSharp,
  },
  {
    title: "Shared with me",
    url: "/to-be-implemented/Shared",
    iosIcon: shareSocialOutline,
    mdIcon: shareSocialSharp,
  },
  {
    title: "Archived",
    url: "/to-be-implemented/Archived",
    iosIcon: archiveOutline,
    mdIcon: archiveSharp,
  },
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList class="inbox-list">
          <IonListHeader style={{ marginTop: "8px" }}>Payslips</IonListHeader>
          <IonNote>by Gabriel Carvalho</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={
                    location.pathname === appPage.url ? "selected" : ""
                  }
                  routerLink={appPage.url}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  <IonIcon
                    aria-hidden="true"
                    slot="start"
                    ios={appPage.iosIcon}
                    md={appPage.mdIcon}
                  />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
        {location.pathname.includes("/payslip") && (
          <IonList id="labels-list">
            <IonListHeader>Viewing </IonListHeader>
            <IonNote>{location.pathname}</IonNote>
          </IonList>
        )}
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
