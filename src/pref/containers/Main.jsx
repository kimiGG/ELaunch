import React from 'react'
import SideMenu from '../components/SideMenu'
import { RouterContext } from 'react-router'
import { Layout, Panel, Sidebar } from 'react-toolbox/lib/layout'
import autoBind from 'autobind-decorator'

@autoBind
export default class Main extends React.Component {

  static childContextTypes = {
    routerContext: React.PropTypes.object,
  }

  state = {
    drawerPinned: true
  }

  getChildContext() {
    return {
      routerContext: this.props
    }
  }

  toggleDrawerPinned() {
    this.setState({
      drawerPinned: !this.state.drawerPinned,
    })
  }

  render() {
    console.log(this.props)
    return (
      <Layout>
        <Sidebar
          pinned={this.state.drawerPinned}
          width={3}
        >
          <SideMenu />
        </Sidebar>
        <Panel scrollY>
          <div style={{ padding: '1.8rem' }}>
            {this.props.children}
          </div>
        </Panel>
      </Layout>
    )
  }
}

Main.propTypes = {
  children: React.PropTypes.node,
  history: React.PropTypes.object,
  location: React.PropTypes.object,
}
