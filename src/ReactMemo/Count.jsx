import { memo, useRef } from "react"

export const Count = memo(() => {

const renderCont = useRef(0);

  return (
    <div>
      <p>There are no value changes but component rendered:</p>
      <span>{renderCont.current++} Times</span>
    </div>
  )
});