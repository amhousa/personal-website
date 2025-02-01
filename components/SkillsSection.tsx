import { Code, Database, Palette, Server } from "lucide-react"

const skills = [
  {
    category: "Frontend",
    icon: <Code className="w-8 h-8 mb-4" />,
    items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Nuxt.js", "Tailwind CSS"],
  },
  {
    category: "Backend",
    icon: <Server className="w-8 h-8 mb-4" />,
    items: ["Node.js", "Ruby", "Python", "Django", "Redis"],
  },
  {
    category: "Database",
    icon: <Database className="w-8 h-8 mb-4" />,
    items: ["PostgreSQL", "MySQL"],
  },
  {
    category: "Design",
    icon: <Palette className="w-6 h-8 mb-4" />,
    items: ["Figma", "Photoshop", "Illustrator"],
  },
]

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillSet, index) => (
            <div key={index} className="glass p-6 rounded-lg text-center">
              {skillSet.icon}
              <h3 className="text-xl font-semibold mb-4">{skillSet.category}</h3>
              <ul className="space-y-2">
                {skillSet.items.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection

