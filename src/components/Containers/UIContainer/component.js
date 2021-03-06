import React, {Component} from 'react'
// import $ from 'jquery';
import './component.sass'
import NavBar from '../../Dummy/NavBar/component.js'
import Footer from '../../Dummy/Footer/component.js'

class UIContainer extends Component {

  state = {
    $: null
  }

  header = () =>
  {
    let header = 'header',
        parallax = 'parallax navbar-fixed';

    if(this.props.location.pathname === '/') {
      header = 'header-landing';
      parallax = 'parallax-landing navbar-fixed';
    }

    return {header: header, parallax: parallax};
  }

  componentDidMount = async () =>{
    const $ = await import('jquery')
    this.setState({$: $}, () =>{this.shrink()})

  }

  shrink = ( ) =>{
    console.log(this.state.$);
    this.state.$(window).scroll(() => {
        if (this.state.$(document).scrollTop() > 50) {
        this.state.$('.navbar-fixed').addClass('shrink');
        } else {
        this.state.$('.navbar-fixed').removeClass('shrink');
        }
      });
  }

    render() {
        return (
          <div>
            <header className={this.header().header}>
                <div className={this.header().parallax}>
                  <div className="huge-container">
                    <NavBar router={this.props}/>
                  </div>
                </div>
            </header>
            {this.props.children}
            {Footer()}
          </div>
        )
    }
}

export default UIContainer
