import styles from './local-dx-grid.module.css'
import React from 'react'
import { cn } from 'ui'
import { useBreakpoint } from 'common'
import page from '~/data/products/functions/page'
import Panel from '../../Panel'

export default function LocalDXGrid() {
  const isXs = useBreakpoint(640)
  const pageData = page(isXs)

  return (
    <div
      className={cn(
        'h-auto flex flex-col md:grid grid-cols-2 lg:grid-cols-3 gap-5 lg:flex-row',
        styles['local-dx-grid']
      )}
    >
      {pageData.localDXsection.cards.map((card) => (
        <Content key={card.id} card={card} />
      ))}
    </div>
  )
}

const Content = ({ card }: { card: any }) => {
  const isHoriz = card.id === 'ci'

  return (
    <Panel
      key={card.label}
      outerClassName="w-full group"
      innerClassName={cn(
        'relative flex flex-col min-h-[300px] lg:min-h-[300px]',
        isHoriz && 'lg:flex-row lg:items-end'
      )}
      style={{ gridArea: card.id }}
    >
      <div
        className={cn(
          'relative flex-1 h-full w-full flex items-center',
          isHoriz && 'lg:order-last flex-1 h-full'
        )}
      >
        {card.image}
      </div>
      <div className={cn('flex flex-col gap-1 p-4 lg:p-6 !pt-0', isHoriz && 'lg:w-1/3')}>
        <h3 className="text-xl text-foreground">{card.label}</h3>
        <div className={cn('flex-1 flex flex-col justify-between gap-2', isHoriz && 'flex-auto')}>
          <p className="text-sm text-foreground-lighter">{card.paragraph}</p>
        </div>
      </div>
    </Panel>
  )
}
