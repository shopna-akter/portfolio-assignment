// pages/index.tsx
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-between">
      <Navbar />
      
      <main className="container mx-auto py-10 text-center">
        {/* Hero Section */}
        <section>
          <h1 className="text-4xl font-bold">Nihal's Portfolio</h1>
          <p className="text-gray-400 mt-2">React Developer | MERN Stack Enthusiast</p>
          <div className="mt-4">
            <a
              href="/resume.pdf"
              download
              className="px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              Download Resume
            </a>
          </div>
        </section>
      
        {/* Skills Section */}
        <section className="py-10">
          <h2 className="text-2xl font-semibold text-center">Skills</h2>
          <div className="flex justify-center gap-6 mt-4">
            <Image src="/icons/react.svg" alt="React" width={50} height={50} />
            <Image src="/icons/nextjs.svg" alt="Next.js" width={50} height={50} />
            <Image src="/icons/tailwind.svg" alt="Tailwind CSS" width={50} height={50} />
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="py-10">
          <h2 className="text-2xl font-semibold text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold">Project Name</h3>
              <p className="text-gray-400">Short description of the project.</p>
              <a href="#" className="text-blue-400 hover:underline">View Project</a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
