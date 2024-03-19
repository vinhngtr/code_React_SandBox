import BookShow from "./BookShow";
import "./style.css";
function BookList({ listBook, onDelete, onEdit }) {
  const renderBook = listBook.map((curr, idx) => {
    return <BookShow key={curr.idBook} book={curr} onDelete={onDelete} onEdit={onEdit} />;
  });

  return <div className="listBook">{renderBook}</div>;
}
export default BookList;
