import "./style.css";
import { useState } from "react";
import FormEdit from "./BookEdit";

function BookShow({ book, onDelete, onEdit }) {
  const [editShow, setEditShow] = useState(false);
  const handleDelete = () => {
    onDelete(book.idBook);
  };
  const setFormEdit = (bool) => {
    setEditShow(bool)
  }
  const handleEdit = () => {
    setEditShow(!editShow);
  };
  let content = <p>{book.titleBook}</p>;
  if (editShow) {
    content = <FormEdit book={book} onEdit={onEdit} isCloseForm={setFormEdit}  />;
  } else {
    content = <p>{book.titleBook}</p>;
  }
  return (
    <div className="itemBook">
      <div className="listButton">
        <button title="Chỉnh sửa đối tượng" onClick={handleEdit}>
          <i class="fa-solid fa-pen-to-square"></i>
        </button>
        <button title="Xóa đi phần tử" onClick={handleDelete}>
          <i class="fa-solid fa-delete-left"></i>
        </button>
      </div>
      <div className="imgBook">
        <img src={book.urlBook} alt="img-book" />
      </div>
      {/* ĐK Ko hiển thị bảng cập nhật nội dung cho title & URL */}
      {content}
    </div>
  );
}
export default BookShow;
