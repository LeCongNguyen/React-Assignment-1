import React, {Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';

class NameOfApp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <Navbar dark color='primary'>
                            <div className="container">
                                <NavbarBrand className="left" href="/">Ứng dụng quản lý nhân sự v1.0</NavbarBrand>
                            </div>
                        </Navbar>
                    </div>
                </div>
            </div>
        )
    }
}

export default NameOfApp;