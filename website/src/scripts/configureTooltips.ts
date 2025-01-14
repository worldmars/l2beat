import { makeQuery } from './query'

export function configureTooltips() {
  const { $, $$ } = makeQuery(document.body)

  const elements = $$('.Tooltip[title]')

  const tooltip = $('.Tooltip-Popup')
  const tooltipText = $('.Tooltip-Popup span')
  const tooltipTriangle = $('.Tooltip-Triangle')

  let activeElement: HTMLElement | undefined
  let visible = false

  function show(element: HTMLElement, title: string) {
    visible = true
    activeElement = element
    const rect = activeElement.getBoundingClientRect()
    tooltipText.innerText = title
    tooltip.style.display = 'block'
    const tooltipWidth = tooltip.getBoundingClientRect().width
    const left = Math.max(rect.left + rect.width / 2 - tooltipWidth / 2, 10)
    tooltip.style.left = left + 'px'
    tooltip.style.top = rect.bottom + 7 + 'px'
    tooltip.style.right = 'unset'

    tooltipTriangle.style.left = rect.left + rect.width / 2 - 8 + 'px'
    tooltipTriangle.style.top = rect.bottom + 'px'

    if (left + tooltipWidth >= window.innerWidth - 10) {
      tooltip.style.left = 'unset'
      tooltip.style.right = '10px'
    }
  }

  function hide() {
    if (visible) {
      visible = false
      tooltip.style.display = 'none'
      activeElement = undefined
    }
  }

  window.addEventListener('resize', hide)
  document.querySelector('.FinancialView')?.addEventListener('scroll', hide)
  document.body.addEventListener('scroll', hide)
  document.body.addEventListener('click', (e) => {
    if (e.currentTarget !== tooltip) {
      hide()
    }
  })

  for (const element of elements) {
    const title = element.getAttribute('title') ?? ''
    element.removeAttribute('title')

    let mouseEnteredAt = Date.now()

    element.addEventListener('mouseenter', () => {
      mouseEnteredAt = Date.now()
      show(element, title)
    })
    element.addEventListener('mouseleave', hide)

    element.addEventListener('click', (e) => {
      e.stopPropagation()
      if (activeElement === element) {
        // only hide if immediately preceded by mouse enter
        if (Date.now() - mouseEnteredAt > 50) {
          hide()
        }
      } else {
        show(element, title)
      }
    })
  }
}
