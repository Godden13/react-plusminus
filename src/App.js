import './App.css'
import image1 from './1.jpeg';
import image2 from './2.jpeg';
import image3 from './3.jpeg';
import image4 from './4.jpeg';
import image5 from './5.jpeg';

import { Component } from "react";


const images = [
  {
    src: image1,
    name: "Sun kissed"
  },

  {
    src: image2 ,
    name: "B/W"
  },

  {
    src: image3,
    name: "Back view"
  },

  {
    src: image4,
    name: "No fit concentrate"
  },

  {
    src: image5,
    name: "Late At night"
  }
]

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }

  componentDidMount() {
    this.interval = setInterval(this.add.bind(this), 2000)
  }

  sub() {
    const count = this.state.count - 1
    this.setState({ count: count < 0 ? images.length - 1 : count })
  }

  add() {
    this.setState({ count: (this.state.count + 1) % images.length })
  }

  render() {
    return <div className='app'>
      <h1>Mine</h1>
      <img src={images[this.state.count].src} alt={images[this.state.count].name} id='image' />
      <p>{this.state.count + 1}. {images[this.state.count].name}</p>
      <div className='buttonFld'>
        <button onClick={this.sub.bind(this)}>&lang;</button>
        <span>{this.state.count}</span>
        <button onClick={this.add.bind(this)}>&rang;</button>
      </div>
      <div className='imageCards'>
        {
          images.map((image) => {
            return <div className='card'>
              <img src={image.src} alt={images.name} id='image' />
              <p> { } </p>
            </div>
          })
        }
      </div>
    </div>
  }
}
