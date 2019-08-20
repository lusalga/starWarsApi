import React, {Component} from 'react';
import './index.css';
import CardList from './CardList';
import Button from './Button';
import Footer from './Footer';
import Nav from './Nav';
import Cover from './Cover';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      info: [],
      urls: []
    }
    this.handleEvent = this.handleEvent.bind(this)
  }

   componentDidMount(){
    const urlList = ['https://swapi.co/api/'];
    fetch(urlList)
      .then(resp => resp.json())
      .then(data => {
        // console.log('data:', data);
        this.setState({
          urls: data
        })
      });
   }

   handleEvent(event){
      const { name } = event.target;
      this.setState({
         info: [] 
      });
      for (let [key, value] of Object.entries(this.state.urls)){
         if (name === key.toString()){
            // console.log(`${key}`);
            fetch(value)
               .then(resp => resp.json())
               .then(data => {
                  this.setState({info: this.state.info.concat(data.results)})
               })
        }
      }
   }

    render(){
        return (
            <div> 
              <Nav />
              <Cover />
              <Button onSubmit={this.handleEvent} />
              <CardList info={this.state.info} />
              <Footer />
            </div>
        )
    }
}

export default App;

   