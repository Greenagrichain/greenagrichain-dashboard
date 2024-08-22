import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilCursor,
  cilDescription,
  cilSpreadsheet,
  cilSpeedometer,
  cilUserFollow,
  cilUser,
  cilAccountLogout,
  cilTransfer,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Plans',
    to: '/dashboard/plans',
    icon: <CIcon icon={cilSpreadsheet} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Transactions',
    to: '/dashboard/transactions',
    icon: <CIcon icon={cilTransfer} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Deposit',
        to: '/dashboard/transactions/deposit',
      },
      {
        component: CNavItem,
        name: 'Investments',
        to: '/dashboard/transactions/investments',
      },
      {
        component: CNavItem,
        name: 'Withdrawal',
        to: '/dashboard/transactions/withdrawal',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Activities',
    to: '/dashboard/activities',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'All History',
        to: '/dashboard/activities/all-history',
      },
      {
        component: CNavItem,
        name: 'Withdrawal History',
        to: '/dashboard/activities/withdrawal-history',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Account',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Profile',
        to: '/dashboard/account/profile',
      },
      {
        component: CNavItem,
        name: 'Identity / KYC',
        to: '/dashboard/account/kyc',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Referrals',
    to: '/dashboard/referrals',
    icon: <CIcon icon={cilUserFollow} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Statement',
    to: '/dashboard/statement',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Auth',
  },

  {
    component: CNavItem,
    name: 'Log Out',
    to: '/login',
    icon: <CIcon icon={cilAccountLogout} customClassName="nav-icon" />,
  },
]

export default _nav
