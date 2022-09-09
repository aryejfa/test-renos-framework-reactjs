import { useEffect } from "react";
import ModalBody from "./ModalBody";
import ModalFooter from "./ModalFooter";
import ModalHeader from "./ModalHeader";

const ModalMain = (props) => {
  const { setPopUp, duringPopUp, dataHeader, dataBody, dataFooter } = props;

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        setPopUp(false);
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <>
      <div className="modal-block">
        <div className={duringPopUp} onClick={() => setPopUp(false)}></div>
        <div className="modal-content">
          <ModalHeader setPopUp={setPopUp} dataHeader={dataHeader} />
          <ModalBody dataBody={dataBody} />
          <ModalFooter dataFooter={dataFooter} />
        </div>
      </div>
    </>
  );
};

export default ModalMain;
