import React from 'react';
import './Business.css';

class Business extends React.Component {
  constructor(props) {
    super(props);

    this.formatPhoneNumber = this.formatPhoneNumber.bind(this);
  }

  //Changes the format of the phone number to be more readable.
  formatPhoneNumber(phoneNumberString) {
    const cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return '(' + match[1] + ') ' + match[2] + '-' + match[3];
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
            <p>{formatPhoneNumber(this.props.business.phone)}</p>
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
