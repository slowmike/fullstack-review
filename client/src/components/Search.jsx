import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
  }

  onChange (e) {
    this.setState({
      term: e.target.value
    });
  }

  search(e) {
    e.preventDefault();
    this.props.onSearch(this.state.term);
  }

  render() {
    return (<div>
      <h3>Add more repos!</h3>
      <form onSubmit={this.search.bind(this)}>
        Enter a github username: <input value={this.state.terms} onChange={this.onChange.bind(this)}/>
        <button> Add Repos </button>
      </form>
    </div>)
  }
}

export default Search;
