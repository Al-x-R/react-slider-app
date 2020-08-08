import React, {Component} from "react"
import ImageItem from "../ImageItem"
import ButtonItem from "../ButtonItem"
import Icon from '@mdi/react'
import {
    mdiSkipNextOutline, mdiSkipPreviousOutline,
    mdiPlay, mdiStop, mdiChevronUp, mdiChevronDown
} from '@mdi/js';
import styles from './Carousel.module.scss'

class Carousel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            autoPlay: false,
            currentSpeed: 5000,
            maxSpeed: 1000,
            minSpeed: 10000,
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

    nextBtnClick = () => {
        this.setState((state) => {
            const {currentIndex, pictures} = state

            return (currentIndex < pictures.length - 1) ?
                {currentIndex: currentIndex + 1} :
                {currentIndex: 0}
        })
    }

    prevBtnClick = () => {
        this.setState((state) => {
            const {currentIndex, pictures} = state

            return (currentIndex > 0) ?
                {currentIndex: currentIndex - 1} :
                {currentIndex: pictures.length - 1}
        })
    }

    play = () => {
        const {autoPlay} = this.state
        if (!autoPlay) {
            this.setState({
                autoPlay: true
            })
        }
    }

    stop = () => {
        const {autoPlay} = this.state
        if (autoPlay) {
            this.setState({
                autoPlay: false
            })
        }
    }

    clear = () => {
        clearTimeout(this.timeoutId)
        this.timeoutId = null
    }


    componentDidUpdate(prevProps, prevState) {
        const {autoPlay, currentSpeed} = this.state;
        this.clear();
        if (autoPlay) {
            this.timeoutId = setInterval(this.nextBtnClick, currentSpeed)
        }
    }

    speedUp = () => {
        const {currentSpeed, maxSpeed} = this.state
        if (currentSpeed > maxSpeed) {
            this.setState({
                currentSpeed: currentSpeed - 1000
            })
        }
    }

    speedDown = () => {
        const {currentSpeed, minSpeed} = this.state
        if (currentSpeed < minSpeed) {
            this.setState({
                currentSpeed: currentSpeed + 1000
            })
        }
    }

    componentWillUnmount() {
        this.clear()
    }

    render() {
        const {currentIndex, pictures} = this.state

        return (
            <article className={styles.carousel}>
                <section className={styles.slideItem}>
                    <ButtonItem title={'previous slide'}
                                className={`${styles.prevBtn} ${styles.btn}`} handler={this.prevBtnClick}
                                icon={<Icon path={mdiSkipPreviousOutline} size={2} color="white"/>}
                    />
                    <ImageItem className={styles.slideItem} picture={pictures[currentIndex]}/>
                    <ButtonItem title={'next slide'}
                                className={`${styles.nextBtn} ${styles.btn}`} handler={this.nextBtnClick}
                                icon={<Icon path={mdiSkipNextOutline} size={2} color="white"/>}
                    />
                    <div className={styles.controls}>
                        <div className={styles.controlsItems}>
                            <div className={styles.controlButtons}>
                                <ButtonItem title={'start auto slides show'} className={styles.btn} handler={this.play}
                                            icon={<Icon path={mdiPlay} size={1} color="white"/>}
                                />
                                <ButtonItem title={'stop auto slides show'} className={styles.btn} handler={this.stop}
                                            icon={<Icon path={mdiStop} size={1} color="white"/>}
                                />
                            </div>
                        </div>
                        <div className={styles.controlsItems}>
                            <div className={styles.controlButtons}>
                                <ButtonItem title={'increase the speed of the slide show'}
                                            className={styles.btn} handler={this.speedUp}
                                            icon={<Icon path={mdiChevronUp} size={1} color="white"/>}
                                />
                                <ButtonItem title={'decrease the speed of the slide show'}
                                            className={styles.btn} handler={this.speedDown}
                                            icon={<Icon path={mdiChevronDown} size={1} color="white"/>}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </article>
        )
    }
}

export default Carousel