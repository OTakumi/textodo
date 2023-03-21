import React from 'react'

type Props = React.ComponentPropsWithoutRef<'button'> & {
	className?: string
	children: React.ReactNode
}

/**
 * Button
 */
const Button = ({children, className, ...props}: Props) => {
  return (
  <>
    <button
		type='button'
		className={className}
		{...props}
	>
		{children}
    </button>
  </>)
}

export default Button
