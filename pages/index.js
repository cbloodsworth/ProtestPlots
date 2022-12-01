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
                    <div className="zipcode-input">
                        <h2>Enter your zipcode: </h2>
                        <label for="zipcode"></label>
                    <input type="text" id="zipcode" name="zipcode" maxLength="5" />
                </div>
         
                <article className="about-us">
                    <h3>What is Protest Plots?</h3>
                    <p>ProtestPlots is a centralized hub of information for people to gather information about protests nearby.</p>
                </article>
            </div>
        )
    }
}