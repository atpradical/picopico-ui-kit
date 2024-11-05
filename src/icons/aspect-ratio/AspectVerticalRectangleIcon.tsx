import { Ref, SVGProps, forwardRef, memo } from 'react'

const AspectVerticalRectangleIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={'18'}
    ref={ref}
    viewBox={'0 0 18 26'}
    width={'26'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <rect fill={'#fff'} height={24} rx={2} strokeWidth={2} width={16} x={1} y={1} />
  </svg>
)
const ForwardRef = forwardRef(AspectVerticalRectangleIcon)
const Memo = memo(ForwardRef)

export default Memo
