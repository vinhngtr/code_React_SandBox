import { useState } from "react";
import SearchBar from "./components/SearchBar";
import searchImage from "./api";
import ListImages from "./components/ListImages";

function App() {
  const [listImg, setListImg] = useState([]);
  const handleSubmit = async (event) => {
      const result = await searchImage(event);
      setListImg(result);
    };
    console.log(listImg);
  return (
    <div className="content">
          <SearchBar onSubmit={handleSubmit} />
          <h3 className="title">Kết quả tìm kiếm: </h3>
          <ListImages listIMG={listImg} />
    </div>
  );
}
export default App;
