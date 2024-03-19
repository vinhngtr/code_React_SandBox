import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./style.css";

const BookCreated = ({ submitBook }) => {
  const [title, setTitle] = useState("");
  const [id, setID] = useState(0);
  const [url, setURL] = useState("");
  // const []
  const handleTitle = (event) => {
    setTitle(event.target.value);
  };
  const handleURL = (event) => {
    setURL(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault(event);
    setID(uuidv4().substring(0, 4));
    const newBook = { idBook: id, titleBook: title, urlBook: url };
    submitBook(newBook);
    setTitle("");
    setURL("");
  };
  return (
    <div className="book-create">
      <h2 style={{ fontSize: "25px", fontWeight: "700" }}>Add a book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Tiêu đề của sách là: </label>
          <input
            // className="input"
            onChange={handleTitle}
            value={title}
            type="text"
          />
        </div>

        <label>Địa chỉ ảnh đại diện của sách là: </label>
        <input type="text" value={url} onChange={handleURL} />

        <button
          className="btn"
          style={{ fontWeight: "600", textTransform: "uppercase" }}
        >
          Thêm mới
        </button>
      </form>
    </div>
  );
};
export default BookCreated;
