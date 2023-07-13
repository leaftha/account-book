import { useEffect, useState } from 'react';

const AddSalary = ({ upSalary }) => {
    const [salary, setSalary] = useState(0);
    useEffect(() => {
        upSalary(salary);
    }, [salary]);
    return (
        <div>
            <label>월급</label>
            <input
                type="number"
                min={0}
                onChange={(e) => {
                    setSalary(e.target.value);
                }}
            />
            <div>
                <h1>{`현재 월급 : ${salary}원`}</h1>
            </div>
        </div>
    );
};

export default AddSalary;
