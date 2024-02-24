// import im1 from "../images/pexels-photo-6943667.jpeg";
export default function ProfileCard(props) {
  //  Sử dụng destructing để tạo nhiều đối số bên dưới với biến global props:
  const { src, title, handle } = props;
  return (
    <div className="itemCard">
      <div className="imgCard">
        <img className="imgMain" src={src} alt="" />
      </div>
      <h2>{title}</h2>
      <h3> {handle} </h3>
    </div>
  );
}
