import flowy from "./engine/flowy";
import $ from "jquery";
import "./engine/flowy.css";

function App() {
  const grab = () => {
    alert("grab");
  };
  const release = () => {
    alert("release");
  };
  const snapping = () => {
    alert("snap");
  };
  const spacing_x = 60;
  const spacing_y = 60;
  console.log(spacing_y);
  flowy($("#canvas"), grab, release, snapping, spacing_x, spacing_y);
  return (
    <div className="App">
      <div className="create-flowy">The block to be dragged</div>
      <div id="canvas"></div>
    </div>
  );
}

export default App;
