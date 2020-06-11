import React, { Component } from 'react';
import CSS from '../css/courses.css';

class Test extends Component {
  
  constructor(props) {
        super(props);

    this.state = {
      name: 'Javascript', description: 'Frontend', completed: 'May', status: 'Pending'
    }
      // {name: 'HTML', description: 'Frontend', completed: 'May', status: 'N/A'
      
  };


// onChange = event => {
//     this.setState({ value: event.target.value });

//   };
 
  render() {
        return (
          
      <div className="course-body">
        <div className="d-flex flex-sm-row flex-column justify-content-center">
          <div className="course-itemization container-fluid">
            <table className="table table-bordered">
              <thead className="thead-default">
                <tr>
                  <th colspan="1">Name</th>
                  <th>Description</th>
                  <th>Completed</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  {this.renderCells()}
                  {/* <td>USA</td>
                   <td>Washington, D.C.</td>
                  <td>309 million</td>
                  <td>English</td> */}
                </tr>
                <tr>             
                  {/* {this.renderCells()} */}
                </tr>
                <tr>           
                  {/* {this.renderCells()}, */}
                </tr>
                <tr>         
                  {/* {this.renderCells()}, */}
                </tr>
                <tr>             
                  {/* {this.renderCells()} */}
                </tr>
                <tr>             
                  {/* {this.renderCells()} */}
                </tr>
                <tr>             
                  {/* {this.renderCells()} */}
                </tr>
                <tr>             
                  {this.renderCells()}
                </tr>
                {/* <tr>
                  <td>Sweden</td>
                  <td>Stockholm</td>
                  <td>9 million</td>
                  <td>Swedish</td>
              </tr> */}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      );
  }


  renderCells() {
    
    return ['name', 'description', 'completed', 'pending'].map(field => (
            <Cell key={field} value={ this.state[field] } onChange={value => this.setState({[field]: value})} />
        ));
    
    }

    componentDidUpdate() {
        const { name, description, completed, status } = this.state;
        console.log(`New State: ${name} ${description} - ${completed} - ${status}`);
    }


  }

class Cell extends Component {

    constructor(props) {
        super(props);
        this.state = { editing: false };
    
}

    render() {

        const { value, onChange } = this.props;

        return this.state.editing ?
            <td className="no-pad">
            <input className="form-control editor edit-text" ref='input' value={value} onChange={e => onChange(e.target.value)} onBlur={ e => this.onBlur()} />
            </td> :
            <td onClick={() => this.onFocus()}>{value}
            </td>
    }

    onFocus() {
        this.setState({ editing: true }, () => this.refs.input.focus());
    }

    onBlur() {
        this.setState({ editing: false });
    }

  }

  export default Test