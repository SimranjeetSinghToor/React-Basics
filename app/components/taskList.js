import React from 'react';
import TaskDetail from '../components/taskDetails';

const TaskList = (props) => {
    let taskList;
    if (props.tasks && props.tasks.length) {
        taskList = props.tasks.map((task,index) => (
        <TaskDetail
            taskName={task.taskName} prog={props.progress} status={task.status} onDelete ={props.onDel} track={index} comp={props.complete}
        /> ));
    }
    return (
        <div className="container">
            <div className="row">
                {taskList}
            </div>
      </div>
    );
};

export default TaskList;
