import React from "react";
import "./BusinessList.css";
import Business from "../Business/Business";

//create an if statment that only runs map if text has been entered into the input field
class BusinessList extends React.Component {
  render() {
    return (
      <div className='BusinessList'>
        {this.props.businesses !== undefined
          ? this.props.businesses.map((business) => {
              return <Business business={business} key={business.id} />;
            })
          : console.log("failed to search")}
      </div>
    );
  }
}

export default BusinessList;
