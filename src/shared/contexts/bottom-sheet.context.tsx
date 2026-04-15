import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type PropsWithChildren,
  type ReactNode,
} from "react"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import BottomSheet, {
  BottomSheetBackdrop,
  type BottomSheetBackdropProps,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet"

import { colors } from "@/shared/theme"

type BottomSheetConfig = {
  snapPoints?: string[]
  enablePanDownToClose?: boolean
}

type BottomSheetContextType = {
  isOpen: boolean
  content: ReactNode | null
  config: BottomSheetConfig

  openBottomSheet: (params: {
    content: ReactNode
    config?: BottomSheetConfig
  }) => void
  closeBottomSheet: () => void
}

const DEFAULT_CONFIG: BottomSheetConfig = {
  snapPoints: ["50%", "90%"],
  enablePanDownToClose: true,
}

const BottomSheetContext = createContext<BottomSheetContextType>(
  {} as BottomSheetContextType
)

export const BottomSheetProvider = ({ children }: PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState(false)
  const [content, setContent] = useState<ReactNode | null>(null)
  const [config, setConfig] = useState<BottomSheetConfig>(DEFAULT_CONFIG)

  const bottomSheetRef = useRef<BottomSheet>(null)
  const insets = useSafeAreaInsets()

  // Snap points memoizados
  const snapPoints = useMemo(
    () => config?.snapPoints || DEFAULT_CONFIG.snapPoints,
    [config?.snapPoints]
  )

  const openBottomSheet = useCallback(
    ({
      content: newContent,
      config: newConfig,
    }: {
      content: ReactNode
      config?: BottomSheetConfig
    }) => {
      setIsOpen(true)
      setContent(newContent)
      setConfig((prevConfig) => ({ ...prevConfig, ...newConfig }))
    },
    []
  )

  const closeBottomSheet = useCallback(() => {
    setIsOpen(false)
    setContent(null)
    setConfig(DEFAULT_CONFIG)
  }, [])

  const handleSheetChanges = useCallback(
    (index: number) => {
      if (index === -1) {
        closeBottomSheet()
      }
    },
    [closeBottomSheet]
  )

  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        opacity={0.7}
        pressBehavior="close"
      />
    ),
    []
  )

  useEffect(() => {
    if (isOpen && content) {
      bottomSheetRef.current?.snapToIndex(0) // Open the bottom sheet in the initial position of the first snap point configured
    } else {
      bottomSheetRef.current?.close() // Close the bottom sheet when isOpen becomes false or content is null
    }
  }, [isOpen, content])

  return (
    <BottomSheetContext.Provider
      value={{
        isOpen,
        content,
        config,
        openBottomSheet,
        closeBottomSheet,
      }}
    >
      {children}

      <BottomSheet
        ref={bottomSheetRef}
        backdropComponent={renderBackdrop}
        snapPoints={snapPoints}
        backgroundStyle={{
          backgroundColor: colors.white,
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
        }}
        handleIndicatorStyle={{
          backgroundColor: colors.gray[300],
          width: 50,
          height: 4,
        }}
        enablePanDownToClose={config?.enablePanDownToClose}
        index={-1} // Start closed
        animateOnMount
        onChange={handleSheetChanges}
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
