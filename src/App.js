import './App.css'
import { Component } from "react";


const images = [
  {
    src: "https://www.pixelstalk.net/wp-content/uploads/images6/HD-Wallpaper-Kyrie-Irving.jpg",
    name: "Kyrie"
  },

  {
    src: "https://images.unsplash.com/photo-1673208839785-d0d3df5b39c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    name: "Mos design"
  },

  {
    src: "https://images.unsplash.com/photo-1673205194019-55ac9f0a0899?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    name: "Third"
  },

  {
    src: "https://images.unsplash.com/photo-1673232141234-889ed2cf341c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    name: "City"
  },

  {
    src: "https://images.unsplash.com/photo-1673209377892-222ee5e19e7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    name: "iceburg"
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
