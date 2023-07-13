import { useState } from 'react';
import DetailPlan from './detailPlan';
import classes from './setplan.module.css';

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
        <div className={classes.main}>
            <form className={classes.planform} onSubmit={Submit}>
                <div className={classes.planInputs}>
                    <label className={classes.planLabel}>제목</label>
                    <input className={classes.input} name="name" type="text" />
                </div>
                <div className={classes.planInputs}>
                    <label className={classes.planLabel}>비율(%)</label>
                    <input className={classes.input} name="parsent" type="number" min={0} max={100} />
                </div>
                <div className={classes.planBtn}>
                    <button className={classes.btn}>추가</button>
                </div>
            </form>
            <div className={classes.palnlist}>
                {plans.map((plan, idx) => {
                    return <DetailPlan key={idx} salary={salary} name={plan.name} num={plan.num} />;
                })}
            </div>
        </div>
    );
};

export default SetPlan;
