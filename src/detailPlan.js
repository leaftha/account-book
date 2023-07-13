import { useState } from 'react';
import claases from './detailPlan.module.css';

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
        <div className={claases.main}>
            <h1 className={claases.title}>{name}</h1>
            <h2 className={claases.parsent}>{(num / salary) * 100}%</h2>
            <span className={claases.span}>총값 : {num}</span>
            <span className={claases.span}>계산 값 : {detailNum}</span>
            <form className={claases.detailform} onSubmit={submit}>
                <div className={claases.detailinput}>
                    <input className={claases.input} name="name" type="text" placeholder="제목" />
                    <input className={claases.input} name="num" type="number" min={0} placeholder="가격" />
                </div>
                <button className={claases.btn}>추가</button>
            </form>
            <ul className={claases.detailUi}>
                {detailPlan.map((plan, idx) => {
                    return <li className={claases.detailLi} key={idx}>{`${plan.name} - ${plan.num}`}</li>;
                })}
            </ul>
        </div>
    );
};

export default DetailPlan;
