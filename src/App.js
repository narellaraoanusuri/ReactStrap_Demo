import React, { Component } from 'react';
import { Container, Col, Row, ListGroup, ListGroupItem } from 'reactstrap';

/* Components */
import SearchBar from './SearchBar';
import ContactCard from './ContactCard';
import AddContactsModal from './AddContactsModal';
import NavigationMenu from './NavigationMenu';

/* API on mockable */
const contactsAPI = 'https://demo1443058.mockable.io/codeproject_tutorial/api/contacts';


class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      searchText: '',
      searchResult: [],
      contactList: [],
      show: false,
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.returnContactList = this.returnContactList.bind(this);
  }

  /* ContactList Logic*/

  handleSearch(searchText) {
    this.setState({ searchResult: [], searchText: searchText });
    this.state.contactList.map(contact => {
      if (searchContact(contact, searchText)) {
        this.setState(prevState => ({
          searchResult: [...prevState.searchResult, contact]
        }))
      }
    })
  }


  componentWillMount() {
    let init = {
      method: 'GET',
      headers: new Headers(),
      mode: 'cors',
      cache: 'default'
    };

    fetch(contactsAPI, init)
      .then(response => response.json())
      .then(
      data => this.setState(
        prevState => ({
          contactList: [...data.contacts]
        })
      )
      )
  }

  returnContactList() {
    return this.state.searchText ? this.state.searchResult : this.state.contactList
  }

  /* UI Logic */

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <div>

        {/* Navigation bar*/}
        <NavigationMenu onClick={this.handleShow} />
        <br /> <br /> <br />

        {/* fluid Grid */}
        <Container fluid>
          <Row>
            <Col sm={{ size: 8, offset: 2 }} >

              {/* Modal window hidden by default*/}

              <AddContactsModal show={this.state.show} onClose={this.handleClose} />

              {/* Search bar*/}
              <SearchBar onSearch={this.handleSearch} />
              <br />

              {/* Contact list*/}
              <ListGroup>
                {this.returnContactList().map(
                  (contact) =>
                    <ListGroupItem key={contact.email} className="list-group-item">
                      <ContactCard contact={contact} />
                    </ListGroupItem>
                )
                }
              </ListGroup>

            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

/* Search Contact Logic */
const searchContact = (contact, searchText) => (
  contact.name.toLowerCase().search(searchText.toLowerCase()) !== -1 ||
  contact.surname.toLowerCase().search(searchText.toLowerCase()) !== -1 ||
  contact.phone.toString().search(searchText) !== -1
)

export default App;
