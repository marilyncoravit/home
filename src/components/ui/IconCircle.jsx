import Icon from './Icon'

const colors = {
  mint: 'bg-mint-soft',
  blush: 'bg-blush/60',
  peach: 'bg-peach/60',
  sky: 'bg-sky/60',
  none: 'bg-paper',
}

export default function IconCircle({ icon, color = 'none', className = '' }) {
  return (
    <span
      className={`inline-flex h-11 w-11 items-center justify-center rounded-full hand-border ${colors[color]} ${className}`}
    >
      <Icon name={icon} className="h-5 w-5" />
    </span>
  )
}
