import "../node_modules/bulma/css/bulma.css";
import ListProfile from "./components/ProfileCard/listProfile";
import ButtonChange from './components/ChangeState/item';
import { ListUser } from "./components/ChangeState/item";
export default function App() {
  return (
    <div>
      {/* header */}
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal of AI Sistant</p>
        </div>
      </section>
      {/* body */}
      <div className="body">
        <ListProfile></ListProfile>
        <ButtonChange />
        <ListUser/>
      </div>
    </div>
  );
}
