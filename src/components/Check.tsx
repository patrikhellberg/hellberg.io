type Props = {
  color?: string
  size?: number
}

const Check = ({ color = 'black', size = 32 }: Props) => {
  return (
    <svg
      style={{
        width: size,
        height: size,
      }}
      width='32'
      height='32'
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g>
        <path
          d='M27 9L13 23L6 16'
          stroke={color}
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </g>
    </svg>
  )
}

export default Check
