import React, {Component} from 'react';

class SearchBar extends Component {                       //search bar now recieves added functions from react components//
  constructor(props) {
      super(props);

      this.state = {term: '' };   //term means property// constructor function
}

  render() {                                             //every class needs a render function
    return (
      <div className="search-bar">
        <input
          value ={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
