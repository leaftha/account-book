import { useState } from 'react';
import DetailPlan from './detailPlan';

const SetPlan = ({ salary }) => {
    const [plans, setPlans] = useState([]);

    const Submit = (e) => {
        e.preventDefault();
        let name = e.target.name.value;
        let account = salary * (e.target.parsent.value / 100);
        let addPlan = {
            name: name,
            num: account,
        };
        setPlans([...plans, addPlan]);
    };

    return (
        <div>
            <form onSubmit={Submit}>
                <label>용도</label>
                <input name="name" type="text" />
                <label>비율</label>
                <input name="parsent" type="number" min={0} max={100} />
                <button>추가</button>
            </form>
            {plans.map((plan, idx) => {
                return <DetailPlan key={idx} salary={salary} name={plan.name} num={plan.num} />;
            })}
        </div>
    );
};

export default SetPlan;
