'use client'

export default function style() {
  return (
    <style jsx global>{`
      .borderOne {
        rotate: 1deg;
        bottom: calc(-12.5vh - (62.5vw * tan(1deg)));
      }
      .borderTwo {
        rotate: -1deg;
        bottom: calc(-12.5vh - (62.5vw * tan(1deg)));
      }
      .borderThree {
        rotate: 2.5deg;
        left: calc(-12.5vw - (62.5vh * tan(2.5deg)));
      }
      .borderFour {
        rotate: -1.5deg;
        right: calc(-12.5vw - (62.5vh * tan(1.5deg)));
      }
    `}</style>
  )
}
