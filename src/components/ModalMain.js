import ModalBody from "./ModalBody";
import ModalFooter from "./ModalFooter";
import ModalHeader from "./ModalHeader";

const ModalMain = (props) => {
  const { setPopUp, duringPopUp, dataHeader, dataBody, dataFooter } = props;

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
