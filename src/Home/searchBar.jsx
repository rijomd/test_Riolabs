import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';

export const SearchBar = (props) => {
    const { category, filterByCategory,clearAll,handleSearch } = props;

    const renderCategories = () => {
        let myArray = [];
        for (let item of category) {
            myArray.push(
                <Dropdown.Item onClick={() => filterByCategory(item)}>{item}</Dropdown.Item>
            )
        }
        return myArray;
    }

    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">Product List</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search Product"
                            className="me-2"
                            aria-label="Search"
                            onChange={ (e) => handleSearch(e.currentTarget.value)}
                        />
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Filter By Categories
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={() => clearAll()}>Clear All</Dropdown.Item>
                                {renderCategories()}
                            </Dropdown.Menu>
                        </Dropdown>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
