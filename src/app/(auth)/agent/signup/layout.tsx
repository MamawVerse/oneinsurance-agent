'use client'

import { useEffect } from 'react'

export default function AgentSignUpLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return <div>{children}</div>
}
