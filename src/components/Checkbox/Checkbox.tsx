import { useState } from 'react';
import styles from './Checkbox.module.css';

interface CheckboxProps {
    id: string;
    initialState: boolean;
    handleChange: () => void;
}

export function Checkbox({ id, handleChange, initialState } : CheckboxProps) {
    const[isChecked, setIsChecked] = useState(initialState);
    const handleCheck = () => { 
        setIsChecked(!isChecked);
        handleChange();
    };
    
    return (
        <div>
            <div className={styles.round}>
                <input 
                    type="checkbox" 
                    checked={isChecked} 
                    id={id} 
                    onChange={handleCheck} />

                <label htmlFor={id}></label>
            </div>
        </div>
    );
}