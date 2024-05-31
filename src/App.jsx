import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import "./styles.css";

export default function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="Util's About" />
      <div className="container">
        <TextForm title="My Box" />
      </div>
    </>
  );
}
