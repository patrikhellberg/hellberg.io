import { ReactElement } from 'react'
import { iconData } from '@/utils/iconData'
import type { IconName } from '@/types'

type Props = {
  color?: string
  size?: number
}

const defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '32',
  height: '32',
  viewBox: '0 0 32 32',
  strokeWidth: '1',
  strokeMiterlimit: '10',
}

const svgIcons = (insertedProps: Props) =>
  Object.keys(iconData).reduce((obj, key) => {
    const curr = iconData[key as IconName]
    obj[key] = {
      ...curr,
      props: { ...defaultProps, ...curr.props, ...insertedProps },
    }
    return obj
  }, {} as { [key: string]: { children: ReactElement[]; props: Props } })

const Icon = (props: Props & { name?: IconName }) => {
  const { name, ...rest } = props
  if (!name) return null
  const icon = svgIcons(rest)?.[name]
  if (!icon) return null
  return (
    <svg
      style={!!props.size ? { height: props.size, width: props.size } : {}}
      {...icon.props}
    >
      {icon.children.map((child) => child)}
    </svg>
  )
}

export default Icon
