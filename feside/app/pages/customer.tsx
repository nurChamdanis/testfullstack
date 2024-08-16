import React from 'react';
import logo from '@/assets/img/img.jpeg';
import background_right from '@/assets/img/background_right.png';
import LopMonHoc from './LopMonHoc';

const Customer = () => {
    return (
        <div className="row">
            <div className="col-md-10">
                <div className='parent'>
                    <div className="iris-frame">
                        <h1>Customer</h1>
                        <p>On this menu you will be able to create, edit, and also delete the customer. Also you can manage it easily.</p>
                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-5"></div>
                            <div className="col-md-2"></div>
                            <div className="col-md-2"></div>
                            <div className="col-md-1"></div>
                        </div>
                    </div>
                    <img className="logo-image" src={logo.src} alt="Background Image" />
                </div>
                <LopMonHoc />
            </div>
            <div className="col-md-2">
                <img src={background_right.src} alt="right" />
            </div>
        </div>
    );
};

export default Customer;
