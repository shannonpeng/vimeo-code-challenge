import React, { Component } from 'react';
import Carousel from './Carousel';

class App extends Component {

  constructor(props) {
    super(props);
    const data = {
      panels: [
      {
        keyword: 'monsooniii',
        title: 'MONSOON III',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt ipsum augue. In faucibus vehicula magna pulvinar aliquam. Cras aliquam feugiat lorem non auctor. Quisque sed lorem egestas mauris venenatis commodo eu id nibh. Ut porta libero sed semper faucibus.',
        image: 'https://i.vimeocdn.com/video/595198868_505x160.jpg'
      },
      {
        keyword: 'beams',
        title: 'BEAMS',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt ipsum augue. In faucibus vehicula magna pulvinar aliquam. Cras aliquam feugiat lorem non auctor. Quisque sed lorem egestas mauris venenatis commodo eu id nibh. Ut porta libero sed semper faucibus.',
        image: 'https://i.vimeocdn.com/video/589972810_530x315.jpg'
      },
      {
        keyword: 'move2',
        title: 'Move 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt ipsum augue. In faucibus vehicula magna pulvinar aliquam. Cras aliquam feugiat lorem non auctor. Quisque sed lorem egestas mauris venenatis commodo eu id nibh. Ut porta libero sed semper faucibus.',
        image: 'https://i.vimeocdn.com/video/590587169_530x315.jpg'
      }]
    };
    this.state = {
      panels: data.panels
    };
  }
  
  render() {
    return (
      <Carousel panels={ this.state.panels }></Carousel>
    );
  }
}

export default App;
