// 제목 월급 일력
// 밑에 비율 추가
// 비율칸에 지출 이름과 금액 각각 비율된 금액에서 빼기

import { useState } from 'react';
import AddSalary from './Addsalary';
import './App.css';

function App() {
    const [addSalary, setAddSalary] = useState();
    return (
        <div className="App">
            <h1>가계부</h1>
            <AddSalary upSalary={setAddSalary} />
        </div>
    );
}

export default App;
