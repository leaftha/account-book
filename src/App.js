import { useState } from 'react';
import AddSalary from './Addsalary';
import classes from './App.module.css';
import SetPlan from './setplan';

function App() {
    const [addSalary, setAddSalary] = useState(0);
    return (
        <div className={classes.App}>
            <h1 className={classes.title}>한달 가계부</h1>
            <AddSalary upSalary={setAddSalary} />
            <SetPlan salary={addSalary} />
        </div>
    );
}

export default App;
