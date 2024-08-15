"use client"

export default function bordersStyle({ up = 0, down = 0, left = 0, right = 0 } : { up?: number, down?: number, left?: number, right?: number }) {
  return (
    <style jsx global>{`
      .borderOne {
        rotate: ${up}deg;
        top: calc(-12.5vh - (62.5vw * tan(${up}deg)));
      }
      .borderTwo {
        rotate: ${down}deg;
        bottom: calc(-12.5vh - (62.5vw * tan(${down}deg)));
      }
      .borderThree {
        rotate: ${left}deg;
        left: calc(-12.5vw - (62.5vh * tan(${left}deg)));
      }
      .borderFour {
        rotate: ${right}deg;
        right: calc(-12.5vw - (62.5vh * tan(${right}deg)));
      }
    `}</style>
  )
}
