import React from 'react'

import {
  CCard,
  CCardBody,
  CCardHeader,
  CCardTitle,
  CCardText,
  CButton,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'

import { Link } from 'react-router-dom'

export default function Plans() {
  const packages = [
    {
      price: '$17,500',
      packageType: 'Starter',
      featureList: [
        { title: 'ROI', detail: '$15000 - $20000' },
        { title: 'Investment Duration', detail: '14 days' },
        { title: 'Minimum Investment', detail: '17500' },
        { title: 'Commission', detail: '3%' },
        { title: 'Profit Percentage', detail: '12.5%' },
      ],
    },
    {
      price: '$35,000',
      packageType: 'PREMIUM',
      featureList: [
        { title: 'ROI', detail: '$20000 - $50000' },
        { title: 'Investment Duration', detail: '14 days' },
        { title: 'Minimum Investment', detail: '35000' },
        { title: 'Commission', detail: '3%' },
        { title: 'Profit Percentage', detail: '15%' },
      ],
    },
    {
      price: '$75,000',
      packageType: 'CELL',
      featureList: [
        { title: 'ROI', detail: '$50000 - $100000' },
        { title: 'Investment Duration', detail: '21 days' },
        { title: 'Minimum Investment', detail: '75000' },
        { title: 'Commission', detail: '4%' },
        { title: 'Profit Percentage', detail: '25%' },
      ],
    },
    {
      price: '$550,000',
      packageType: 'GOLD',
      featureList: [
        { title: 'ROI', detail: '$100000 - $1000000' },
        { title: 'Investment Duration', detail: '30 days' },
        { title: 'Minimum Investment', detail: '550000' },
        { title: 'Commission', detail: '10%' },
        { title: 'Profit Percentage', detail: '45%' },
      ],
    },
    {
      price: '$1,250,000',
      packageType: 'DIAMOND',
      featureList: [
        { title: 'ROI', detail: '$1000000 - $1500000' },
        { title: 'Investment Duration', detail: '45 days' },
        { title: 'Minimum Investment', detail: '1250000' },
        { title: 'Commission', detail: '15%' },
        { title: 'Profit Percentage', detail: '16.67%' },
      ],
    },
    {
      price: '$2,250,000',
      packageType: 'EXTRACT',
      featureList: [
        { title: 'ROI', detail: '$2000000 - $2500000' },
        { title: 'Investment Duration', detail: '60 days' },
        { title: 'Minimum Investment', detail: '2250000' },
        { title: 'Commission', detail: '20%' },
        { title: 'Profit Percentage', detail: '45%' },
      ],
    },
  ]
  const currentPlan = packages[2]
  currentPlan.info = [
    {
      title: 'Days Remaining',
      detail: Math.floor(Math.random() * 14),
    },
  ]
  currentPlan.info.push(
    ...[
      {
        title: 'Profit Earned',
        detail: `$${parseInt(currentPlan.price.replace(/[,$]/g, '')) * 0.2}`,
      },
    ],
  )

  return (
    <div>
      <h2 className="text-base">Investment plans</h2>

      <div className="current-plan border max-w-[600px] flex flex-wrap md:flex-nowrap gap-8 bg-white shadow-md mb-4">
        <div className="plan-section w-1/3 bg-primary-light text-white flex flex-col justify-center md:rounded-e-lg p-4">
          <h3 className="uppercase text-3xl text-center group-hover:text-primary-medium">
            {currentPlan.packageType}
          </h3>
          <div className="price-tag text-2xl text-white text-center  group-hover:*:motion-safe:animate-pulse">
            <span>{currentPlan.price}</span>
          </div>
        </div>
        <div className="info-section py-4">
          <h3 className="text-center text-3xl text-primary-light">Current Plan</h3>
          <ul className="flex flex-col justify-center">
            {currentPlan.info.map((item, index) => (
              <li key={index}>
                <span className="font-bold">{item.title}</span>: {item.detail}
              </li>
            ))}
          </ul>
          <CButton
            as={Link}
            to="/transactions"
            className="bg-primary-light/90 hover:bg-primary-light text-white p-2 px-4 rounded-full no-underline"
          >
            Renew
          </CButton>
        </div>
      </div>
      <div className="card-wrapper flex gap-4 flex-wrap mb-8">
        {packages.map((pkg, index) => (
          <Card {...pkg} key={index} />
        ))}
      </div>
    </div>
  )
}

function Card({ price = '$9999', packageType = 'Default', featureList = [] }) {
  return (
    <div className="bg-white shadow hover:shadow-md rounded w-80 overflow-auto group transition hover:scale-105 text-center">
      <div className="price-tag w-[100%] rounded-b-[100%] text-2xl text-white py-10 text-center bg-primary-light/80 group-hover:bg-primary-light group-hover:*:motion-safe:animate-pulse">
        <span>{price}</span>
      </div>
      <div className="card-body p-4">
        <h3 className="my-4 uppercase text-3xl text-primary-light group-hover:text-primary-medium">
          {packageType}
        </h3>
        <ul className="text-sm/loose">
          {featureList.map((item, index) => (
            <li key={index + item.title}>
              <span className="font-bold">{item.title}</span>: {item.detail}
            </li>
          ))}
        </ul>
        <button className="bg-primary-light/90 hover:bg-primary-light text-white p-2 px-4 rounded-full">
          Get Package
        </button>
      </div>
    </div>
  )
}
