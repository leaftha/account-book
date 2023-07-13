import { useState } from 'react';
import AddSalary from './Addsalary';
import './App.css';
import SetPlan from './setplan';

function App() {
    const [addSalary, setAddSalary] = useState(0);
    return (
        <div className="App">
            <h1>가계부</h1>
            <AddSalary upSalary={setAddSalary} />
            <SetPlan salary={addSalary} />
        </div>
    );
}

export default App;
