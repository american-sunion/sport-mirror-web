import React from 'react';
import { Input } from 'antd';
import logo from './assets/logo.png';
import { Player } from 'video-react';
import './Home.css'

const { Search } = Input;

export default class Home extends React.Component {

    state = {
        src: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
    }

    pause = () => {
        this.player.pause();
    }

    play = () => {
        this.player.load();
        this.player.play();
    }

    search = value => {
        if (!value) return;
        this.setState({
            src: value
        }, () => {

            this.play();
        })
    }

    render() {
        return (
            <div className='home-header'>
                <img src={logo} className="App-logo" alt="logo" />
                <Search
                    placeholder={this.state.src}
                    enterButton="Play"
                    size="large"
                    onSearch={this.search}
                />

                <div className='home-player-box'>
                    <Player ref={ref => this.player = ref}>
                        <source src={this.state.src} />
                    </Player>
                </div>
            </div>
        )
    }
}
