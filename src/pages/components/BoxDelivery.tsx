import { faBarsProgress, faTasks, faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./BoxDelivery.scss";

export default function BoxDelivery() {
  return (
    <div className="box-delivery">
      <div className="free-delivery">
        <FontAwesomeIcon icon={faTruck} className="icon" />
        <div className="info">
          <div className="title">Spedizione Gratuita</div>
          <div className="subtitle">
            Inserisci il codice postale per verificare la disponibilià della
            spedizione
          </div>
        </div>
      </div>
      <div className="return-delivery">
        <FontAwesomeIcon icon={faBarsProgress} className="icon" />
        <div className="info">
          <div className="title">Reso Gratuito</div>
          <div className="subtitle">30 gioni di prova gratuita.</div>
        </div>
      </div>
    </div>
  );
}
