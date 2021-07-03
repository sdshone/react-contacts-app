import React, { Component } from 'react';
import contactsArray from '../contacts_file.json';
import '../App.css';


class ContactInfo extends Component {
  constructor(props) {
      super(props);
      this.state = {contacts :contactsArray.products,
                    person: contactsArray.products[0],
                    contactsUpdated:contactsArray.products,
                    showResults:false,
                  };

    }

  editHandler(contactsUpdated,person,name,number) {
    var old,newArray;
    if(name.value){
    old = JSON.stringify(contactsUpdated).replace(this.props.person.DisplayName, name.value); //convert to JSON string
    newArray = JSON.parse(old);
    this.props.callbackFromParent(newArray);
    this.props.person.DisplayName=name.value;
    this.forceUpdate();
  };
  if(number.value){
    console.log(number.value);
  old = JSON.stringify(contactsUpdated).replace(this.props.person['Home Phone'], number.value); //convert to JSON string
  newArray = JSON.parse(old);
  this.props.callbackFromParent(newArray);
  this.props.person["Home Phone"]=number.value;
  this.forceUpdate();
  };
  name.value="";
  number.value="";
   this.setState({showResults: false });
}
     onClick() {
             this.setState({showResults: true });
         };
  render() {
    
   return (
     <div className="contact-info">
       <header>
         <h3 className="name">{this.props.person.DisplayName}</h3>
         <div>
         <input type="button" value="Edit" onClick={this.onClick.bind(this)} />

         <p><input type ="text" id="editName" placeholder="edit Name" /></p>
         <p><input type ="text" id="editPhone" placeholder="edit Phone"  /></p>
         { this.state.showResults ?
            <div>
            <input type="submit"
            onClick={this.editHandler.bind(this,
              this.state.contacts,
              this.props.person,
              document.getElementById("editName"),
              document.getElementById("editPhone"))}/>
            </div>: null }

         </div>
       </header>
       <section>
         <p className="phone">Phone: {this.props.person['Home Phone']}</p>
         <p className="email">Email: {this.props.person['E-mail Addres']}</p>
         <p className="address">Email 2: {this.props.person['E-mail 2 Address']}</p>
         <p className="phone">First Name: {this.props.person['First Name']}</p>
         <p className="email">Last Name: {this.props.person['Last Name']}</p>
         <p className="address">Notes: {this.props.person['Notes']}</p>

       </section>
     </div>
   );
  }
}

export default ContactInfo;
