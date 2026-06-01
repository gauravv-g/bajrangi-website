'use client'

interface SectionDividerProps {
  variant?: 'wave' | 'diagonal' | 'fade'
  fromBg?: string
  toBg?: string
  flip?: boolean
  className?: string
}

export function SectionDivider({
  variant = 'wave',
  fromBg = '#0C0C0C',
  toBg = '#FAF3E0',
  flip = false,
  className = '',
}: SectionDividerProps) {
  if (variant === 'fade') {
    return (
      <div
        className={`w-full h-16 md:h-24 ${className}`}
        style={{
          background: `linear-gradient(${flip ? '180deg' : '0deg'}, ${fromBg}, ${toBg})`,
        }}
        aria-hidden="true"
      />
    )
  }

  if (variant === 'diagonal') {
    return (
      <div
        className={`w-full h-12 md:h-16 relative ${className}`}
        style={{ background: toBg }}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          className="w-full h-full block"
          style={{ transform: flip ? 'scaleY(-1)' : 'none' }}
        >
          <path
            d={flip ? 'M0,0 L0,60 L1440,0 Z' : 'M0,0 L1440,60 L1440,0 Z'}
            fill={fromBg}
          />
        </svg>
      </div>
    )
  }

  // Wave variant (default)
  return (
    <div
      className={`w-full h-10 md:h-[60px] relative ${className}`}
      style={{ background: toBg }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        className="w-full h-full block"
        style={{ transform: flip ? 'scaleY(-1)' : 'none' }}
      >
        <path
          d={
            flip
              ? 'M0,30 C360,0 720,60 1080,30 C1260,15 1380,30 1440,30 L1440,0 L0,0 Z'
              : 'M0,30 C360,60 720,0 1080,30 C1260,45 1380,30 1440,30 L1440,60 L0,60 Z'
          }
          fill={fromBg}
        />
      </svg>
    </div>
  )
}
