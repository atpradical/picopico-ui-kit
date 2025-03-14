import { Ref, SVGProps, forwardRef, memo } from 'react'

type IconProps = { isDark?: boolean } & SVGProps<SVGSVGElement>

const PaypalIcon = ({ isDark = false, ...props }: IconProps, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={'16'}
    ref={ref}
    viewBox={'0 0 24 16'}
    width={'24'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <defs>
      <clipPath id={'paypal_svg__a'}>
        <rect
          fill={isDark ? 'transparent' : '#fff'}
          fillOpacity={0}
          height={15}
          rx={0.5}
          transform={'translate(.5 .5)'}
          width={23}
        />
      </clipPath>
    </defs>
    <rect fill={'none'} height={15} rx={0.5} transform={'translate(.5 .5)'} width={23} />
    <g clipPath={'url(#paypal_svg__a)'}>
      <path
        d={
          'M22.52 0H1.47C.65 0 0 .64 0 1.43v13.13C0 15.35.65 16 1.47 16h21.05c.82 0 1.48-.65 1.48-1.44V1.43C24 .64 23.34 0 22.52 0'
        }
        fill={isDark ? '#171717' : '#FFF'}
      />
      <path
        d={
          'M1.47 0h21.05C23.34 0 24 .64 24 1.43v13.13c0 .79-.66 1.44-1.48 1.44H1.47C.65 16 0 15.35 0 14.56V1.43C0 .64.65 0 1.47 0m0 1h21.05q.12 0 .21.04.07.03.14.09.07.07.1.16.03.07.03.14v13.13q0 .07-.03.14-.03.09-.1.16-.07.06-.14.09-.09.05-.21.05H1.47q-.12 0-.21-.05-.07-.03-.14-.09-.07-.07-.1-.16-.02-.07-.02-.14V1.43q0-.07.02-.14.03-.09.1-.16.07-.06.14-.09.09-.04.21-.04'
        }
        fill={isDark ? 'transparent' : '#F3F3F3'}
        fillRule={'evenodd'}
      />
      <path
        d={
          'm10.85 8.1.11-.66-.23-.01H9.62l.77-4.91c0-.02.01-.03.02-.04s.03-.02.04-.02h1.87c.63 0 1.06.13 1.28.39.11.12.17.25.2.38.04.15.04.32.01.53l-.01.02v.14l.11.06c.09.04.16.1.21.16.09.1.15.23.17.39.03.16.02.35-.02.56-.05.25-.13.46-.23.64-.1.16-.22.29-.37.4-.13.1-.3.17-.49.22-.18.05-.38.07-.61.07h-.15c-.1 0-.2.04-.28.11s-.13.16-.15.26l-.01.06-.19 1.18v.04c-.01.01-.01.02-.02.02 0 .01-.01.01-.01.01z'
        }
        fill={'#28356A'}
        fillRule={'evenodd'}
      />
      <path
        d={
          'M14.01 3.8c-.01.03-.01.07-.02.11-.25 1.27-1.09 1.71-2.17 1.71h-.55c-.14 0-.25.09-.27.22l-.36 2.3c-.01.09.05.17.14.17h.98c.11 0 .21-.09.23-.2l.01-.05.18-1.17.01-.06c.02-.12.12-.2.23-.2h.15c.94 0 1.68-.39 1.9-1.5.09-.47.04-.85-.19-1.13-.08-.08-.17-.15-.27-.2'
        }
        fill={'#298FC2'}
        fillRule={'evenodd'}
      />
      <path
        d={
          'm13.75 3.69-.12-.03c-.04-.01-.08-.01-.12-.02-.15-.03-.31-.04-.49-.04h-1.46a.257.257 0 0 0-.24.2l-.31 1.99-.01.05c.02-.13.13-.22.27-.22h.55c1.08 0 1.92-.44 2.17-1.71.01-.04.01-.08.02-.11a.7.7 0 0 0-.21-.09c-.01-.01-.03-.01-.05-.02'
        }
        fill={'#22284F'}
        fillRule={'evenodd'}
      />
      <path
        d={
          'M11.32 3.8a.26.26 0 0 1 .24-.2h1.46c.18 0 .34.02.49.04.04.01.08.01.12.02l.12.03c.02.01.04.01.06.02.07.02.14.05.2.09.07-.47 0-.79-.26-1.08-.28-.32-.78-.46-1.43-.46h-1.87c-.13 0-.24.1-.26.23l-.78 4.96c-.02.1.06.19.15.19h1.16zM5.33 9.45H3.97c-.1 0-.18.07-.19.16l-.55 3.52c-.01.07.04.13.11.13h.65c.09 0 .17-.07.19-.16l.15-.95c.01-.09.09-.16.19-.16h.43c.9 0 1.42-.44 1.55-1.3.06-.38.01-.68-.17-.89-.2-.23-.54-.35-1-.35m.16 1.29c-.07.49-.45.49-.81.49h-.21l.15-.92c.01-.06.05-.1.11-.1h.09c.25 0 .48 0 .6.14.08.09.1.21.07.39M9.45 10.69H8.8c-.06 0-.11.04-.11.1l-.03.18-.05-.06c-.14-.21-.46-.28-.77-.28-.72 0-1.34.55-1.46 1.32-.07.39.02.75.24 1.01.2.23.49.33.83.33.58 0 .9-.37.9-.37l-.03.18c-.01.07.04.13.11.13h.59c.1 0 .18-.07.19-.16l.35-2.25c.02-.06-.04-.13-.11-.13m-.91 1.28c-.06.37-.36.63-.74.63-.19 0-.34-.06-.44-.18a.6.6 0 0 1-.1-.46c.06-.37.36-.63.73-.63.19 0 .34.06.44.18.1.11.14.28.11.46M12.89 10.75h-.66c-.06 0-.12.03-.16.08l-.9 1.34-.39-1.29c-.02-.08-.1-.13-.18-.13h-.65c-.08 0-.13.08-.11.15l.73 2.13-.68.97c-.06.07 0 .18.09.18h.66c.06 0 .12-.03.15-.09l2.19-3.16c.05-.08 0-.18-.09-.18'
        }
        fill={'#28356A'}
        fillRule={'evenodd'}
      />
      <path
        d={
          'M15.08 9.45h-1.37c-.09 0-.17.07-.19.16l-.55 3.52c-.01.07.04.13.11.13h.71c.06 0 .12-.05.13-.11l.15-1c.02-.09.1-.16.19-.16h.43c.9 0 1.42-.44 1.56-1.3.06-.38 0-.68-.18-.89-.19-.23-.53-.35-.99-.35m.16 1.29c-.08.49-.45.49-.81.49h-.21l.14-.92c.01-.06.06-.1.12-.1h.09c.25 0 .48 0 .6.14.07.09.09.21.07.39M19.2 10.69h-.66c-.05 0-.1.04-.11.1l-.03.18-.04-.06c-.15-.21-.46-.28-.78-.28-.72 0-1.34.55-1.46 1.32-.06.39.03.75.25 1.01.2.23.48.33.82.33.58 0 .91-.37.91-.37l-.03.18c-.01.07.04.13.11.13h.59c.09 0 .17-.07.19-.16l.35-2.25c.01-.06-.04-.13-.11-.13m-.91 1.28c-.07.37-.36.63-.74.63-.19 0-.34-.06-.44-.18a.52.52 0 0 1-.1-.46c.05-.37.36-.63.73-.63.18 0 .34.06.43.18.1.11.14.28.12.46M19.91 9.55l-.56 3.58c-.01.07.05.13.12.13h.56c.09 0 .17-.07.19-.16l.55-3.52a.11.11 0 0 0-.11-.13h-.63c-.06 0-.11.04-.12.1'
        }
        fill={'#298FC2'}
        fillRule={'evenodd'}
      />
    </g>
  </svg>
)
const ForwardRef = forwardRef(PaypalIcon)
const Memo = memo(ForwardRef)

export default Memo
