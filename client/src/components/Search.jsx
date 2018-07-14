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
    e.target.value = '';
    this.setState({'term': ''});
  }

  render() {
    return (<div>
      <h3>Add more repos!</h3>
      <form onSubmit={this.search.bind(this)}>
        Enter a github username: <input value={this.state.terms} onChange={this.onChange.bind(this)}/>
        <div><button> Add Repos </button></div>
      </form>
    </div>)
  }
}

export default Search;
