import { midpoint } from './midpoint'
import { BezierPathInfo } from "../types/BezierPathInfo.type"
import { Vec2 } from "../types/Vec2"
import { rotatePoint } from "./rotatePoint"

type Props = {
  center: Vec2
  angle: number
  path: BezierPathInfo[]
}

export const rotatePath = (props: Props): BezierPathInfo[] => {
  const rotated: BezierPathInfo[] = props.path.map((curve) => {
    const startAnchor: Vec2 = rotatePoint({ center: props.center, angle: props.angle, point: curve.startAnchor })
    const startControl: Vec2 = rotatePoint({ center: props.center, angle: props.angle, point: curve.startControl })
    const endControl: Vec2 = rotatePoint({ center: props.center, angle: props.angle, point: curve.endControl })
    const endAnchor: Vec2 = rotatePoint({ center: props.center, angle: props.angle, point: curve.endAnchor })
    const anchorMidpoint = midpoint(startAnchor, endAnchor)
    const controlMidpoint = midpoint(startControl, endControl)
    return { startAnchor: startAnchor, startControl: startControl, endControl: endControl, endAnchor: endAnchor, anchorMidpoint: anchorMidpoint, controlMidpoint: controlMidpoint }
  })

  return rotated
}