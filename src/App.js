import { useState } from "react";
import BookCreated from "./Components/BookCreate";
import BookList from "./Components/BookList";
import "./Components/style.css";

function App() {
  const [books, setBook] = useState([]);
  // ! xóa phần tử có id được click:
  const deleteElementByID = (id) => {
    const updateBook = books.filter((item, idx) => {
      return item.idBook !== id;
    });
    setBook(updateBook);
  };
  const editBookByID = (id, title, url) => {
    const updateBook = books.map((curr) => {
      if (curr.idBook === id) {
        return {...curr, titleBook: title, urlBook: url}
      } else {
        return curr
      }
    })
    setBook(updateBook)
  }
  const handleCreate = (obj) => {
    setBook([...books, obj]); //thêm phần tử mới vào cuối mảng

    // ! Cách thêm phần tử mới vào vị trí index (giữa mảng tùy ý) == SPREAD OPERATOR
    // [...books.slice(0,index), obj, ...books.slice(index)]
    // ! Xóa phần tử bởi click user trên array: nên gán giá trị sau khi FILTER vào 1 biến mới trước khi "setState"
    // const handleDelete = (event) =>{setState(books.filter(curr)=>{return curr !== event})}
    // ! cập nhật modifier cho phần tử tại vị trí CLICK or nhập vào từ user: == MAP
    /**
     * const handleUpdate = (event, newData)=>{
     *    const updateArr = array.map((books)=>{
     *      if(books.id == event.target.id){
     *  !--> tạo ra 1 obj mới, và ghi đè giá trị mới lên key cần thay đổi  *
     *          return{...book, titleData: newData }
     *      }else{
     *          return books
     *      }
     * })
     *    setState(updateArr)
     * }
     */
  };
  return (
    <div className="App">
      <header className="App-header" style={{ width: "100%" }}>
        <h3 style={{ margin: "0px auto", fontSize: "30px" }}>
          {" "}
          Add - Edit - Update and Delete with React js
        </h3>
      </header>
      <BookList listBook={books} onDelete = {deleteElementByID} onEdit={editBookByID} />
      <BookCreated submitBook={handleCreate} />
    </div>
  );
}
export default App;
