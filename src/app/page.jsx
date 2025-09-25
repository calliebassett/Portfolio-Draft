export default function Home() {
  const links = {
    email: "mailto:bassettcallie@outlook.com",
    resume: "/resume.pdf",
    linkedin: "#",
  };

  const projects = [
    {
      title: "Bike Crank — Total Deformation (ANSYS)",
      img: "/assets/bike-crank-deformation.png",
      summary: "Static structural: total deformation plot under pedal load; constrained at spindle; refined mesh near fillets.",
      skills: ["FEA", "ANSYS", "Meshing"],
      fit: "contain"
    },
    {
      title: "Diesel Fuel Tank — Translation (Simcenter Nastran)",
      img: "/assets/diesel-tank-translation.png",
      summary: "Global translation/stress visualization with mounting constraints; sizing study for wall thickness and supports.",
      skills: ["FEA", "Nastran", "Shell modeling"],
      fit: "contain"
    },
    {
      title: "Sand‑Cast Water Pump",
      img: "/assets/sand-cast-water-pump.jpg",
      summary: "Designed mold features and participated in pour; focused on gating/risers and post‑cast checks.",
      skills: ["Manufacturing", "Casting", "DFM"]
    },
    {
      title: "Marine Propeller",
      img: "/assets/marine-propeller.jpg",
      summary: "Modeled a 5‑blade propeller; explored blade twist and surface continuity.",
      skills: ["CAD", "Surfacing"]
    },
    {
      title: "Pencil + Sharpener Assembly",
      img: "/assets/pencil-sharpener-assembly.png",
      summary: "Parametric modeling, mates, and simple rendering for a consumer‑style assembly.",
      skills: ["CAD", "Assemblies", "Rendering"]
    },
    {
      title: "PCB Visualization",
      img: "/assets/pcb-board.jpg",
      summary: "3D PCB layout visualization for packaging/clearance checks.",
      skills: ["CAD", "Electro‑mechanical"]
    },
    {
      title: "Motor Mount — GD&T",
      img: "/assets/motor-mount-gdt.png",
      summary: "Drawing with datums and positional tolerances; emphasis on inspection clarity.",
      skills: ["GD&T", "Drawings"],
      fit: "contain"
    }
  ];

  return (
    <main className="min-h-screen scroll-smooth">
      {/* Header */}
      <header className="aura sticky top-0 z-50 border-b border-neutral-200 bg-white/85 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#work" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="grid h-7 w-7 place-items-center rounded-full border border-neutral-200 bg-white text-xs text-ink-700">CB</span>
            <span>Callie Bassett</span>
          </a>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#work" className="hover:text-surf-800 transition-colors">Work</a>
            <a href="#about" className="hover:text-surf-800 transition-colors">About</a>
          </nav>
          <a href={links.resume} className="rounded-xl border border-ink-900 px-3 py-1 text-sm font-medium hover:bg-ink-900 hover:text-white transition-colors">Resume</a>
        </div>
      </header>

      {/* Hero */}
      <section className="aura mx-auto max-w-6xl px-4 pt-14 pb-10">
        <div className="grid md:grid-cols-5 gap-10 items-end">
          <div className="md:col-span-3">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
              Mechanical engineer grounded in real‑world service.
            </h1>
            <p className="mt-4 text-ink-500 text-[15px] leading-relaxed">
              I bring shop‑floor lessons into CAD, drawings, and FEA.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#work" className="rounded-xl bg-leaf-700 px-4 py-2 text-white text-sm font-medium hover:bg-leaf-600 transition-colors">View work</a>
              <a href={links.resume} className="rounded-xl border border-ink-900 px-4 py-2 text-sm font-medium hover:bg-ink-900 hover:text-white transition-colors">Resume</a>
            </div>
          </div>
          <aside className="md:col-span-2">
            <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-soft">
              <div className="mb-4 overflow-hidden rounded-2xl border border-neutral-200">
                <img src="/assets/headshot.jpg" alt="Callie headshot" className="w-full h-40 object-contain" />
              </div>
              <h3 className="text-sm font-semibold text-ink-700">Snapshot</h3>
              <ul className="mt-2 text-[14px] text-ink-700 space-y-1.5">
                <li>• Field Service Engineer Apprentice — GE Healthcare</li>
                <li>• CAD • GD&T • FEA • DFM • Excel</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="mx-auto max-w-6xl px-4 pb-6">
        <h2 className="sr-only">Work</h2>
        <div className="grid grid-cols-1 gap-10">
          {projects.map((p) => (
            <article key={p.title} className="rounded-3xl overflow-hidden border border-neutral-200 bg-white shadow-soft">
              <div className="relative w-full">
                <img src={p.img} alt={p.title} className={p.fit==='contain' ? 'w-full h-[420px] md:h-[560px] object-contain' : 'w-full h-[420px] md:h-[560px] object-cover'} />
              </div>
              <div className="p-6 md:p-7">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-[15px] text-ink-700">{p.summary}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.skills.map((s) => (
                    <span key={s} className="rounded-full border border-neutral-200 bg-clay-100 px-3 py-1 text-[12px] text-ink-700">{s}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* About Me */}
      <section id="about" className="mx-auto max-w-6xl px-4 py-14">
        <div className="mx-auto w-full md:max-w-3xl">
          <div className="rounded-3xl border border-neutral-200 bg-white p-7 shadow-soft">
            <h2 className="text-2xl font-semibold">About me</h2>
            <div className="mt-4 grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-semibold text-ink-700 tracking-wide uppercase">Skills</h3>
                <ul className="mt-2 text-[15px] text-ink-700 space-y-1.5">
                  <li>• SolidWorks (CAD/assemblies)</li>
                  <li>• GD&T & drawings</li>
                  <li>• FEA (Ansys, Nastran)</li>
                  <li>• DFM</li>
                  <li>• Excel</li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-ink-700 tracking-wide uppercase">Experience summary</h3>
                <ul className="mt-2 text-[15px] text-ink-700 space-y-1.5">
                  <li>• Field Service Engineer Apprentice — GE Healthcare</li>
                  <li>• Lead Systems — Cal Poly Pomona Liquid Rocket Lab</li>
                  <li>• Mechanical Engineering Intern — Summit Machine (Precision Castparts)</li>
                </ul>
              </div>
            </div>
            <div className="mt-6">
              <p className="mt-2 text-[15px] text-ink-700">I work hands-on with X-ray systems, installing, troubleshooting, and repairing equipment that hospitals depend on. My background includes aerospace manufacturing and leading a rocket engine project, giving me both practical field expertise and design experience. Outside of work, I stay active with horses, fitness, and side projects that keep me learning and building.</p>
            </div>
          </div>
        </div>
        <p className="mt-10 text-center text-xs text-ink-500">© {new Date().getFullYear()} Callie Bassett</p>
      
      {/* Feature Photos */}
      <section className="mx-auto max-w-6xl px-4 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-soft">
            <img src="/assets/horse-1.jpg" alt="Horse" className="w-full h-[360px] object-contain" />
          </div>
          <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-soft">
            <img src="/assets/tractor-repair.jpg" alt="Tractor repair" className="w-full h-[360px] object-contain" />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-4 pb-14">
        <div className="rounded-3xl border border-neutral-200 bg-white p-7 shadow-soft">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="mt-2 text-[15px] text-ink-700">I’m easy to reach—email or LinkedIn both work.</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href={links.email} className="rounded-xl bg-leaf-700 px-4 py-2 text-white text-sm font-medium hover:bg-leaf-600">Email</a>
            <a href={links.linkedin} className="rounded-xl border border-ink-900 px-4 py-2 text-sm font-medium hover:bg-ink-900 hover:text-white">LinkedIn</a>
          </div>
        </div>
      </section>
</section>
    </main>
  );
}
