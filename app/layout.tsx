'use client'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { GlobalStyles } from '@/styles/GlobalStyles'
import styled from 'styled-components'

const Body = styled.body`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  flex-grow: 1;
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>NextRep Athletics - Science-Based Personal Training</title>
        <meta name="description" content="Where science meets strength. Evidence-based personal training combining CSCS certification with public health expertise." />
        <meta name="keywords" content="personal training, CSCS, fitness, strength training, health, wellness" />
      </head>
      <Body>
        <GlobalStyles />
        <Navbar />
        <Main>
          {children}
        </Main>
        <Footer />
      </Body>
    </html>
  )
}
