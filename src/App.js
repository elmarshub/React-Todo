import "./index.css";
import TodoWrapper from "./components/TodoWrapper";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

function App() {
  return (
    <div className="App">
      <TodoWrapper />
    </div>
  );
}

export default App;
