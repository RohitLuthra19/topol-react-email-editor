import React, {Component} from 'react'
import Script from 'react-load-script'

export default class extends Component {
  render() {
    let {
      props: {
        minHeight = 500,
        style = {}
      }
    } = this

    return (
      <div style={{
        flex: 1,
        display: 'flex',
        minHeight: minHeight
      }}>
        <Script
          url="https://d5aoblv5p04cg.cloudfront.net/editor/loader/build.js"
          onLoad={this.TopolPluginReady}
        />

        <div
          id="editor"
          style={{...style, flex: 1}}
        />
      </div>
    )
  }

  TopolPluginReady = () => {
    /* const options = (this.props.options || {})

    if (this.props.templateId) {
      options.templateId = this.props.templateId
    } */
    

    /**
     * Inializing the by passing TOPOL_OPTIONS
     */
    var TOPOL_OPTIONS = {
      id: "#editor",
      authorize: {
          apiKey: "2HzrKzFpwOqiG98EmT3zRSdO6byCbRIVE0mCFiQYGPKLPWttrwOMWAFyeRcr",
          userId: "rohit@quovantis.com",
      },
      templateId: 1,
      googleFonts: [  // List of google fonts to load
        'Roboto',
        'K2D',
        'Mali'
      ],
      callbacks: {
        onSaveAndClose: this.onSaveAndClose,
        onSave: this.onSave,
        onTestSend: this.onTestSend,
        onOpenFileManager: this.onOpenFileManager,
        onAutoSave: this.onAutoSave,
        onBlockSave: this.onBlockSave,
        onBlockRemove: this.onBlockRemove,
        onBlockEdit: this.onBlockEdit,
      },
      mergeTags: [{
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
      }, {
        name: 'Special links', // Group name 
        items: [{
            value: "<a href=\"*|UNSUBSCRIBE_LINK|*\">Unsubscribe</a>",
            text: "Unsubscribe",
            label: "Unsubscribe link"
          },
          {
            value: "<a href=\"*|WEB_VERSION_LINK|*\">Web version</a>",
            text: "Web version",
            label: "Web version link"
          }
        ]
      }, {
        name: 'Special content', // Group name 
        items: [{
          value: "For more details, please visit our <a href=\"https://www.shop.shop\">e-shop</a>!",
          text: "Visit our site",
          label: "Call to action"
        }]
      }],
    };

    TopolPlugin.init(TOPOL_OPTIONS);

    const { onLoad } = this.props
    onLoad && onLoad()
  }

  /**
   * Callbacks
   */
  onSaveAndClose = (json, html) => {
    // HTML of the email
    console.log(html);
    // JSON object of the email
    console.log(json);
  }

  onSave = (json, html) => {
    // HTML of the email
    console.log(html);
    // JSON object of the email
    console.log(json);
  }

  onTestSend = (email, json, html) => {
    // HTML of the email
    console.log(html);
    // JSON object of the email
    console.log(json);
    // Email of the recipient
    console.log(email);
    // Callback when send test email button is clicked
  }

  onOpenFileManager = () => {
    // Implement your own file manager open callback
  }

  onAutoSave = (json)  => {
    // Called when the editor decides that it needs an autosave. Mostly when the user makes a change and does not save it immediately.
    console.log(json);
  }

  onBlockSave = (json) => {
    var name = window.prompt('Enter block name:')
      if (name !== null) {
          console.log('saving block', json)
      }
  }

  onBlockRemove = (id) => {
    if (window.confirm('Are you sure?')) {
        console.log('removing block', id)
    }
  }

  onBlockEdit = (id) => {
    var name = window.prompt('Block name:', 'My block 001')
    if (name !== null) {
        console.log('saving edited block', id)
    }
  }


  /**
   * Functions
   */
  loadDesign = (design) => {
    TopolPlugin.load(design)
  }

  saveDesign = (callback) => {
    TopolPlugin.save(callback);
  }

  togglePreview = () => {
    TopolPlugin.togglePreview()
  }

  chooseFile = (url) => {
    TopolPlugin.chooseFile(url)
  }

  setSavedBlocks = (blocks) => {
    TopolPlugin.setSavedBlocks(blocks)
  }
}
