import React, { Component } from 'react'

export default class Section extends Component {
  render() {
    return (
      <section className='section col-8 tempbr '>{this.props.children}</section>

    )
  }
}
