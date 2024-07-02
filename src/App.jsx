import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Challenge 1 - Easy" targetTime={1} />
        <TimerChallenge title="Challenge 1 - Not that easy" targetTime={5} />
        <TimerChallenge title="Challenge 1 - Medium" targetTime={10} />
        <TimerChallenge title="Challenge 1 - Hard" targetTime={15} />
      </div>
    </>
  );
}

export default App;
