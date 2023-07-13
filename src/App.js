// 제목 월급 일력
// 밑에 비율 추가
// 비율칸에 지출 이름과 금액 각각 비율된 금액에서 빼기

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
