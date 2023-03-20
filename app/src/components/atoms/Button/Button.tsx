import React, { FC, ReactNode } from 'react'

type ButtonColor = 'primary'
type ButtonVariant = 'outline' | 'contained'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string
  label: string
  children: React.ReactNode
  variant: keyof typeof buttonStyle
}

const buttonStyle = {
  'green-fill': 'bg-green-400 text-white',
}

/**
 * Button
 */
export const Button: FC<Props> = ({
  children,
  variant,
  className,
  ...props
}: Props) => {
  return (
    <button className={`rounded-md`} {...props}>
      {children}
    </button>
  )
}

export default Button
