"use client"
import CardComponent from '@/components/Card'
import React from 'react'
import noBgBlack from "@/assets/noBgBlack.png"
import SSRPage from '../ssr/page'

const page = () => {
  return (
    <>
      <CardComponent src={noBgBlack.src} title="New StartUp Website" badge="Latest" description="With Fjord Tours you can explore more of the magical fjord landscapes with tours and
        activities on and around the fjords of Norway" btnText="Read More" />

      <SSRPage />
    </>
  )
}

export default page