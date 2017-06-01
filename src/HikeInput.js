import React, { Component } from 'react';
import './HikeInput.css'

class HikeInput extends Component {
  constructor(props) {
     super(props);
     this.state = {
       name: '',
       distance: '',
       location: [0,0],
       duration: '',
       description: ''
     };

     this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleChange(event) {
     const target = event.target;
     const name = target.name;
     this.setState({[name]: target.value});

     event.preventDefault();
   }

   handleSubmit(event) {
     console.log('A hike was submitted: ' + this.state);
     this.props.addHike(this.state);
     event.preventDefault();
   }

   render() {
     return (
       <form onSubmit={(e) => {this.handleSubmit(e)}}>
         <label>
           <p>Hike name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
           <input
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange} />
         </label>
         <label>
           <p>Distance (mi):&nbsp;</p>
           <input
              name="distance"
              type="number"
              value={this.state.distance}
              onChange={this.handleChange} />
         </label>
         <label>
           <p>Duration (hr):&nbsp;&nbsp;</p>
           <input
              name="duration"
              type="number"
              value={this.state.duration}
              onChange={this.handleChange} />
         </label>
         <label>
           <p>Description:&nbsp;&nbsp;&nbsp;&nbsp;</p>
           <textarea
              name="description"
              type="text"
              value={this.state.description}
              onChange={this.handleChange} />
         </label>
         <br />
         <input type="submit" value="Submit" />
       </form>
     );
   }
 }

export default HikeInput;
