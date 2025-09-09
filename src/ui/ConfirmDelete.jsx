function ConfirmDelete({ resourceName, onClose, OnConfirm, disabled }) {
  return (
    <div>
      <h2 className="font-bold text-base mb-8 text-left">
        Are you sure to Delete "{resourceName}"
      </h2>
      <div className="flex justify-between items-center gap-x-16">
        <button
          disabled={disabled}
          onClick={OnConfirm}
          className="btn btn--danger flex-1 py-3"
        >
          Confirm
        </button>
        <button
          disabled={disabled}
          onClick={onClose}
          className="btn btn--primary flex-1"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
