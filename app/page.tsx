import { CautionTape } from '@/components/site/caution-tape'
import { Donate } from '@/components/site/donate'
import { Features } from '@/components/site/features'
import { Modpack } from '@/components/site/modpack'
import { Rules } from '@/components/site/rules'
import { Hero } from '@/components/site/hero'
import { Join } from '@/components/site/join'
import { SiteFooter } from '@/components/site/site-footer'
import { TornDivider } from '@/components/effects/torn-divider'

export default function Page() {
  return (
    <>
      <main>
        <Hero />
        <TornDivider />
        <CautionTape />
        <Features />
        <TornDivider />
        <Modpack />
        <TornDivider />
        <Rules />
        <TornDivider />
        <Donate />
        <CautionTape />
        <TornDivider />
        <Join />
      </main>
      <SiteFooter />
    </>
  )
}
