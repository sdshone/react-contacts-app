import React, { Component } from 'react';
import ContactInfo from './Components/ContactInfo';
import './App.css';
import contactsArray from './contacts_file.json';

var count=1;
class App extends Component {
  constructor(props) {
      super(props);
      this.state = {contacts :contactsArray.products,
                    person: contactsArray.products[0],
                    searchKey: " ",
                    contactsUpdated:contactsArray.products,
                    showResults:false,
                  };
  }
 handleClick(contact) {
   this.setState({person: contact});
 }
 searchHandler(event) {
        var searchKey = event.target.value;
        this.setState({searchKey: searchKey});
        var updatedList = this.state.contacts;
        updatedList = updatedList.filter(function(item){
          return (item['Home Phone'].toLowerCase().search(
            event.target.value.toLowerCase()) !== -1 || item['DisplayName'].toLowerCase().search(
            event.target.value.toLowerCase()) !== -1);
        });
        this.setState({contactsUpdated: updatedList});


    };
    myCallback = (dataFromChild) => {

       this.setState({contactsUpdated: dataFromChild});
       this.setState({contacts: dataFromChild});
       this.forceUpdate();
   };
  render() {
    return (
      count=1,
      <div className="app">
       <div className="left">
         <h2>Contacts</h2>
         <div>
             <input type="search"
             className="search"
             placeholder="Search..."
             value={this.state.symbol}
             onChange={this.searchHandler.bind(this)}
             />
         </div>
         <div className="contacts-container">
           {this.state.contactsUpdated.map(function(c){
               var imageStyles = {
                 backgroundImage: 'url(https://picsum.photos/200/300/?'+count+++')'
               };
               var contactStyles = {
                 backgroundColor: c === this.state.person ? '#6DD5FA' : ''
               }
             return (
                 <div className="contact" onClick={this.handleClick.bind(this, c)} style={contactStyles}>
                   <span className="image" style={imageStyles}></span>
                   <div className="namephone">
                   <span className="name">{c.DisplayName}</span>
                   <div className="phone">{c['Home Phone']}</div>
                   </div>
                 </div>
               );
               }, this)}
         </div>
       </div>
       <div className="right">
         <ContactInfo person={this.state.person} callbackFromParent={this.myCallback} />
       </div>
     </div>

    );
  }
}

export default App;
