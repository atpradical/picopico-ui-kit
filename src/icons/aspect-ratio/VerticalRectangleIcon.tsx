import { Ref, SVGProps, forwardRef, memo } from 'react'

const VerticalRectangleIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={'26'}
    ref={ref}
    viewBox={'0 0 18 26'}
    width={'18'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <rect height={24} rx={2} stroke={'#fff'} strokeWidth={2} width={16} x={1} y={1} />
  </svg>
)
const ForwardRef = forwardRef(VerticalRectangleIcon)
const Memo = memo(ForwardRef)

export default Memo
