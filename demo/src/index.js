import React, {Component} from 'react'
import {render} from 'react-dom'
import styled, { createGlobalStyle } from 'styled-components'

import Example from '../../src'
import sampleTemplate1 from './paylode-sample-template1.json'
import sampleTemplate2 from './paylode-sample-template2.json'


const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  }

  #demo {
    height: 100%;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
`

const Bar = styled.div`
  flex: 1;
  background-color: #024666;
  color: #FFF;
  padding: 10px;
  display: flex;
  max-height: 40px;

  h1 {
    flex: 1;
    font-size: 16px;
    text-align: left;
  }

  button {
    flex: 1;
    padding: 10px;
    margin-left: 10px;
    font-size: 14px;
    font-weight: bold;
    background-color: #000;
    color: #FFF;
    border: 0px;
    max-width: 200px;
    cursor: pointer;
    white-space: nowrap;
  }
`

class Demo extends Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />

        <Container>
          <Bar>
            <h1>Topol React Email Editor Demo</h1>

            <button onClick={this.onLoadSampleTemplate1}>Load Sample Template-1</button>
            <button onClick={this.onLoadSampleTemplate2}>Load Sample Template-2</button>
            <button onClick={this.saveDesign}>Save HTML</button>
          </Bar>

          <Example
            ref={editor => this.editor = editor}
            onLoad={this.onLoad}
            saveDesign={this.saveDesign}
          />
        </Container>
      </React.Fragment>
    )
  }

  onLoadSampleTemplate1 = () => {
    const updated = JSON.stringify(sampleTemplate1);
    this.editor.loadDesign(updated);
  }

  onLoadSampleTemplate2 = () => {
    const updated = JSON.stringify(sampleTemplate2);
    this.editor.loadDesign(updated);
  }

  saveDesign = () => {
    this.editor.saveDesign(design => {
      console.log('saveDesign', design)
      alert("Design JSON has been logged in your developer console.")
    })
  }

}

render(<Demo/>, document.querySelector('#demo'))
