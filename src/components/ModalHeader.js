const ModalHeader = (props) => {
  const { setPopUp, dataHeader } = props;
  return (
    <>
      <div className="modal-header">
        <span className="close" onClick={() => setPopUp(false)}>
          &times;
        </span>
        <div
          dangerouslySetInnerHTML={{
            __html: dataHeader,
          }}
        ></div>
      </div>
    </>
  );
};

export default ModalHeader;
