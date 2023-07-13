import { useEffect, useState } from 'react';
import classes from './Addsalary.module.css';

const AddSalary = ({ upSalary }) => {
    const [salary, setSalary] = useState(0);
    useEffect(() => {
        upSalary(salary);
    }, [salary]);
    return (
        <div className={classes.main}>
            <label className={classes.title}>월급 입력</label>
            <input
                className={classes.salaryinput}
                type="number"
                min={0}
                onChange={(e) => {
                    setSalary(e.target.value);
                }}
            />
            <div className={classes.content}>
                현재 월급 : <span className={classes.salary}>{salary}</span>원
            </div>
        </div>
    );
};

export default AddSalary;
