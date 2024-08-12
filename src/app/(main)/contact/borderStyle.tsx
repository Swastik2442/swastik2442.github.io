'use client'

export default function style() {
  return (
    <style jsx global>{`
        .borderOne, .borderTwo {
            rotate: 0.5deg;
        }
        .borderThree, .borderFour {
            rotate: -2.5deg;
        }
    `}</style>
  )
}
