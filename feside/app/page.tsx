'use client';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import image_list from '@/app/asset/image';
import Image from 'next/image';
import '@/assets/css/index.css';
import '@/assets/css/navtabs.css';
import '@/assets/css/page_customer.css';
import { LuLayoutDashboard } from "react-icons/lu";
import { SiPowerbi } from "react-icons/si";
import { IoPeople } from 'react-icons/io5';
import { RiReservedFill } from 'react-icons/ri';
import { SiVorondesign } from 'react-icons/si';
import { TbReportAnalytics } from 'react-icons/tb';
import { MdReduceCapacity } from 'react-icons/md';
import { IoMdSettings } from 'react-icons/io';
import { TbShoppingCart } from 'react-icons/tb';
import { TbTruckDelivery } from 'react-icons/tb';
import Customer from './pages/customer';

// Home component definition
export default function Home() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const handleTabClick = (tab: React.SetStateAction<string>) => {
    setActiveTab(tab);
  };

  return (
    <div className="page">
      <div className="header_nav_horizontal">
        <div className="logo">
          <Image
            src={image_list.src}
            alt="Square Icon"
            objectFit="cover"
          />
        </div>
        <span className="divide"></span>
        <p className='label-menu'>Menu</p>
        <span className="divide"></span>
        <div className='menu-nav'>
          <ul className='nav-ul-menu'>
            <li className='li-ul'>
              <LuLayoutDashboard size={25} />
              <a href="">Dashboard</a>
            </li>
            <li className='li-ul'>
              <SiPowerbi />
              <a href="">Stock</a>
            </li>
            <li className='li-ul'>
              <IoPeople />
              <a href="">Customer</a>
            </li>
            <li className='li-ul'>
              <RiReservedFill />
              <a href="">Restaurant</a>
            </li>
            <li className='li-ul'>
              <SiVorondesign />
              <a href="">Design</a>
            </li>
            <li className='li-ul'>
              <TbReportAnalytics />
              <a href="">Report</a>
            </li>
            <li className='li-ul'>
              <MdReduceCapacity />
              <a href="">Role & Admin</a>
            </li>
            <li className='li-ul'>
              <IoMdSettings />
              <a href="">Setting</a>
            </li>
          </ul>
        </div>
        <span className="divide"></span>
        <p className='label-menu'>Integration</p>
        <span className="divide"></span>
        <div className='menu-nav'>
          <ul className='nav-ul-menu'>
            <li className='li-ul'>
              <TbShoppingCart />
              <a href="">Stock</a>
            </li>
            <li className='li-ul'>
              <TbTruckDelivery />
              <a href="">Supply</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bootstrap Nav Tabs */}
      <div className="body_page">
        <h6 className='title-customer'>Customer</h6>
        <ul className="nav nav-tabs custom-tabs">
          <li className="nav-item nocontent">
            <a>You can manage and organize your customer and other things here</a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-links ${activeTab === 'dashboard' ? 'active' : ''}`}
              onClick={() => handleTabClick('dashboard')} 
            >
              Customer
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-links ${activeTab === 'analytics' ? 'active' : ''}`}
              onClick={() => handleTabClick('analytics')} 
            >
              Promo
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-links ${activeTab === 'reports' ? 'active' : ''}`}
              onClick={() => handleTabClick('reports')} 
            >
              Voucher
            </a>
          </li>
        </ul>

        {/* Tab Content */}
        <div className="tab-content mt-3">
          {activeTab === 'dashboard' && <Customer /> }
          {activeTab === 'analytics' && <div className="tab-pane active">Promo Content</div>}
          {activeTab === 'reports' && <div className="tab-pane active">Voucher Content</div>}
        </div>
      </div>

    </div>
  );
}
