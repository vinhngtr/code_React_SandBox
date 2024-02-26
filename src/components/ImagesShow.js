export default function ImageShow({ url }) {
  return (
    <div className="itemImg">
      <a href={url}><img src={url} alt="resultIMG" /></a>
    </div>
  );
}
