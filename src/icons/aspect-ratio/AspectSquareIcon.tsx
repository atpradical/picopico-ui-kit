import { Ref, SVGProps, forwardRef, memo } from 'react'

const AspectSquareIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={'18'}
    ref={ref}
    viewBox={'0 0 18 18'}
    width={'18'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <rect height={16} rx={2} stroke={'#8D9094'} strokeWidth={2} width={16} x={1} y={1} />
  </svg>
)
const ForwardRef = forwardRef(AspectSquareIcon)
const Memo = memo(ForwardRef)

export default Memo
