import './style.css'
import { useState } from 'react';
function FormEdit({book, onEdit, isCloseForm}) {
  const [title, setTitle] = useState(book.titleBook)
  const [url, setURL] = useState(book.urlBook)
  const updateTitle = (event) => {
    setTitle(event.target.value)
  }
  const updateURL = (event) => {
    setURL(event.target.value)
  }
  const handleUpdate = (event) => {
    event.preventDefault()
    // console.log("Gía trị title - url mới là: ", title, " ", url)
    onEdit(book.idBook, title, url)
    isCloseForm(false)
  }
  return (
    <>
      <form className='form-edit' onSubmit={handleUpdate} >
        <h2 className="title-form">Chỉnh sửa title và URL Element</h2>
        <div>
          <label htmlFor="ip-title">Nhập vào tiêu đề mới</label>
          <input className="input-user" id="ip-title" type="text" onChange={updateTitle} value={title} />
        </div>
        <div>
          <label htmlFor="ip-url">Nhập vào URL background mới</label>
          <input className="input-user" id="ip-url" type="text" onChange={updateURL} value={url} />
        </div>
        <button
          style={{
            margin: "10px 80px",
            marginBottom: "5px",
            padding: "4px 2px",
          }}
          // onClick={handleUpdate}
        >
          Cập nhật
        </button>
      </form>
    </>
  );
}
export default FormEdit;
