import type { SvgProps } from "react-native-svg"

import Calendar from "@/assets/icons/calendar.svg"
import Check from "@/assets/icons/check.svg"
import ChevronLeft from "@/assets/icons/chevron-left.svg"
import ChevronRight from "@/assets/icons/chevron-right.svg"
import Copy from "@/assets/icons/copy.svg"
import CreditCard from "@/assets/icons/credit-card.svg"
import DirectionUpRight from "@/assets/icons/direction-up-right.svg"
import EditPen from "@/assets/icons/edit-pen.svg"
import Filter from "@/assets/icons/filter.svg"
import Minus from "@/assets/icons/minus.svg"
import Multiply from "@/assets/icons/multiply.svg"
import NoteWhiteText from "@/assets/icons/note-white-text.svg"
import Plus from "@/assets/icons/plus.svg"
import Search from "@/assets/icons/search.svg"
import Shop from "@/assets/icons/shop.svg"
import Tag from "@/assets/icons/tag.svg"
import Trash2 from "@/assets/icons/trash-2.svg"

const icons = {
  calendar: Calendar,
  check: Check,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  copy: Copy,
  creditCard: CreditCard,
  directionUpRight: DirectionUpRight,
  editPen: EditPen,
  filter: Filter,
  minus: Minus,
  multiply: Multiply,
  noteWhiteText: NoteWhiteText,
  plus: Plus,
  search: Search,
  shop: Shop,
  tag: Tag,
  trash2: Trash2,
}

export type IconName = keyof typeof icons

type IconProps = SvgProps & {
  name: IconName
  size?: number
  color?: string
}

export const Icon = ({
  name,
  size = 24,
  color = "#000",
  ...rest
}: IconProps) => {
  const Component = icons[name]

  return (
    <Component
      width={size}
      height={size}
      // fill={color} // não foi necessário, pois o SVG tem fill="currentColor" quando necessário
      color={color}
      {...rest}
    />
  )
}
