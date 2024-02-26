import { useState } from "react";
import "../style.css";

// Thay vì onSubmit (1 function) sẽ là đối số được parent truyền vào cho CHILD - thì onSubmit sẽ truyền giá trị từ CHILD -> parent chứa nó

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");
  const handleChange = (event) => {
    // console.log(event.target.value);
    setTerm(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("Bạn đã nhập thông tin tìm kiếm");
    handleChange(event);
    onSubmit(term);
  };
  return (
    <div className="element-search">
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => {
            setTerm(e.target.value);
          }}
          type="text"
          value={term}
          //   value này fai là giá trị thuộc onChange (dynamic)
          placeholder="Nhập từ khóa tìm kiếm tại đây..."
        />
        <button type="submit">Tìm kiếm</button>
      </form>
    </div>
  );
}
export default SearchBar;
