import { useEffect, useState } from 'react'

const useMedia = (queries, values, defaultValue) => {
  const mediaQueryLists = queries.map(q => window.matchMedia(q));

  const getValue = () => {
    const index = mediaQueryLists.findIndex(mql => mql.matches)

    return typeof values[index] !== 'undefined' ? values[index] : defaultValue;
  }

  // state and setter for matched value
  const [value, setValue] = useState(getValue);

  useEffect(
    () => {
      // by defining getValue outside of useEffect we ensure that is has
      // current values of hook args (as this hook callback is created once on mount).
      const handler = () => setValue(getValue);

      // set a listener for each media query with above handler as callback
      mediaQueryLists.forEach(mql => mql.addListener(handler));

      return () => mediaQueryLists.forEach(mql => mql.removeListener(handler))
    },
    []
  )

  return value
}

export default useMedia
