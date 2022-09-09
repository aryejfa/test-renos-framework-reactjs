const ModalFooter = (props) => {
  const { dataFooter } = props;

  return (
    <>
      <div className="modal-footer">
        <div
          dangerouslySetInnerHTML={{
            __html: dataFooter,
          }}
        ></div>
      </div>
    </>
  );
};

export default ModalFooter;
