import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ToastError.scss";

interface ToastErrorProps {
  text: string;
  onClose: ()=> void
}

export default function ToastError({ text, onClose }: ToastErrorProps) {
  return (
    <div className="toast-custom">
      <FontAwesomeIcon icon={faClose} className="close" onClick={onClose}/>
      {text}
    </div>
  );
}
