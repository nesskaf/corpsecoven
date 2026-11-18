import { CautionTape } from '@/components/site/caution-tape'
import { Donate } from '@/components/site/donate'
import { Events } from '@/components/site/events'
import { Features } from '@/components/site/features'
import { Modpack } from '@/components/site/modpack'
import { Rules } from '@/components/site/rules'
import { Hero } from '@/components/site/hero'
import { Join } from '@/components/site/join'
import { SiteFooter } from '@/components/site/site-footer'

export default function Page() {
  return (
    <>
      <main>
        <Hero />
        <Features />
        <Modpack />
        <Rules />
        <Events />
        <Donate />
        <CautionTape />
        <Join />
      </main>
      <SiteFooter />
    </>
  )
}
