import Features from "@/components/Features";
import Banner from "@/components/Banner";
import Content from "@/components/Content";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { LINK_SOCIAL_MEDIA } from "@/constants";

export default function Home() {
  return (
    <>
      <Banner />
      <Content />
      <Features />
      <Link
        href={LINK_SOCIAL_MEDIA.fb}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
      >
        <FaFacebook size={24} />
      </Link>
    </>
  )
}
