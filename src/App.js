import React, {Component} from "react";

class App extends Component {

  // step 1 : add constructor 
  constructor(props) {
    super(props);
    this.state = {
      //data to be fetched from API 
      items: [],
      isLoaded: false,
    }
  }

  // step 2
  componentDidMount(){
    //get data from this api 
    fetch('https://jsonplaceholder.typicode.com/users')
      // convert res to json 
      .then(res => res.json())
      .then(json => {
        this.setState({
          //update state as data would have been retreived from API 
          isLoaded: true,
          items: json,
        })
      })
  }

  //added post data method to add more users
  //needs to be async function to use the wait method 
  async postData() {
    //alert('test');
    try {
      this.setState({
        items:
          this.state.items.concat({
            "id": this.state.items.length +1,
            "name": "Vanessa",
            "username": "vanessatlx",
            "email": "vanessa@email.com",
          })
      }, () =>
        console.log(this.state.items)
      )
    }
    catch (e) {
      console.log(e)
    }

  }
  
  render() {
    //assign state to variables so we can use them 
    var {
      isLoaded, items
    } = this.state; 
    //check if data can be loaded
    if (!isLoaded) {
      return <div>Data is loading...</div>
    }
    else {
      return (
        //loop over each object from the api result
        <div className="App">
          <ul>
            {items.map(item => (
              <li key={item.id}>
                Name: {item.name} | Email: {item.email}
              </li>
            ))}
          </ul>
          <button onClick= {() => this.postData()}>Click me to post data</button>
        </div>
      );
    }
  }
} 

export default App;
