import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default class Home extends Component {

  constructor() {
    super();
    this.state = {
      videos: []
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch('http://localhost:4000/videos');
      const data = await response.json();
      this.setState({ videos: [...data] });
    } catch (error) {
      console.log(error);
    }
    // getVideoDurationInSeconds('http://localhost:4000/video/1').then((duration) => {
    // console.log(duration)
    // })
  }

  render() {
    return (
      <div className="App-header">
        <Header />
        <div className="container">
          <div className="row">
            {this.state.videos.map(video =>
              <div className="col-md-3" key={video.id}>
                <Link to={`/player/${video.id}`}>
                  <div className="card border-0 tp p-0">
                    <video autoplay loop muted src={`http://localhost:4000/video/${video.id}`}  style={{height:"35vh"}}/>
                    <div className="card-body m-0 p-0">
                      <p style={{textAlign: 'center'}}>{video.name}</p>
                      <p style={{ fontSize: "12px", marginLeft:"12px"}}>{video.duration}</p>
                    </div>
                  </div>
                </Link>
              </div>
              )}
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
