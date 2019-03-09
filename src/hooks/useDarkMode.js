import { useEffect, useState } from 'react'

const useDarkMode = () => {
  const [enabledState, setEnabledState] = useState(false);

  // Fire off effect that add/removes dark mode class
  useEffect(
    () => {
      const className = 'dark-mode';
      const element = window.document.body
      if (enabledState) {
        element.classList.add(className)
      } else {
        element.classList.remove(className)
      }
    },
    [enabledState]
  )

  // return enabled state and setter
  return [enabledState, setEnabledState]
}

// const usePrefersDarkMode = () => {
//   return useMedia(['(prefers-color-scheme: dark)'], [true], false)
// }

export default useDarkMode
