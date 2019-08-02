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

  componentWillUnmount() {
    TopolPlugin.destroy();
  }
  TopolPluginReady = () => {
    const options = (this.props.options || {})

    if (this.props.templateId) {
      options.templateId = this.props.templateId;
    }

    if (this.props.authorize) {
      options.authorize = this.props.authorize;
    }
    
    if (this.props.googleFonts) {
      options.googleFonts = this.props.googleFonts;
    }

    if (this.props.mergeTags) {
      options.mergeTags = this.props.mergeTags;
    }

    if (this.props.removeTopBar) {
      options.removeTopBar = this.props.removeTopBar;
    }

    if (this.props.light) {
      options.light = this.props.light;
    }

    if (this.props.customFileManager) {
      options.customFileManager = this.props.customFileManager;
    }

    if (this.props.fonts) {
      options.fonts = this.props.fonts;
    }

    if (this.props.savedBlocks) {
      options.savedBlocks = this.props.savedBlocks;
    }

    if (this.props.premadeBlocks) {
      options.premadeBlocks = this.props.premadeBlocks;
    }
    
    if (this.props.sendTestEmail) {
      options.sendTestEmail = this.props.sendTestEmail;
    }

    if (this.props.language) {
      options.language = this.props.language;
    }
    
    if (this.props.api) {
      options.api = this.props.api;
    }
    
    /**
     * Inializing the Topol plugin by passing options
     */

    TopolPlugin.init({
      id: "#editor",
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
      ...options,
    });

    const { onLoad } = this.props
    onLoad && onLoad()
  }

  /**
   * Callbacks
   */
  onSaveAndClose = (json, html) => {
    this.props.onSaveAndClose(json, html);
  }

  onSave = (json, html) => {
    this.props.onSave(json, html);
  }

  onTestSend = (email, json, html) => {
    this.props.onTestSend(email, json, html);
  }

  onOpenFileManager = () => {
    this.props.onOpenFileManager();
  }

  onAutoSave = (json)  => {
    // Called when the editor decides that it needs an autosave. Mostly when the user makes a change and does not save it immediately.
    this.props.onAutoSave(json);
  }

  onBlockSave = (json) => {
    this.props.onBlockSave(json);
  }

  onBlockRemove = (id) => {
    this.props.onBlockRemove(id);
  }

  onBlockEdit = (id) => {
    this.props.onBlockEdit(id);
  }


  /**
   * Functions/Apis
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
