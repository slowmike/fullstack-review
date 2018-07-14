import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import './styles.css';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
    this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  search (term) {
    console.log(`${term} was searched`);
    // TODO
    $.ajax({
      url: '/repos',
      type: 'POST',
      data: term,
      contentType: 'text/plain',
    })
    .done((data) => {
      console.log(data);
      this.getData();
    })
    .fail((err) => {
      console.log(err);
    });
  }

  getData() {
    $.get('/repos')
    .done((data) => {
      this.setState({repos: data});
    })
    .fail((err) => {
      console.log(err);
    })

  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
