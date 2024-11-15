
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="flexCenter mb-24">
      <div className="px-40 max-container flex w-full flex-col ">
        <div className="flex flex-col items-center justify-center md:flex-row">
          <Link href="/" className="mb-10">
            <Image src="/logo.png" alt="logo" width={200} height={50} />
          </Link>
        </div>

        <div className="border bg-gray-20" />
        <p className="regular-14 w-full text-center text-gray-30 mt-8">2024 Sunchies</p>
      </div>
    </footer>
  )
}

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
}

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  )
}

export default Footer