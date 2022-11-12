import './App.css';
import Dropdown from './components/Dropdown';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Dropdown items={["Oliver Hansen", "Van Henry", "April Tucker", "Ralph Hubbard"]} title="Tag" multi={true}/>

        <Dropdown items={["Twenty", "Twenty one", "Twenty one and a half"]} title="Age" multi={false}/>
      </header>
    </div>
  );
}

export default App;
