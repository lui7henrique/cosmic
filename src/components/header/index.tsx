import { HeaderLink } from '../header-link'
import { Separator } from '../ui/separator'

export const Header = () => {
  return (
    <div className="flex w-screen items-center justify-center space-x-4 bg-[#f9f9f9] p-4  dark:bg-background/50">
      <HeaderLink href="/" label="Last pictures" />
      {/* <Separator orientation="vertical" className="h-6" /> */}
      <HeaderLink href="/timeline" label="Timeline" />
    </div>
  )
}
