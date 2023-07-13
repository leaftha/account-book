import { useState } from 'react';

const SetPlan = ({ salary }) => {
    const [plan, setPlan] = useState([]);

    const Submit = (e) => {
        e.preventDefault();
        let name = e.target.name.value;
        let account = (salary * e.target.parsent.value) / 100;
        let addPlan = {
            name: name,
            num: account,
        };
        setPlan([...plan, addPlan]);
    };

    return (
        <form onSubmit={Submit}>
            <label>용도</label>
            <input name="name" type="text" />
            <label>비율</label>
            <input name="parsent" type="number" min={0} max={100} />
            <button>추가</button>
        </form>
    );
};

export default SetPlan;
