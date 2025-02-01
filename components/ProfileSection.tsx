import Image from "next/image"

const ProfileSection = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center">
      <div className="relative w-48 h-48 mb-8">
        <Image src="/me.jpg" alt="Amirhossein Salmani" layout="fill" objectFit="cover" className="rounded-full" />
      </div>
      <h1 className="text-4xl font-bold mb-4">Amirhossein Salmani</h1>
      <p className="text-xl mb-8">Full-stack developer</p>
      <a href="#contact" className="glass px-6 py-3 rounded-full hover:bg-blue-600 transition-colors">
        Get in touch
      </a>
    </section>
  )
}

export default ProfileSection

