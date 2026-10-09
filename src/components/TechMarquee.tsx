import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiLaravel,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGit,
} from 'react-icons/si'

const TECHS = [
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38BDF8' },
  { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#3C873A' },
    { name: 'Express', icon: SiExpress, color: '#9CA3AF' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
]

export default function TechMarquee() {
  const track = [...TECHS, ...TECHS]

  return (
    <div className="relative w-full max-w-lg overflow-hidden">
      <div
        className="absolute inset-y-0 left-0 w-10 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(90deg, var(--bg), transparent)' }}
      />
      <div
        className="absolute inset-y-0 right-0 w-10 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(270deg, var(--bg), transparent)' }}
      />

      <div className="marquee-track">
        {track.map((t, i) => {
          const Icon = t.icon
          return (
            <span
              key={t.name + i}
              className="flex items-center gap-2 pill glass px-4 py-2 text-sm shrink-0"
            >
              <Icon size={16} color={t.color} />
              <span className="text-muted">{t.name}</span>
            </span>
          )
        })}
      </div>
    </div>
  )
}