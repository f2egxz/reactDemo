import React, { Component } from 'react'

export class Image extends Component {
    render() {
        <img src={this.props.src}
             width={this.props.width}
             height={this.props.height}
             name = {this.props.name}
        />
    }
}
