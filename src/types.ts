import { SVGData } from '@hellberg/react-svg-icons'

export type YearMonth =
  | {
      year: number
      month: number
    }
  | 'current'

export type Experience = {
  title: string
  company: string
  start: YearMonth
  end: YearMonth
  description: string
  skills: string[]
}

export type Education = {
  title: string
  institution?: string
  description?: string
  year: number
  skills?: string[]
}

export type IconName = 'check' | 'linkedin' | 'github' | 'email' | 'phone'

export type ContactItem = {
  link: string
  text: string
  icon: SVGData
}
