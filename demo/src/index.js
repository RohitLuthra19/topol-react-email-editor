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
    background-color: #04aaf5;
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

            <button onClick={this.onLoadSampleTemplate1}>Load Template-1</button>
            <button onClick={this.onLoadSampleTemplate2}>Load Template-2</button>
            <button onClick={this.saveDesign}>Save HTML</button>
            <button onClick={this.togglePreview}>Toggle Preview</button>
          </Bar>

          <Example
            ref={editor => this.editor = editor}
            onLoad={this.onLoad}
            saveDesign={this.saveDesign}
            onSave={this.onSave}
            templateId={1}
            authorize={{
              apiKey: "2HzrKzFpwOqiG98EmT3zRSdO6byCbRIVE0mCFiQYGPKLPWttrwOMWAFyeRcr",
              userId: "rohit@quovantis.com",
            }}
            googleFonts={['Roboto', 'K2D', 'Mali']}
            mergeTags= {[{
              name: 'Merge tags', // Group name 
              items: [{
                  value: "*|FIRST_NAME|*", // Text to be inserted
                  text: "First name", // Shown text in the menu
                  label: "Customer's first name" // Shown description title in the menu
                },
                {
                  value: "*|LAST_NAME|*",
                  text: "Last name",
                  label: "Customer's last name"
                }
              ]
            }]}
          />
        </Container>
      </React.Fragment>
    )
  }

  onLoadSampleTemplate1 = () => {
    this.editor.loadDesign(JSON.stringify(sampleTemplate1));
  }

  onLoadSampleTemplate2 = () => {
    this.editor.loadDesign(JSON.stringify(sampleTemplate2));
  }

  saveDesign = () => {
    this.editor.saveDesign(design => {
      console.log('saveDesign', design)
      alert("Design JSON has been logged in your developer console.")
    })
  }

  togglePreview = () => {
    this.editor.togglePreview();
  }

  onSave = (json, html) => {
    console.log(json);
  }
}

render(<Demo/>, document.querySelector('#demo'))
