import React from "react";

const CONFIG = {
  name: "Your Full Name",
  title: "Full-Stack Developer • Designer",
  location: "Dhaka, Bangladesh",
  email: "you@example.com",
  phone: "+8801XXXXXXXXX",
  linkedin: "https://www.linkedin.com/",
  github: "https://github.com/",
  website: "#",
  profilePhoto: "/profile.jpg",
  about: "Hi — I build clean, accessible web experiences. I specialize in React, modern CSS, and building responsive interfaces. I love turning ideas into delightful products and writing maintainable code.",
  skills: ["React", "Tailwind CSS", "Node.js", "Git"],
  projects: [
    { title: "Project Alpha", desc: "A modern web app.", link: "#", repo: "#" },
    { title: "Research Paper — Sustainable Supply Chain", desc: "Quantitative analysis.", link: "#", repo: "#" },
    { title: "Portfolio Showcase", desc: "This static portfolio built with React + Tailwind.", link: "#", repo: "#" }
  ]
};

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="max-w-5xl mx-auto p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src={CONFIG.profilePhoto} alt="Profile" className="w-14 h-14 rounded-full object-cover border-2 border-gray-200" />
          <div>
            <h1 className="text-2xl font-semibold">{CONFIG.name}</h1>
            <p className="text-sm opacity-80">{CONFIG.title} — {CONFIG.location}</p>
          </div>
        </div>
        <nav className="hidden md:flex gap-4 items-center">
          <a href="#about" className="text-sm hover:underline">About</a>
          <a href="#projects" className="text-sm hover:underline">Projects</a>
          <a href="#skills" className="text-sm hover:underline">Skills</a>
          <a href="#contact" className="text-sm hover:underline">Contact</a>
          <a href={CONFIG.github} target="_blank" rel="noreferrer" className="ml-4 inline-block rounded-md px-3 py-2 border text-sm">GitHub</a>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto p-6 grid gap-10">
        <section className="grid md:grid-cols-3 gap-6 items-center bg-white rounded-2xl p-6 shadow">
          <div className="md:col-span-2">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">{CONFIG.name}</h2>
            <p className="mt-3 text-lg opacity-90">{CONFIG.title} — crafting thoughtful digital experiences focused on performance, accessibility, and sustainable practices.</p>
            <p className="mt-4 max-w-prose">{CONFIG.about}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={CONFIG.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border text-sm">LinkedIn</a>
              <a href={CONFIG.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border text-sm">GitHub</a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="w-44 h-44 rounded-2xl overflow-hidden shadow-lg border border-gray-200">
              <img src={CONFIG.profilePhoto} alt="profile" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        <section id="about" className="bg-white rounded-2xl p-6 shadow">
          <h3 className="text-xl font-semibold">About Me</h3>
          <p className="mt-3 text-sm opacity-90">{CONFIG.about}</p>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium">Experience</h4>
              <ul className="mt-3 space-y-3 text-sm opacity-90">
                <li><strong>JK Knit Composite Ltd</strong> — Assistant Merchandiser (Feb 2022 — Present)</li>
                <li><strong>Intern — Textile Lab</strong></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium">Education</h4>
              <div className="mt-3 text-sm opacity-90">
                <div><strong>B.Sc. in Textile Engineering</strong>, University Name</div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="bg-white rounded-2xl p-6 shadow">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold">Selected Projects</h3>
            <a href="#" className="text-sm opacity-80 hover:underline">See all</a>
          </div>
          <div className="mt-4 grid md:grid-cols-3 gap-4">
            {CONFIG.projects.map((p, i) => (
              <article key={i} className="rounded-lg p-4 border bg-gray-50">
                <h4 className="font-semibold">{p.title}</h4>
                <p className="mt-2 text-sm opacity-90">{p.desc}</p>
                <div className="mt-3 flex items-center gap-3">
                  <a href={p.link} className="text-sm underline">Live</a>
                  <a href={p.repo} className="text-sm underline">Repo</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="bg-white rounded-2xl p-6 shadow">
          <h3 className="text-xl font-semibold">Skills</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {CONFIG.skills.map((s, idx) => (
              <span key={idx} className="px-3 py-1 rounded-full border text-sm">{s}</span>
            ))}
          </div>
        </section>

        <section id="contact" className="bg-white rounded-2xl p-6 shadow">
          <h3 className="text-xl font-semibold">Contact</h3>
          <div className="mt-3 text-sm opacity-90 grid md:grid-cols-2 gap-6">
            <div>
              <p><strong>Email:</strong> <a href={`mailto:${CONFIG.email}`} className="underline">{CONFIG.email}</a></p>
              <p className="mt-2"><strong>Phone:</strong> {CONFIG.phone}</p>
              <p className="mt-2"><strong>Location:</strong> {CONFIG.location}</p>
              <div className="mt-4 flex gap-3">
                <a href={CONFIG.linkedin} target="_blank" rel="noreferrer" className="text-sm underline">LinkedIn</a>
                <a href={CONFIG.github} target="_blank" rel="noreferrer" className="text-sm underline">GitHub</a>
              </div>
            </div>

            <div>
              <form action={`mailto:${CONFIG.email}`} method="post" encType="text/plain" className="space-y-3">
                <div>
                  <label className="text-xs">Name</label>
                  <input name="Name" className="w-full mt-1 p-2 rounded-md border" />
                </div>
                <div>
                  <label className="text-xs">Message</label>
                  <textarea name="Message" rows={5} className="w-full mt-1 p-2 rounded-md border" />
                </div>
                <div>
                  <button type="submit" className="inline-block px-4 py-2 rounded-md border">Send</button>
                </div>
              </form>
            </div>
          </div>
        </section>

        <footer className="text-center text-sm opacity-80 py-6">© {new Date().getFullYear()} {CONFIG.name} — Built with ❤️ • Ready for GitHub Pages</footer>
      </main>
    </div>
  );
}
