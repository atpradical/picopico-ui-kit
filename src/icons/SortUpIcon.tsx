import { Ref, SVGProps, forwardRef, memo } from 'react'

const SortUpIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'currentColor'}
    height={'8'}
    ref={ref}
    viewBox={'0 0 8 5'}
    width={'5'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path d={'m4 0 3.464 4.5H.536z'} fill={'currentColor'} />
  </svg>
)
const ForwardRef = forwardRef(SortUpIcon)
const Memo = memo(ForwardRef)

export default Memo
