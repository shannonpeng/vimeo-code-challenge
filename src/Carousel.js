import React, { Component } from 'react';
import './Carousel.css';
import Panel from './Panel';

var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

class Carousel extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentPanel: 0,
      enterFromRight: true
    }
  }

  slideLeft = () => this.setState({ enterFromRight: false, currentPanel: (this.state.currentPanel - 1 + this.props.panels.length) % this.props.panels.length })
  slideRight = () => this.setState({ enterFromRight: true, currentPanel: (this.state.currentPanel + 1) % this.props.panels.length })

  render() {
    var panel = this.props.panels[this.state.currentPanel]
    return (
      <div className='Carousel'>
        <ReactCSSTransitionGroup
          transitionName={ this.state.enterFromRight ? "enterFromRight" : "enterFromLeft"}
          transitionEnterTimeout={300}
          transitionLeaveTimeout={200}
        >
          <Panel
            key={ panel.keyword }
            keyword={ panel.keyword }
            title={ panel.title }
            description={ panel.description }
            image={ panel.image }
            enterFromRight={ this.state.enterFromRight }
            oddChild={ this.state.currentPanel % 2 === 0 }
          />
        </ReactCSSTransitionGroup>
        <div className='arrow left-arrow' onClick={this.slideLeft}><h1>&larr;</h1></div>
        <div className='arrow right-arrow' onClick={this.slideRight}><h1>&rarr;</h1></div>
      </div>
    );
  }
}

export default Carousel;