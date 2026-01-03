import { Link } from "react-router-dom";

function About() {
  return (
    <section className="min-h-screen bg-gray-100 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            About CodingChronicles
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A personal tech blog focused on learning, building, and growing as a developer.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8 mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
             Who I Am
          </h2>
          <p className="text-gray-700 leading-relaxed">
            I'm <span className="font-semibold">Faizan</span>, a passionate learner
            documenting my coding journey. CodingChronicles was created to help
            beginners understand programming concepts through simple explanations
            and real-world examples.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
             Topics I Covered
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>C++ & Object-Oriented Programming</li>
              <li>Python Basics & Problem Solving</li>
              <li>React & Modern JavaScript</li>
              <li>Tailwind CSS & UI Design</li>
              <li>Full-Stack Web Development</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
             My Mission
          </h2>
            <p className="text-gray-700 leading-relaxed">
              My goal is to make learning to code less overwhelming by breaking
              complex topics into clear, beginner-friendly content that actually
              helps you build confidence and projects.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
             Why CodingChronicles?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            This blog is not about perfection — it’s about progress. Everything
            shared here comes from hands-on practice, mistakes, and lessons learned
            while building real applications.
          </p>
        </div>

        <div className="text-center">
          <Link
            to="/posts"
            className="inline-block bg-blue-600 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
          >
            Read Blog Posts
          </Link>
        </div>
      </div>
    </section>
  );
}

export default About;
