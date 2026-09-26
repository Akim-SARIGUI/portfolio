export interface Profile {
  id: string
  firstName: string
  lastName: string
  title: string
  bio: string
  email: string
  phone: string | null
  linkedin: string | null
  github: string | null
  location: string | null
  available: boolean
  yearsXp: number
  photoUrl: string | null
  cvUrl: string | null
}

export interface ProjectTech {
  name: string
  icon: string
  color: string
}

export interface Project {
  id: string
  name: string
  description: string
  features: string[]
  technologies: ProjectTech[]
  image: string
  liveUrl: string | null
  githubUrl: string | null
  category: string
  icon: string
  color: string
  gradient: string
  status: string
  year: string
}

export interface Experience {
  id: string
  position: string
  company: string
  period: string
  description: string
  achievements: string[]
  skills: string[]
  icon: string
  companyIcon: string
  gradient: string
}

export interface Skill {
  id: string
  name: string
  category: string
  level: number | null
  description: string | null
  icon: string
  color: string | null
  bgColor: string | null
  gradient: string | null
  type: string | null
}

export interface SkillsGrouped {
  technical: Skill[]
  frameworks: Skill[]
  tools: Skill[]
  databases: Skill[]
  soft: Skill[]
}

export interface CreateMessagePayload {
  name: string
  email: string
  subject: string
  message: string
}
