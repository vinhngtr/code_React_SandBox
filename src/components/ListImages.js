import ImageShow from "./ImagesShow";

export default function ListImages({ listIMG }) {
  const renderImg = listIMG.map((img) => {
    return <ImageShow url={img.urls.small} key={img.id} />;
  });
  return <div className="listImg">{renderImg}</div>;
}
