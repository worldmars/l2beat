import { Heading, OutLink } from '../../../common'
import { References } from './References'
import { RiskList, TechnologyRisk } from './RiskList'
import { Section } from './Section'

export interface TechnologySectionProps {
  id: string
  title: string
  items: TechnologyChoice[]
}

export interface TechnologyChoice {
  id: string
  name: string
  editLink: string
  issueLink: string
  description: string
  missingInfo: boolean
  referenceIds: number[]
  risks: TechnologyRisk[]
}

export function TechnologySection({
  id,
  title,
  items,
}: TechnologySectionProps) {
  return (
    <Section title={title} id={id}>
      {items.map((item, i) => (
        <div className="TechnologySection-Item" key={i}>
          <Heading
            level={3}
            id={item.id}
            title={item.name}
            links={[
              { name: 'Edit', href: item.editLink },
              { name: 'Issue', href: item.issueLink },
            ]}
          />
          <p>
            {item.missingInfo ? (
              <div className="TechnologySection-Missing">
                <span>This section needs more information</span>
                <OutLink href={item.editLink}>Contribute on Github</OutLink>
              </div>
            ) : (
              <>
                {item.description}
                <References ids={item.referenceIds} editLink={item.editLink} />
              </>
            )}
          </p>
          <RiskList risks={item.risks} />
        </div>
      ))}
    </Section>
  )
}
