import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
  type PropsWithChildren,
  type ReactNode,
} from "react"
import { TouchableWithoutFeedback, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet"

import { colors } from "@/theme"

type BottomSheetContextType = {
  openBottomSheet: (content: ReactNode, index?: number) => void
  closeBottomSheet: () => void
}

const BottomSheetContext = createContext<BottomSheetContextType>(
  {} as BottomSheetContextType
)

export const BottomSheetProvider = ({ children }: PropsWithChildren) => {
  const [content, setContent] = useState<ReactNode | null>(null)
  const [index, setIndex] = useState(-1) // -1 means closed

  const bottomSheetRef = useRef<BottomSheet>(null)
  const insets = useSafeAreaInsets()

  // Snap points memoizados
  const snapPoints = useMemo(() => ["50%", "70%", "90%"], [])

  const openBottomSheet = useCallback((newContent: ReactNode, newIndex = 1) => {
    setContent(newContent)
    setIndex(newIndex)

    requestAnimationFrame(() => {
      bottomSheetRef.current?.snapToIndex(newIndex)
    })
  }, [])

  const closeBottomSheet = useCallback(() => {
    setIndex(-1)
    setContent(null)

    bottomSheetRef.current?.close()
  }, [])

  const onChange = useCallback(
    (newIndex: number) => {
      if (newIndex === -1) {
        closeBottomSheet()
      }
    },
    [closeBottomSheet]
  )

  const isOpen = index >= 0

  return (
    <BottomSheetContext.Provider
      value={{
        openBottomSheet,
        closeBottomSheet,
      }}
    >
      {children}

      {isOpen && (
        <TouchableWithoutFeedback onPress={closeBottomSheet}>
          <View
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: "rgba(0, 0, 0, 0.2)",
            }}
          />
        </TouchableWithoutFeedback>
      )}

      <BottomSheet
        ref={bottomSheetRef}
        index={index}
        onChange={onChange}
        snapPoints={snapPoints}
        enablePanDownToClose
        // Android keyboard behavior
        keyboardBehavior="extend"
        keyboardBlurBehavior="restore"
        android_keyboardInputMode="adjustResize"
        backgroundStyle={{
          backgroundColor: colors.white,
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          elevation: 8,
        }}
        handleIndicatorStyle={{
          backgroundColor: colors.gray[300],
          width: 50,
          height: 4,
        }}
      >
        <BottomSheetScrollView
          contentContainerStyle={{
            paddingBottom: insets.bottom,
          }}
        >
          {content}
        </BottomSheetScrollView>
      </BottomSheet>
    </BottomSheetContext.Provider>
  )
}

export const useBottomSheet = () => useContext(BottomSheetContext)
