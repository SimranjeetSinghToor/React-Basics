import React from 'react';
import "../styles/taskDetails.css";

class TaskDetail extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        id:props.track
      }
  }
  setProgress() {
    this.props.prog(this.state.id);
  }
  setCompleted() {
    this.props.comp(this.state.id);
  }
  removeTask() {
    this.props.onDelete(this.state.id);
  }
  render() {
    let classes = ['task-wrapper'];
    let dynamicClass = '';
    let status = this.props.status;
    if(status == 'new')
      dynamicClass = 'new-task';
    else
      dynamicClass = status == 'progress' ? 'progress-task' : 'completed-task';

    classes.push(dynamicClass);
    classes = classes.join(' ');
    return (<div className={classes}>
      <div className="todo-task">
        {this.props.taskName}
      </div>
      <div className="task-status-bar flex">
        <button onClick={this.setProgress.bind(this)}>In Progress</button>
        <button onClick={this.setCompleted.bind(this)}>Complete</button>
        <button onClick={this.removeTask.bind(this)}>X</button>
      </div>
    </div>)
  }
}

export default TaskDetail;
