import type { SvgProps } from "react-native-svg"

import Calendar from "@/shared/assets/icons/calendar.svg"
import Check from "@/shared/assets/icons/check.svg"
import ChevronLeft from "@/shared/assets/icons/chevron-left.svg"
import ChevronRight from "@/shared/assets/icons/chevron-right.svg"
import Copy from "@/shared/assets/icons/copy.svg"
import CreditCard from "@/shared/assets/icons/credit-card.svg"
import DirectionUpRight from "@/shared/assets/icons/direction-up-right.svg"
import EditPen from "@/shared/assets/icons/edit-pen.svg"
import Filter from "@/shared/assets/icons/filter.svg"
import Minus from "@/shared/assets/icons/minus.svg"
import Multiply from "@/shared/assets/icons/multiply.svg"
import NoteWhiteText from "@/shared/assets/icons/note-white-text.svg"
import Plus from "@/shared/assets/icons/plus.svg"
import Search from "@/shared/assets/icons/search.svg"
import Shop from "@/shared/assets/icons/shop.svg"
import Tag from "@/shared/assets/icons/tag.svg"
import Trash2 from "@/shared/assets/icons/trash-2.svg"

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
