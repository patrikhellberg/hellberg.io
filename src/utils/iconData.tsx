import React, { ReactElement } from 'react'
import type { IconName } from '@/types'

let svgPathIndex = 0
const getKey = () => {
  svgPathIndex++
  return `svgPath_${svgPathIndex}`
}

export const iconData: {
  [key in IconName]: {
    props: { [key: string]: string | number }
    children: ReactElement[]
  }
} = {
  phone: {
    props: {
      fill: 'none',
      stroke: '#101828',
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    },
    children: [
      <path
        d='M11.5625 15.6C12.5915 17.725 14.3098 19.4389 16.4375 20.4625C16.5944 20.5368 16.768 20.569 16.9412 20.5558C17.1143 20.5427 17.2811 20.4846 17.425 20.3875L20.55 18.3C20.6881 18.2063 20.8476 18.1492 21.0137 18.1339C21.1799 18.1186 21.3472 18.1456 21.5 18.2125L27.35 20.725C27.5499 20.8082 27.717 20.9548 27.8254 21.1423C27.9338 21.3298 27.9776 21.5477 27.95 21.7625C27.7646 23.2097 27.0582 24.5397 25.9631 25.5037C24.8679 26.4677 23.459 26.9997 22 27C17.4913 27 13.1673 25.2089 9.97919 22.0208C6.79107 18.8327 5 14.5087 5 9.99998C5.00033 8.54098 5.53227 7.13208 6.49628 6.03692C7.4603 4.94177 8.79033 4.2354 10.2375 4.04998C10.4523 4.02239 10.6702 4.06617 10.8577 4.17459C11.0452 4.28301 11.1918 4.45004 11.275 4.64998L13.7875 10.5125C13.8528 10.6629 13.8802 10.8271 13.8671 10.9906C13.854 11.1541 13.8009 11.3118 13.7125 11.45L11.625 14.625C11.5321 14.7686 11.4775 14.9336 11.4666 15.1043C11.4556 15.275 11.4887 15.4457 11.5625 15.6V15.6Z'
        key={getKey()}
      />,
    ],
  },
  email: {
    props: {
      strokeLinejoin: 'round',
      strokeWidth: '2',
      stroke: 'black',
      fill: 'none',
      strokeLinecap: 'round',
    },
    children: [
      <path d='M28 7L16 18L4 7' key={getKey()} />,
      <path
        d='M4 7H28V24C28 24.2652 27.8946 24.5196 27.7071 24.7071C27.5196 24.8946 27.2652 25 27 25H5C4.73478 25 4.48043 24.8946 4.29289 24.7071C4.10536 24.5196 4 24.2652 4 24V7Z'
        key={getKey()}
      />,
      <path d='M13.8125 16L4.3125 24.7125' key={getKey()} />,
      <path d='M27.6875 24.7125L18.1875 16' key={getKey()} />,
    ],
  },
  github: {
    props: {
      fill: '#161514',
      width: '48',
      height: '48',
      viewBox: '0 0 48 48',
    },
    children: [
      <path
        d='M24.0002 0C10.747 0 0 11.0169 0 24.6076C0 35.4799 6.87679 44.7039 16.4128 47.9577C17.6123 48.1855 18.0526 47.4239 18.0526 46.7739C18.0526 46.1872 18.0304 44.2487 18.02 42.1925C11.3431 43.6811 9.93424 39.2891 9.93424 39.2891C8.84249 36.4448 7.26945 35.6885 7.26945 35.6885C5.09192 34.1613 7.43359 34.1926 7.43359 34.1926C9.84363 34.3662 11.1126 36.7285 11.1126 36.7285C13.2532 40.4904 16.7272 39.4028 18.0967 38.7741C18.3121 37.1836 18.9341 36.0981 19.6205 35.4836C14.2897 34.8613 8.6859 32.7513 8.6859 23.3224C8.6859 20.6358 9.62345 18.4406 11.1587 16.7174C10.9095 16.0976 10.088 13.5947 11.3912 10.2052C11.3912 10.2052 13.4066 9.54387 17.993 12.7276C19.9074 12.1824 21.9606 11.9089 24.0002 11.8996C26.0398 11.9089 28.0946 12.1824 30.0126 12.7276C34.5934 9.54387 36.606 10.2052 36.606 10.2052C37.9123 13.5947 37.0905 16.0976 36.8413 16.7174C38.3801 18.4406 39.3113 20.6358 39.3113 23.3224C39.3113 32.7738 33.6968 34.8548 28.3525 35.464C29.2133 36.2276 29.9804 37.7252 29.9804 40.021C29.9804 43.3135 29.9526 45.9634 29.9526 46.7739C29.9526 47.4288 30.3846 48.1961 31.6011 47.9544C41.132 44.697 48 35.4762 48 24.6076C48 11.0169 37.2546 0 24.0002 0Z'
        key={getKey()}
      />,
      <path
        d='M9.16109 35.1623C9.10833 35.2833 8.92109 35.3197 8.75051 35.2365C8.57676 35.1571 8.47918 34.992 8.53551 34.8706C8.58708 34.7459 8.77471 34.7112 8.94807 34.7947C9.12222 34.8742 9.22139 35.0409 9.16109 35.1623Z'
        key={getKey()}
      />,
      <path
        d='M10.1314 36.263C10.0172 36.3707 9.79382 36.3207 9.64228 36.1504C9.48559 35.9806 9.45623 35.7534 9.57207 35.6441C9.68989 35.5363 9.90648 35.5868 10.0636 35.7566C10.2203 35.9285 10.2508 36.154 10.1314 36.263Z'
        key={getKey()}
      />,
      <path
        d='M11.0759 37.6663C10.9292 37.77 10.6892 37.6727 10.5408 37.4561C10.394 37.2394 10.394 36.9795 10.544 36.8755C10.6927 36.7714 10.9292 36.865 11.0795 37.08C11.2259 37.3003 11.2259 37.5601 11.0759 37.6663Z'
        key={getKey()}
      />,
      <path
        d='M12.37 39.0219C12.2386 39.1692 11.959 39.1297 11.7543 38.9287C11.5448 38.7322 11.4865 38.4534 11.6182 38.3062C11.7511 38.1585 12.0324 38.2001 12.2386 38.3994C12.4465 38.5955 12.51 38.8763 12.37 39.0219Z'
        key={getKey()}
      />,
      <path
        d='M14.1551 39.8091C14.0972 40 13.8278 40.0867 13.5565 40.0056C13.2855 39.9221 13.1082 39.6986 13.1629 39.5057C13.2193 39.3136 13.4898 39.2233 13.7631 39.31C14.0337 39.3931 14.2114 39.615 14.1551 39.8091Z'
        key={getKey()}
      />,
      <path
        d='M16.1155 39.9552C16.1223 40.1561 15.8922 40.3227 15.6074 40.3264C15.321 40.3328 15.0893 40.1702 15.0861 39.9725C15.0861 39.7696 15.311 39.6045 15.5975 39.5997C15.8823 39.5941 16.1155 39.7554 16.1155 39.9552Z'
        key={getKey()}
      />,
      <path
        d='M17.9399 39.6392C17.9741 39.8353 17.7761 40.0367 17.4933 40.0903C17.2152 40.142 16.9577 40.0209 16.9224 39.8265C16.8879 39.6255 17.0894 39.4242 17.3671 39.3721C17.6503 39.3221 17.9038 39.4399 17.9399 39.6392Z'
        key={getKey()}
      />,
    ],
  },
  linkedin: {
    props: {
      width: '48',
      height: '48',
      viewBox: '0 0 48 48',
      fill: '#2867B2',
    },
    children: [
      <path
        d='M15.163 40H8.52858V18.6352H15.163V40ZM11.8422 15.7209C9.72075 15.7209 8 13.9637 8 11.8422C8 9.72022 9.72022 8 11.8422 8C13.9642 8 15.6845 9.72022 15.6845 11.8422C15.6845 13.9637 13.963 15.7209 11.8422 15.7209ZM39.9936 40H33.3734V29.5998C33.3734 27.1211 33.3234 23.9425 29.9241 23.9425C26.4747 23.9425 25.9461 26.6354 25.9461 29.4212V40H19.3188V18.6352H25.6818V21.5496H25.7747C26.6604 19.871 28.824 18.0995 32.052 18.0995C38.7664 18.0995 40.0007 22.521 40.0007 28.264V40H39.9936Z'
        fill='#2867B2'
        key={getKey()}
      />,
    ],
  },
  check: {
    props: {
      fill: 'none',
      stroke: 'black',
      strokeWidth: '2',
    },
    children: [
      <path
        id='Vector'
        d='M27 9L13 23L6 16'
        strokeLinecap='round'
        strokeLinejoin='round'
        key={getKey()}
      />,
    ],
  },
}
