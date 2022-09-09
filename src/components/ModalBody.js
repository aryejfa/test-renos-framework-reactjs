const ModalBody = (props) => {
  const { dataBody } = props;
  return (
    <>
      <div className="modal-body">
        <div
          dangerouslySetInnerHTML={{
            __html: dataBody,
          }}
        ></div>
      </div>
    </>
  );
};

export default ModalBody;
