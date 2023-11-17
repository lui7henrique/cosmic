import { useState } from 'react'

type FeedItemExplanationProps = {
  explanation: string
}

export const FeedItemExplanation = ({
  explanation,
}: FeedItemExplanationProps) => {
  const [showFullExplanation, setShowFullExplanation] = useState(false)

  return (
    <>
      <p
        className={`text-xs ${
          showFullExplanation ? '' : 'line-clamp-3'
        } text-muted-foreground`}
      >
        {explanation}
      </p>

      <p
        className="mt-1 cursor-pointer text-xs text-muted-foreground underline"
        onClick={() => setShowFullExplanation((prev) => !prev)}
      >
        {showFullExplanation ? 'See less' : 'See more'}
      </p>
    </>
  )
}
