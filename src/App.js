import Main from "./Components/Main";
import Navbar from "./Components/Navbar";
import { RoomProvider } from "./Context/RoomContext";
import "./index.css";
function App() {
  return (
    <div className="App">
      <RoomProvider>
        <Navbar />
        <Main />
      </RoomProvider>
    </div>
  );
}

export default App;
