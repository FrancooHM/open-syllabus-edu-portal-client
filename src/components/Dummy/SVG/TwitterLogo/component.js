import React, {Component} from 'react'

class TwitterLogo extends Component {

  render() {

      return (
        <svg width="36px" height="36px" viewBox="0 0 36 36" version="1.1" xmlns="http://www.w3.org/2000/svg" style={{cursor:'pointer'}}>
            <g id="Visual-Design" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Landing" transform="translate(-1206.000000, -42.000000)">
                    <g id="Group-11" transform="translate(150.000000, 40.000000)">
                        <g id="Group-6" transform="translate(1008.000000, 2.000000)">
                            <g id="Group" transform="translate(48.000000, 0.000000)">
                                <circle id="Oval" fill={this.props.colorOval} cx="18" cy="18" r="18"></circle>
                                <path d="M28.4913864,11.9389138 C27.7742658,12.2572731 27.0035439,12.4716784 26.1946514,12.5683232 C27.0205989,12.0737292 27.6548811,11.2900131 27.9529368,10.3560508 C27.1805906,10.8140984 26.3245939,11.1470762 25.4133716,11.3265594 C24.6848811,10.5493404 23.6445283,10.06368 22.4945365,10.06368 C19.91274,10.06368 18.0155783,12.4724905 18.5986957,14.9730729 C15.2762264,14.806584 12.3297785,13.2147875 10.3570878,10.7954191 C9.30942576,12.5926874 9.81376538,14.9438359 11.5939787,16.1344347 C10.9393929,16.113319 10.3221657,15.9338359 9.78371616,15.6341558 C9.73986054,17.4866496 11.0677112,19.2197588 12.9908614,19.6055258 C12.4280476,19.7582083 11.8116325,19.7939425 11.1846596,19.6737456 C11.6930599,21.2622936 13.1695324,22.4179704 14.9205086,22.450456 C13.2393765,23.7685611 11.1213126,24.3573633 9,24.1072239 C10.7696555,25.241785 12.8722888,25.90368 15.130041,25.90368 C22.5546349,25.90368 26.7493437,19.6331386 26.4959557,14.0090615 C27.2772354,13.4446234 27.9553733,12.7404971 28.4913864,11.9389138 L28.4913864,11.9389138 Z" id="Shape" fill={this.props.colorShape}></path>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
      )
  }
}

export default TwitterLogo
