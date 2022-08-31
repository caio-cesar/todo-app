import { ChangeEvent, useState } from 'react';
import uuid from 'react-uuid';

import { TaskModel } from '../../shared/model/TaskModel';
import { Task } from '../Task/Task';

import plusIcon from '../../assets/plus.svg';
import clipboard from '../../assets/clipboard.svg';

import styles from './TaskList.module.css';

export function TaskList() {

    const [taskList, setTaskList] = useState<TaskModel[]>([]);
    const [descricaoNewTask, setDescricaoNewTask] = useState('');

    const handleCreateNewTask = () => {
        const newTask: TaskModel = {
            id: uuid(),
            descricao: descricaoNewTask,
            finalizada: false
        }
        setDescricaoNewTask('');
        setTaskList([...taskList, newTask]);
    }

    const handleChangeNewTaskText = (e: ChangeEvent<HTMLInputElement>) => {
        setDescricaoNewTask(e.target.value);
    }

    const handleFinalizarTask = (taskId: string) => {
        const newTaskList = taskList.map(t => {
            if (t.id === taskId) {
                return { ...t, finalizada: !t.finalizada };
            }
            return t;
        });

        setTaskList(newTaskList);
        console.log(newTaskList);
    }

    const handleRemoveTask = (taskId: string) => {
        setTaskList(taskList.filter(t => t.id !== taskId));
    }

    const getNumeroTarefaCriadas = () => taskList.length;

    const getNumeroTarefasConcluidas = () => taskList.filter(t => t.finalizada).length

    const isNewTaskEmpty = descricaoNewTask.length == 0;

    const isTaskListEmpty = !taskList || taskList.length == 0;

    return (
        <>
            <div className={styles.taskContainer}>

                <input className={styles.taskInput}
                    value={descricaoNewTask}
                    onChange={handleChangeNewTaskText}
                    placeholder="Adicione uma nova tarefa" />

                <button
                    className={styles.buttonCreateTask}
                    onClick={handleCreateNewTask}
                    disabled={isNewTaskEmpty}>
                    Criar
                    <img src={plusIcon} />
                </button>
            </div>

            <section className={styles.taskListContainer}>
                <header className={styles.taskListHeader}>
                    <div className={styles.tarefasCriadas}>
                        Tarefas criadas
                        <div className={styles.tagNumeroTarefas}>
                            {getNumeroTarefaCriadas()}
                        </div>
                    </div>
                    <div className={styles.tarefasConcluidas}>
                        Concluídas
                        <div className={styles.tagNumeroTarefas}>
                            {`${getNumeroTarefasConcluidas()} de ${getNumeroTarefaCriadas()}`}
                        </div>
                    </div>
                </header>

                <div>
                    {isTaskListEmpty ?
                        (
                            <div className={styles.emptyTaskList}> 
                                <img src={clipboard} />
                                <div className={styles.emptyTaskMessage}>
                                    <h3>Você ainda não tem tarefas cadastradas</h3>
                                    <p>Crie tarefas e organize seus itens a fazer</p>
                                </div>
                            </div>) :

                        (<ul className={styles.taskList}>
                            {taskList.map(task =>
                                <li key={task.id}>
                                    <Task
                                        task={task}
                                        handleRemoveTask={handleRemoveTask}
                                        handleFinalizarTask={handleFinalizarTask} />
                                </li>)}
                        </ul>)
                    }
                </div>
            </section>
        </>
    )
}