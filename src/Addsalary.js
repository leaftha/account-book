import { useState } from 'react';

const AddSalary = ({ upSalary }) => {
    const [salary, setSalary] = useState(0);
    const Salarys = () => {
        upSalary(salary);
    };
    return (
        <div>
            <label>월급</label>
            <input
                type="number"
                onChange={(e) => {
                    setSalary(e.target.value);
                    Salarys();
                }}
            />
            <div>
                <h1>{`현재 월급 : ${salary}원`}</h1>
            </div>
        </div>
    );
};

export default AddSalary;
