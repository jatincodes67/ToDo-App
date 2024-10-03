import { MdDelete } from "react-icons/md";
function Item({ DoName, dueDate, onDeleteClick }) {
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{DoName}</div>
        <div className="col-4">{dueDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={() => onDeleteClick(DoName, dueDate)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Item;
