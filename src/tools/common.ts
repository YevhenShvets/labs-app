import type { Argument } from 'classnames'
import classnamesBase from 'classnames'
import { overrideTailwindClasses } from 'tailwind-override'

export const classnames = (...args: Argument[]) =>
  overrideTailwindClasses(classnamesBase(...args))

export const range = (n: number) => [...Array.from({ length: n }).keys()]
