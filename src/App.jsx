import './App.css';
import {FlightsList} from './components/FlightsList/FlightsList';
import {Filters} from './components/Filters/Filters';

function App() {
    return (
        <div className="App">
            <main className="layout">
                <Filters />
                <FlightsList />
            </main>
        </div>
    );
}

export default App;
