import "./App.css";
import OptimizedMovieApp from "./movies/optimized";
import UnoptimizedMovieApp from "./movies/unoptimize";

function App() {
  return (
    <div>
      <div>
        <UnoptimizedMovieApp />
      </div>
      <div>
        <OptimizedMovieApp />
      </div>
    </div>
  );
}

export default App;
