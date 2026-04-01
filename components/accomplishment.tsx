
import { Badge } from "@/components/ui/badge"

const stackItems = [
"President Honors Roll",
"Dean List",
"WICS 2023 Hackathon Best in Technical",
"SASE 2024 Hackathon Winner",
"Evening of Engineering Excellence Nominee",
"Best Capstone Project",
"WICS 2026 Hackathon Winner",
];

export default function Accomplishment() {
  return (
    <section className="space-y-2">
        <h2 id="tech-stack-heading" className="text-2xl font-semibold text-white"> Accomplishment </h2>
      <div className="flex flex-wrap gap-2">
        {stackItems.map((item) => (
          <Badge key={item} variant="secondary" className="bg-purple-500/20 text-white border  border-purple-400/40 hover:bg-amber-300/50 ">
            {item}
           
          </Badge>
        ))}
      </div>
    </section>
  )
}
