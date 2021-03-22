import React, { Component } from 'react'
import './App.css';

class App extends Component {

  componentDidMount() {
    var el = document.querySelector('.chrome-tabs')
    const ChromeTabs = window.ChromeTabs;

    var chromeTabs = new ChromeTabs()

    chromeTabs.init(el)

    el.addEventListener('activeTabChange', ({ detail }) => console.log('Active tab changed', detail.tabEl))
    el.addEventListener('tabAdd', ({ detail }) => console.log('Tab added', detail.tabEl))
    el.addEventListener('tabRemove', ({ detail }) => console.log('Tab removed', detail.tabEl))

    document.querySelector('button[data-add-tab]').addEventListener('click', _ => {
      chromeTabs.addTab({
        title: 'New Tab',
        favicon: false
      })
    })

    document.querySelector('button[data-add-background-tab]').addEventListener('click', _ => {
      chromeTabs.addTab({
        title: 'New Tab',
        favicon: false
      }, {
        background: true
      })
    })

    document.querySelector('button[data-remove-tab]').addEventListener('click', _ => {
      chromeTabs.removeTab(chromeTabs.activeTabEl)
    })

    document.querySelector('button[data-theme-toggle]').addEventListener('click', _ => {
      if (el.classList.contains('chrome-tabs-dark-theme')) {
        document.documentElement.classList.remove('dark-theme')
        el.classList.remove('chrome-tabs-dark-theme')
      } else {
        document.documentElement.classList.add('dark-theme')
        el.classList.add('chrome-tabs-dark-theme')
      }
    })

    window.addEventListener('keydown', (event) => {
      if (event.ctrlKey && event.key === 't') {
        chromeTabs.addTab({
          title: 'New Tab',
          favicon: false
        })
      }
    })
  }

  render() {
    return (<>
      <div className="surface">
        <div className="mock-browser">
          <div className="chrome-tabs tbmargin9">
            <div className="chrome-tabs-content">
              <div className="chrome-tab">
                <div className="chrome-tab-dividers"></div>
                <div className="chrome-tab-background">
                  {/* <svg version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><symbol id="chrome-tab-geometry-left" viewBox="0 0 214 36"><path d="M17 0h197v36H0v-2c4.5 0 9-3.5 9-8V8c0-4.5 3.5-8 8-8z"/></symbol><symbol id="chrome-tab-geometry-right" viewBox="0 0 214 36"><use xlink:href="#chrome-tab-geometry-left"/></symbol><clipPath id="crop"><rect className="mask" width="100%" height="100%" x="0"/></clipPath></defs><svg width="52%" height="100%"><use xlink:href="#chrome-tab-geometry-left" width="214" height="36" className="chrome-tab-geometry"/></svg><g transform="scale(-1, 1)"><svg width="52%" height="100%" x="-100%" y="0"><use xlink:href="#chrome-tab-geometry-right" width="214" height="36" className="chrome-tab-geometry"/></svg></g></svg> */}
                </div>
                <div className="chrome-tab-content">
                  <div className="chrome-tab-favicon google-fav"></div>
                  <div className="chrome-tab-title">Google</div>
                  <div className="chrome-tab-drag-handle"></div>
                  <div className="chrome-tab-close"></div>
                </div>
              </div>
              <div className="chrome-tab active">
                <div className="chrome-tab-dividers"></div>
                <div className="chrome-tab-background">
                  {/* <svg version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><symbol id="chrome-tab-geometry-left" viewBox="0 0 214 36"><path d="M17 0h197v36H0v-2c4.5 0 9-3.5 9-8V8c0-4.5 3.5-8 8-8z"/></symbol><symbol id="chrome-tab-geometry-right" viewBox="0 0 214 36"><use xlink:href="#chrome-tab-geometry-left"/></symbol><clipPath id="crop"><rect className="mask" width="100%" height="100%" x="0"/></clipPath></defs><svg width="52%" height="100%"><use xlink:href="#chrome-tab-geometry-left" width="214" height="36" className="chrome-tab-geometry"/></svg><g transform="scale(-1, 1)"><svg width="52%" height="100%" x="-100%" y="0"><use xlink:href="#chrome-tab-geometry-right" width="214" height="36" className="chrome-tab-geometry"/></svg></g></svg> */}
                </div>
                <div className="chrome-tab-content">
                  <div className="chrome-tab-favicon facebook-fav"></div>
                  <div className="chrome-tab-title">Facebook</div>
                  <div className="chrome-tab-drag-handle"></div>
                  <div className="chrome-tab-close"></div>
                </div>
              </div>
            </div>
            <div className="chrome-tabs-bottom-bar"></div>

          </div>
          <div className="chrome-tabs-optional-shadow-below-bottom-bar"></div>
          <div className="mock-browser-content">
            <div className="buttons">
              <button data-theme-toggle>Toggle dark theme</button>
              <button data-add-tab>Add new tab</button>
              <button data-add-background-tab>Add tab in the background</button>
              <button data-remove-tab>Remove active tab</button>
            </div>
          </div>
        </div>

        <div className="carbonads-wrapper">
          <script async="true" id="_carbonads_js" src="https://cdn.carbonads.com/carbon.js?serve=CKYILKQE&placement=adamschwartzco"></script>
        </div>


        <div className="made-by">
          <a href="https://adamschwartz.co" className="made-by-link">
            <svg className="made-by-logo" viewBox="0 0 222 127" role="img" aria-label="Adam Schwartz logo" fill="currentColor"><path d="M87.1 117C73.6 117 62.8 108.7 63 99 63.2 89.3 74.2 81.6 87.7 81.8 95.2 82 101.8 84.5 106.2 88.4 106.3 88.3 140.7 25.5 140.7 25.5L162.4 10 112.4 102.2C112 102.8 105 117 87.1 117Z" className="music-note"></path><path d="M56 20L56 36.6 32 59 56 80 56 98 10 59 56 20 56 20Z" className="less-than"></path><path d="M166 37L190 59 166 80 166 98 212 59 166 20 166 37 166 37Z" className="greater-than"></path></svg>
            <div className="made-by-text">Made by Adam Schwartz</div>
          </a>
        </div>
      </div>
    </>);
  }
}

export default App;
