import { useState } from 'react';
import DetailPlan from './detailPlan';
import classes from './setplan.module.css';
import uniqid from 'uniqid';

const SetPlan = ({ salary }) => {
    const [plans, setPlans] = useState([]);
    const [title, setTitle] = useState('');
    const [persent, setPersent] = useState(0);

    const Submit = (e) => {
        e.preventDefault();
        let account = salary * (persent / 100);
        let addPlan = {
            id: uniqid(),
            name: title,
            num: account,
        };
        setPlans([...plans, addPlan]);
        setTitle('');
        setPersent(0);
    };

    const remove = (id) => {
        setPlans((prev) => {
            const updataData = prev.filter((text) => text.id !== id);
            return updataData;
        });
    };

    return (
        <div className={classes.main}>
            <form className={classes.planform} onSubmit={Submit}>
                <div className={classes.planInputs}>
                    <label className={classes.planLabel}>제목</label>
                    <input
                        className={classes.input}
                        onChange={(e) => {
                            setTitle(e.target.value);
                        }}
                        value={title}
                        name="name"
                        type="text"
                    />
                </div>
                <div className={classes.planInputs}>
                    <label className={classes.planLabel}>비율(%)</label>
                    <input
                        className={classes.input}
                        onChange={(e) => {
                            setPersent(e.target.value);
                        }}
                        value={persent}
                        name="parsent"
                        type="number"
                        min={0}
                        max={100}
                    />
                </div>
                <div className={classes.planBtn}>
                    <button className={classes.btn}>추가</button>
                </div>
            </form>
            <div className={classes.palnlist}>
                {plans.map((plan, idx) => {
                    return (
                        <DetailPlan
                            key={idx}
                            id={plan.id}
                            remove={remove}
                            salary={salary}
                            name={plan.name}
                            num={plan.num}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default SetPlan;
