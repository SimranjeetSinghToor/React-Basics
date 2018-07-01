import React from 'react';
import TaskList from "../components/taskList";
import '../styles/main.css'
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [{"taskName":'first task', 'status':'new'}],
      taskName: ''
    }
    this.updateValue = this.updateValue.bind(this);
    this.progressStatus = this.progressStatus.bind(this);
    this.completedStatus = this.completedStatus.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  updateValue(event) {
    this.setState({
      taskName:event.target.value
    })
  }
  progressStatus(id) {
      let currentTasks = [...this.state.tasks];
      currentTasks[id].status = 'progress';
      this.setState({
        tasks:currentTasks
      })
  }
  completedStatus(id) {
    let currentTasks = [...this.state.tasks];
    currentTasks[id].status = 'completed';
    this.setState({
      tasks:currentTasks
    })
  }
  deleteTask(id) {
    let currentTasks = [...this.state.tasks];
    currentTasks.splice(id,1);
    this.setState({
      tasks:currentTasks
    })
  }
  handleClick() {
    let task = {
      'taskName': this.state.taskName,
      'status': 'new'
    }
    const allTasks = [...this.state.tasks];
    allTasks.push(task);
    this.setState((prevState, props) => ({
      tasks: allTasks
    }));
  }

  render() {
    return (
      <div className="center">
        <div className="input-tasks">
          <input type = "text" value={this.state.taskName} onChange={this.updateValue}/>
          <button onClick = {this.handleClick.bind(this)}>Add task </button>
        </div>
        <TaskList tasks = {this.state.tasks} progress={this.progressStatus} complete={this.completedStatus} onDel={this.deleteTask}> </TaskList>
      </div>
    );
  }
}
