import { Ref, SVGProps, forwardRef, memo } from 'react'

const LogoLight = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={'108'}
    ref={ref}
    viewBox={'0 0 108 108'}
    width={'108'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <rect fill={'#fff'} height={108} rx={15} width={108} />
    <circle cx={54} cy={54} fill={'#4C8DFF'} r={25} stroke={'#333'} strokeWidth={10} />
  </svg>
)
const ForwardRef = forwardRef(LogoLight)
const Memo = memo(ForwardRef)

export default Memo
