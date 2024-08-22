import React from 'react'
import PropTypes from 'prop-types'
import { CWidgetStatsD, CRow, CCol } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cibFacebook,
  cibLinkedin,
  cilCash,
  cilCalendar,
  cilMoney,
  cilDollar,
  cilGraph,
  cilChartLine,
  cilCreditCard,
  cilBank,
  cilArrowThickFromBottom,
} from '@coreui/icons'
import { CChart } from '@coreui/react-chartjs'

const WidgetsBrand = (props) => {
  const chartOptions = {
    elements: {
      line: {
        tension: 0.4,
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3,
      },
    },
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  }

  return (
    <CRow className={props.className} xs={{ gutter: 4 }}>
      <CCol sm={6} xl={6} xxl={3}>
        <CWidgetStatsD
          {...(props.withCharts && {
            chart: (
              <CChart
                className="position-absolute w-100 h-100"
                type="line"
                data={{
                  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                  datasets: [
                    {
                      backgroundColor: 'rgba(255,255,255,.3)',
                      borderColor: 'rgba(255,255,255,.55)',
                      pointHoverBackgroundColor: '#fff',
                      borderWidth: 2,
                      data: [40, 55, 51, 65, 59, 84, 84],
                      fill: true,
                    },
                  ],
                }}
                options={chartOptions}
              />
            ),
          })}
          icon={<CIcon icon={cilChartLine} height={52} className="my-4 text-white" />}
          values={[
            { title: 'Amount Invested', value: '$89,589' },
            { title: 'Total Earned', value: '$14,325' },
          ]}
          style={{
            // '--cui-card-cap-bg': '#3b5998',
            '--cui-card-cap-bg': 'var(--primary-dark)',
          }}
        />
      </CCol>
      <CCol sm={3} xl={3} xxl={2}>
        <CWidgetStatsD
          {...(props.withCharts && {
            chart: (
              <CChart
                className="position-absolute w-100 h-100"
                type="doughnut"
                data={{
                  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                  datasets: [
                    {
                      backgroundColor: 'rgba(255,255,255,.1)',
                      borderColor: 'rgba(255,255,255,.55)',
                      pointHoverBackgroundColor: '#fff',
                      borderWidth: 2,
                      // data: [1, 13, 9, 17, 34, 41, 38],
                      data: [3, 6, 3, 5, 4, 6, 7],
                      fill: true,
                    },
                  ],
                }}
                options={chartOptions}
              />
            ),
          })}
          icon={<CIcon icon={cilDollar} height={52} className="my-4 text-white" />}
          values={[{ title: 'Total Balance', value: '$97,000' }]}
          style={{
            // '--cui-card-cap-bg': '#00aced',
            '--cui-card-cap-bg': '#065f46',
          }}
        />
      </CCol>
      <CCol sm={3} xl={3} xxl={2}>
        <CWidgetStatsD
          {...(props.withCharts && {
            chart: (
              <CChart
                className="position-absolute w-100 h-100"
                type="bar"
                data={{
                  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                  datasets: [
                    {
                      backgroundColor: 'rgba(255,255,255,.1)',
                      borderColor: 'rgba(255,255,255,.55)',
                      pointHoverBackgroundColor: '#fff',
                      borderWidth: 2,
                      // data: [1, 13, 9, 17, 34, 41, 38],
                      data: [3, 6, 3, 15, 4, 6, 7],
                      fill: true,
                    },
                  ],
                }}
                options={chartOptions}
              />
            ),
          })}
          icon={<CIcon icon={cilArrowThickFromBottom} height={52} className="my-4 text-white" />}
          values={[{ title: 'Total Withdrawals', value: '$254' }]}
          style={{
            // '--cui-card-cap-bg': '#00aced',
            '--cui-card-cap-bg': 'var(--primary-light)',
          }}
        />
      </CCol>
    </CRow>
  )
}

WidgetsBrand.propTypes = {
  className: PropTypes.string,
  withCharts: PropTypes.bool,
}

export default WidgetsBrand
