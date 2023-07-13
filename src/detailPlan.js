import { useState } from 'react';

const DetailPlan = ({ salary, name, num }) => {
    const [detailNum, setDetailNum] = useState(num);
    const [detailPlan, setDetailPlan] = useState([]);

    const submit = (e) => {
        e.preventDefault();
        let name = e.target.name.value;
        let account = e.target.num.value;
        setDetailPlan([...detailPlan, { name: name, num: account }]);
        setDetailNum(detailNum - account);
    };
    return (
        <div>
            <h1>{name}</h1>
            <h2>{(num / salary) * 100}%</h2>
            <span>값 - {num}</span>
            <span>계산 값 - {detailNum}</span>
            <form onSubmit={submit}>
                <input name="name" type="text" />
                <input name="num" type="number" />
                <button>추가</button>
            </form>
            <ul>
                {detailPlan.map((plan, idx) => {
                    return <li key={idx}>{`${plan.name} - ${plan.num}`}</li>;
                })}
            </ul>
        </div>
    );
};

export default DetailPlan;
