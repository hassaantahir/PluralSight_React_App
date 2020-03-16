import React from 'react';
import {Link} from 'react-router';
import FlipCard from './flip';
import 'react-calendar/dist/Calendar.css';
import Imagify from './imagify';
import News from './news';

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date()
    };

    this.onchange = this.onChange.bind(this);
  }

  onChange(date){
    this.setState({ date });
  }
 
  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1>Pluralsight Administration</h1>
          <p>React, Redux and React Router in ES6 for ultra-responsive web apps.</p>
          <Link to="about" className="btn btn-success btn-lg">Learn More</Link>
        </div>
        <FlipCard dat={this.state.date} />
        <div className="imagify">
          <Imagify /> 
        </div>
        <News />
      </div>
    );
  }
}

export default HomePage;
