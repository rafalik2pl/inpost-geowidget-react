import React, { Component } from 'react'

interface InpostGeowidgetReactProps {
  text: string
  token: string
  identifier: string
  language: string
  config: string
  sandbox?: boolean
  pointSelect: (e?: any) => void
  apiReady: (e?: any) => void
}

export class InpostGeowidgetReact extends Component<InpostGeowidgetReactProps> {
  static defaultProps: Partial<InpostGeowidgetReactProps> = {
    token: '',
    identifier: 'Geo1',
    language: 'pl',
    config: 'parcelcollect',
    sandbox: false
  }

  componentDidMount() {
    this._loadScript(
      this._getScriptUrl(),
      () => {
        console.log('Geowidget js library was loaded successfuly.')
      },
      () => {
        console.warn('There was a problem adding the Geowidget js library.')
      }
    )

    this._loadStylesheet(
      this._getStylesheetUrl(),
      () => {
        console.log('Geowidget css library was loaded successfuly.')
      },
      () => {
        console.warn('There was a problem adding the Geowidget css library.')
      }
    )

    const geowidget = document.getElementById(this.props.identifier)
    if (geowidget) {
      geowidget.addEventListener('inpost.geowidget.init', (event: any) => {
        const api = event.detail.api
        this.props.apiReady(api)
        api.addPointSelectedCallback((point: any) => {
          this.props.pointSelect(point)
        })
      })
    }
  }

  private _loadScript = (
    scriptUrl: string,
    callback: () => void,
    errorCallback: () => void
  ): void => {
    if (this._isScriptLoaded(scriptUrl)) {
      return
    }
    const script = document.createElement('script')
    script.src = scriptUrl
    script.onload = callback
    script.onerror = errorCallback
    document.head.appendChild(script)
  }

  private _loadStylesheet = (
    stylesheetUrl: string,
    callback: () => void,
    errorCallback: () => void
  ): void => {
    if (this._isStylesheetLoaded(stylesheetUrl)) {
      return
    }
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.type = 'text/css'
    link.href = stylesheetUrl
    link.onload = callback
    link.onerror = errorCallback
    document.head.appendChild(link)
  }

  private _getScriptUrl = (): string => {
    return this.props.sandbox
      ? 'https://sandbox-easy-geowidget-sdk.easypack24.net/inpost-geowidget.js'
      : 'https://geowidget.inpost.pl/inpost-geowidget.js'
  }

  private _getStylesheetUrl = (): string => {
    return this.props.sandbox
      ? 'https://sandbox-easy-geowidget-sdk.easypack24.net/inpost-geowidget.css'
      : 'https://geowidget.inpost.pl/inpost-geowidget.css'
  }

  private _isScriptLoaded = (scriptUrl: string): boolean => {
    const scripts = Array.from(
      document.head.querySelectorAll('script')
    ) as HTMLScriptElement[]

    return scripts.some((script) => script.src === scriptUrl)
  }

  private _isStylesheetLoaded = (stylesheetUrl: string): boolean => {
    const stylesheets = Array.from(document.styleSheets) as CSSStyleSheet[]

    return stylesheets.some((stylesheet) => stylesheet.href === stylesheetUrl)
  }

  render() {
    return (
      <inpost-geowidget
        id={this.props.identifier}
        token={this.props.token}
        language={this.props.language}
        config={this.props.config}
      />
    )
  }
}
