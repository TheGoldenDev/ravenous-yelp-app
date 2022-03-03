import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      location: '',
      sortBy: 'best_match',
    };
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSortByChange = this.handleSortByChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);

    this.sortByOptions = {
      'Best Match': 'best_match',
      'Highest Rated': 'rating',
      'Most Reviewed': 'review_count',
    };
  }

  //Applies the css styling to the currently selected sorting method
  getSortByClass(sortByOption) {
    return this.state.sortBy === sortByOption ? 'active' : '';
  }

  //Updates the state of sortby to the option the user selects
  handleSortByChange(sortByOption, event) {
    this.setState({ sortBy: sortByOption });
    event.preventDefault();
    this.props.searchYelp(
      this.state.term,
      this.state.location,
      this.state.sortBy
    );
  }

  //Updates state and displays the term in the search based on the keys the user presses
  handleTermChange(event) {
    this.setState({ term: event.target.value });
  }

  //Updates the location search field based on the keys the user presses
  handleLocationChange(event) {
    this.setState({ location: event.target.value });
  }

  //Searches the term and location provided when a user presses the Enter key
  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.handleSearch(event);
    }
  }

  //If term and location are not empty pass the data to the searchYelp object
  handleSearch(event) {
    if (this.state.term || this.state.location !== undefined || null) {
      event.preventDefault();
      this.props.searchYelp(
        this.state.term,
        this.state.location,
        this.state.sortBy
      );
    }
  }

  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map((sortByOption) => {
      let sortByOptionValue = this.sortByOptions[sortByOption];
      return (
        <li
          className={this.getSortByClass(sortByOptionValue)}
          key={sortByOptionValue}
          onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>
          {sortByOption}
        </li>
      );
    });
  }

  render() {
    return (
      <div className='SearchBar'>
        <div className='SearchBar-sort-options'>
          <ul>{this.renderSortByOptions()}</ul>
        </div>
        <div className='SearchBar-fields'>
          <input
            onChange={this.handleTermChange}
            onKeyPress={this.handleKeyPress}
            placeholder='Search Businesses'
          />
          <input
            onChange={this.handleLocationChange}
            onKeyPress={this.handleKeyPress}
            placeholder='Where?'
          />
        </div>
        <div className='SearchBar-submit'>
          <a onClick={this.handleSearch}>Let's Go</a>
        </div>
      </div>
    );
  }
}

export default SearchBar;
