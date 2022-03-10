import React from 'react';
import './Business.css';

class Business extends React.Component {
  constructor(props) {
    super(props);

    this.formatPhoneNumber = this.formatPhoneNumber.bind(this);
  }

  //Changes the format of the phone number to be more readable.
  formatPhoneNumber(phoneNumber) {
    const regexNum = ('' + phoneNumber).replace(/^\+1/g, '');
    const matched = regexNum.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (matched) {
      return '(' + matched[1] + ') ' + matched[2] + '-' + matched[3];
    }
    return null;
  }

  render() {
    return (
      <div className='Business'>
        <div className='image-container'>
          <img
            src={this.props.business.imageSrc}
            alt={this.props.business.name}
          />
        </div>
        <h2>{this.props.business.name}</h2>
        <div className='Business-information'>
          <div className='Business-address'>
            <p>{this.props.business.address}</p>
            <p>{this.props.business.city}</p>
            <p>{`${this.props.business.state} ${this.props.business.zipCode}`}</p>
            <p>{this.formatPhoneNumber(this.props.business.phone)}</p>
          </div>
          <div className='Business-reviews'>
            <h3>{this.props.business.category.toUpperCase()}</h3>
            <h3 className='rating'>{`${this.props.business.rating} Stars`}</h3>
            <p>{`${this.props.business.reviewCount} Reviews`}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Business;
