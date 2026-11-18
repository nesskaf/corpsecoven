import { CautionTape } from '@/components/site/caution-tape'
import { Events } from '@/components/site/events'
import { Gamemodes } from '@/components/site/gamemodes'
import { Hero } from '@/components/site/hero'
import { Join } from '@/components/site/join'
import { Ranks } from '@/components/site/ranks'
import { SiteFooter } from '@/components/site/site-footer'

export default function Page() {
  return (
    <>
      <main>
        <Hero />
        <Gamemodes />
        <Ranks />
        <Events />
        <CautionTape />
        <Join />
      </main>
      <SiteFooter />
    </>
  )
}
