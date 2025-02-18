import { ProjectReference } from './ProjectReference'
import { ProjectRisk } from './ProjectRisk'

export interface ProjectTechnologyChoice {
  /** Name of the specific technology choice */
  name: string
  /** Description of the specific technology choice. Null means missing information */
  description: string | null
  /** List of references backing up the claim */
  references: ProjectReference[]
  /** List of risks associated with the technology choice */
  risks: ProjectRisk[]
}

export type ProjectExitMechanism = Omit<ProjectTechnologyChoice, 'shortName'>
