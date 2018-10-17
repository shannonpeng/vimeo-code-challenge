import React, { Component } from 'react';
import './Panel.css';

class Panel extends Component {
  render() {
    return (
      <div className={ this.props.oddChild ? 'Panel odd-child' : 'Panel'} id={ 'Panel-' + this.props.keyword }>
          <div className='container'>
            <div className='info'>
              <h2>{ this.props.title }</h2>
              <p>{ this.props.description }</p>
            </div>
            <div className='preview'>
              <img src={ this.props.image } />
            </div>
          </div>
      </div>
    );
  }
}

export default Panel;
