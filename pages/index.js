import React, { Component } from "react"
import fetch from "isomorphic-unfetch"



export default class extends Component {
    static async getInitialProps() {
        const res = await fetch("https://random.dog/woof.json?filter=mp4,webm")
        const data = await res.json()
      
        return {
            imageURL: data.url
        }
    }
    render () {
        return (
            <div className="homepage-wrapper">
                <h1>Welcome to Protest Plots!</h1>
                <img src={this.props.imageURL} width="350" />
            </div>
        )
    }
}