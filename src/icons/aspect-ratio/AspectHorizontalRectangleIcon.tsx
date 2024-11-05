import { Ref, SVGProps, forwardRef, memo } from 'react'

const RectangleHorizontalRectangleIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    fill={'none'}
    height={'1em'}
    ref={ref}
    viewBox={'0 0 26 20'}
    width={'1em'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <rect
      fill={'#fff'}
      height={24}
      rx={2}
      strokeWidth={2}
      transform={'rotate(90 25 1)'}
      width={18}
      x={25}
      y={1}
    />
  </svg>
)
const ForwardRef = forwardRef(RectangleHorizontalRectangleIcon)
const Memo = memo(ForwardRef)

export default Memo
