import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import CustomPlayer from './CustomPlayer';

export default class Player extends Component {

  constructor(props) {
    super(props);
    this.state = {
      videoId: this.props.match.params.id,
      videoData: {}
    };
  }

  async componentDidMount() {
    try {
      const res = await fetch(`http://localhost:4000/video/${this.state.videoId}/data`);
      const data = await res.json();
      this.setState({ videoData: data });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div className="App-header">
        <Header />
        <CustomPlayer src={`http://localhost:4000/video/${this.state.videoId}`}/>
        <h1 style={{textAlign: 'center'}}>{ this.state.videoData.name }</h1>
        <Footer />
      </div>
    )
  }
}
