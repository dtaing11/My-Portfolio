// components/tech-stack.tsx
import { Badge } from "@/components/ui/badge"

const stackItems = [
  // Languages & Core
  "Dart · Flutter",
  "Go",
  "Python · FastAPI · PyTorch",
  "Java · Spring Boot",
  "JavaScript · TypeScript · React · Next.js",
  "C · C++",

  // Cloud & DevOps
  "AWS · Amplify · DynamoDB · Lambda",
  "GCP · Cloud Run · Compute VM",
  "Supabase · Realtime · Storage",
  "Firebase · Auth",
  "Docker",

  // Databases
  "PostgreSQL",

  // Communication & Infra
  "WebSockets",
  "GitHub Actions",

  // Testing
  "Unit Testing"
];


export default function TechStack() {
  return (
    <section className="space-y-4">
        <h2 id="tech-stack-heading" className="text-2xl font-semibold text-white"> Tech Stack </h2>
      <div className="flex flex-wrap gap-2">
        {stackItems.map((item) => (
          <Badge 
          className="bg-purple-500/20 text-white border  border-purple-400/40"
          key={item} variant="secondary">
            {item}
          </Badge>
        ))}
      </div>
    </section>
  )
}
