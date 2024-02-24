import ProfileCard from "./profileCard";
import { dataProfile } from "./dataCard";

export default function ListProfile() {
  return (
    <div className="container">
      {/* ! viết JS trong react -> đặt trong cặp: {...} */}
      {dataProfile.map((item) => (
        <ProfileCard
          key={item.id}
          src={item.src}
          title={item.title}
          handle={item.handle}
        ></ProfileCard>
      ))}
    </div>
  );
}
