import React, {Component} from 'react';
import {STAFFS} from '../Shared/staffs';
import { Card, CardBody, CardText } from 'reactstrap';

class StaffList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            choosen: null
        };
    }

    showInfo(staff) {
        this.setState({choosen: staff})    
    }

    renderStaff(staff) {
        if(staff != null) {
            return (
                <div  className='col-12 mt-4'>
                    <Card>
                        <h4>{staff.name}</h4>
                        <p>Ngày sinh: {staff.doB}</p>
                        <p>Ngày vào công ty: {staff.startDate}</p>
                        <p>Phòng ban: {staff.department.name}</p>
                        <p>Số ngày nghỉ còn lại: {staff.annualLeave}</p>
                        <p>Số ngày đã làm thêm: {staff.overTime}</p>
                    </Card>
                </div>
            )
        }
        else {
            return (
                <div className='col-12 mt-2'>Bấm vào tên nhân viên để biết thêm chi tiết!</div>
            )
        }
    }

    render() {
        const staffs = STAFFS.map((staff) => {
            return (
                <div key={staff.id} className="col-md-6 col-sm-12 mt-2">
                    <Card onClick={() => this.showInfo(staff)}>
                        <CardText>{staff.name}</CardText>
                    </Card>
                </div>
            )
        })

        return (
            <div className='container'>
                <div className='row'>
                    {staffs}
                </div>
                <div className='row'>
                    {this.renderStaff(this.state.choosen)}
                </div>
            </div>
        );
    }
}

export default StaffList;