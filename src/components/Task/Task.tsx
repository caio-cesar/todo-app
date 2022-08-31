import styles from './Task.module.css';
import trashIcon from '../../assets/trash-icon.svg';
import { Trash } from 'phosphor-react';
import { Checkbox } from '../Checkbox';
import { TaskModel } from '../../shared/model/TaskModel';
import { useState } from 'react';

interface TaskProps {
    task: TaskModel;
    handleRemoveTask: (taskId: string) => void;
    handleFinalizarTask: (taskId: string) => void;
}

export function Task({ task, handleRemoveTask, handleFinalizarTask }: TaskProps) {
    const[isFinalizada, setIsFinalizada] = useState(task.finalizada);
    
    const handleChange = () => { 
        setIsFinalizada(!isFinalizada);
        handleFinalizarTask(task.id);
    }

    return (
        <div className={styles.taskBox}>
            <div className={styles.taskIconAndText}>
                <div>
                    <Checkbox 
                        id={task.id}
                        initialState={isFinalizada} 
                        handleChange={handleChange}/>
                </div>
                <p className={isFinalizada ? styles.taskTextFinalizada : styles.taskText}>  
                    {task.descricao}
                </p>
            </div>
            <div>
                <button className={styles.removeTaskButton} onClick={() => handleRemoveTask(task.id)}>
                    <Trash size={16}/>
                </button>
            </div>
        </div>
    )
}