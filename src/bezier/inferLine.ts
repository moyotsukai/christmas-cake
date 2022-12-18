import { sin } from '../utils/Math';
import { Vec2 } from '../types/Vec2'
import { cos } from '../utils/Math'

type Props = {
  point: Vec2,
  angle: number
}

export const inferLine = (props: Props): [Vec2, Vec2] => {
  const { point, angle } = props
  const lineLength = 1000
  const endPoint: Vec2 = {
    x: point.x + cos(angle) * lineLength,
    y: point.y - sin(angle) * lineLength
  }

  return [point, endPoint]
}