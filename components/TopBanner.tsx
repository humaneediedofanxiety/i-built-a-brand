import Link from "next/link"

export default function TopBanner() {
  return (
    <div className="w-full bg-white text-black text-center py-2">
      <p className="text-sm font-semibold">
        Launch Your Idea in 5 Days!{" "}
        <Link href="#" className="underline">
          Learn More
        </Link>
      </p>
    </div>
  )
}

