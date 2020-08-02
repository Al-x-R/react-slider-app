import React, {Component} from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentIndex: 0,
            pictures: [
                {
                    "id": 1,
                    "url": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
                    "alt": "tree"
                },
                {
                    "id": 2,
                    "url": "https://tourspoland.com/images/Pictures_Poland/beautiful_sunset_poland_sea.jpg",
                    "alt": "sea"
                },
                {
                    "id": 3,
                    "url": "https://mcleanscotland.com/wp-content/uploads/Oban-sunset.jpg",
                    "alt": "sunset"
                },
                {
                    "id": 4,
                    "url": "https://miro.medium.com/max/3182/1*ZdpBdyvqfb6qM1InKR2sQQ.png",
                    "alt": "sunset"
                },
                {
                    "id": 5,
                    "url": "https://cache.desktopnexus.com/thumbseg/982/982355-bigthumbnail.jpg",
                    "alt": "sunset"
                },
            ],
        }
    }

    render() {
        const {currentIndex, pictures } = this.state
        return (
            <section className='app'>
                <div className='imgWrapper' key={pictures[currentIndex].id}>
                    <img className='img' src={pictures[currentIndex].url} alt={pictures[currentIndex].alt}/>
                </div>
            </section>

        )
    }

}

export default App;
