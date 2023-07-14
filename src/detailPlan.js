import { useState } from 'react';
import uniqid from 'uniqid';

import claases from './detailPlan.module.css';

const DetailPlan = ({ salary, name, num, id, remove }) => {
    const [detailNum, setDetailNum] = useState(num);
    const [detailPlan, setDetailPlan] = useState([]);
    const [title, setTitle] = useState('');
    const [account, setAccount] = useState(0);

    const submit = (e) => {
        e.preventDefault();
        setDetailPlan([...detailPlan, { id: uniqid(), name: title, num: account }]);
        setDetailNum(detailNum - account);
        setAccount(0);
        setTitle('');
    };

    const removePlan = (id) => {
        setDetailPlan((prev) => {
            const updataNum = prev.filter((text) => text.id === id);
            const num = updataNum[0].num * 1;
            const updataData = prev.filter((text) => text.id !== id);
            setDetailNum(detailNum + num);
            return updataData;
        });
    };
    return (
        <div className={claases.main}>
            <button
                className={claases.remove}
                onClick={() => {
                    remove(id);
                }}
            >
                X
            </button>
            <h1 className={claases.title}>{name}</h1>
            <h2 className={claases.parsent}>{(num / salary) * 100}%</h2>
            <span className={claases.span}>총값 : {num}</span>
            <span className={claases.span}>계산 값 : {detailNum}</span>
            <form className={claases.detailform} onSubmit={submit}>
                <div className={claases.detailinput}>
                    <input
                        className={claases.input}
                        onChange={(e) => {
                            setTitle(e.target.value);
                        }}
                        value={title}
                        name="name"
                        type="text"
                        placeholder="제목"
                    />
                    <input
                        className={claases.input}
                        onChange={(e) => {
                            setAccount(e.target.value);
                        }}
                        value={account}
                        name="num"
                        type="number"
                        min={0}
                        placeholder="가격"
                    />
                </div>
                <button className={claases.btn}>추가</button>
            </form>
            <ul className={claases.detailUi}>
                {detailPlan.map((plan, idx) => {
                    return (
                        <div className={claases.detailDiv} key={idx}>
                            <li className={claases.detailLi}>{`${plan.name} - ${plan.num}`}</li>
                            <button
                                onClick={() => {
                                    let id = plan.id;
                                    removePlan(id);
                                }}
                                className={claases.detailBtn}
                            >
                                X
                            </button>
                        </div>
                    );
                })}
            </ul>
        </div>
    );
};

export default DetailPlan;
