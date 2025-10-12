<template>
  <div class="bg-base min-h-screen">
    <!-- Header -->
    <HumanifyHeader background-color="crust" :dark-variant="true">
      <template #branding>
        <HumanifyLogo :link-to-front-page="true" />
      </template>
      <template #navigation>
        <HumanifyNavigation />
      </template>
    </HumanifyHeader>

    <!-- Hero Section -->
    <HumanifyHero
      title="White-label human intelligence for your AI projects"
      description="Leverage a team of smart, creative, and experienced humans, who <em>actually</em> know what they're doing. We deliver the work, and you can tell your customers and investors that it was done with AI."
      button-label="Get started today"
      button-link="/page/1"
      :dark-variant="true"
      background-color="crust"
      :image="{
        alt: 'Woman playing the violin',
        src: 'https://images.unsplash.com/photo-1484959014842-cd1d967a39cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
        width: 1770,
        height: 1180,
      }"
    />

    <!-- Services Section -->
    <HumanifySection background-color="mantle">
      <template #content>
        <HumanifyHeading text="Our team is here to help your AI agents look good." />
        <HumanifyParagraph text="We pretend to hallucinate as much as necessary to ease the transition to working with humans again, but we never let that slip into our final deliverables." />

        <HumanifyGrid>
        <template #content>
          <HumanifyCard
          title="Website design"
          description="Knowing where to take inspiration from and why can be useful."
          icon-name-from-lucide="layout"
          icon-color="blue"
        />
        <HumanifyCard
          title="Figma to code"
          description="Imagine code that people are not terrified to look at, let alone maintain."
          icon-name-from-lucide="code"
          icon-color="sky"
        />
        <HumanifyCard
          title="Marketing copy-writing"
          description="Sometimes it's advised not to sound like everyone else on the internet."
          icon-name-from-lucide="pen-tool"
          icon-color="mauve"
        />
        <HumanifyCard
          title="Social media"
          description="We'll give you a discount if we only have to deal with Bluesky."
          icon-name-from-lucide="share-2"
          icon-color="green"
        />
        <HumanifyCard
          title="Analytics and reporting"
          description="Our single promise is that we'll never include emojis in our reports."
          icon-name-from-lucide="bar-chart"
          icon-color="yellow"
        />
        <HumanifyCard
          title="Summarizing emails"
          description="We don't actually do this, but we needed six things for this grid to look nice."
          icon-name-from-lucide="mail"
          icon-color="pink"
        />
        </template>
        </HumanifyGrid>
      </template>
    </HumanifySection>

    <!-- Content Section -->
    <HumanifySection>
      <template #content>
        <HumanifyHeading text="Believe it or not, this copy was written by a human." />
        <HumanifyParagraph text="Something magical happens when humans make things. Depth, nuance, creativity, and original ideas appear in the work." />
      </template>
    </HumanifySection>

    <!-- Pricing Section -->
    <HumanifySection background-color="base" :dark-variant="true">
      <template #content>
        <HumanifyHeading text="Our pricing is based on the value you get." />
        <HumanifyParagraph text="If you're confused about what that means, just replace the word <em>value</em> with <em>tokens</em>. It doesn't make it less confusing, but we all came to accept it, didn't we?" />

        <HumanifyPricingTable
        entry-tier-name="Basic"
        entry-tier-description="Perfect for individuals and small projects"
        :entry-tier-price-monthly="600"
        :entry-tier-price-annual="480"
        mid-tier-name="Pro"
        mid-tier-description="Ideal for professionals and growing teams"
        :mid-tier-price-monthly="2500"
        :mid-tier-price-annual="2000"
        advanced-tier-name="Business"
        advanced-tier-description="For organizations with advanced needs"
        :advanced-tier-price-monthly="7500"
        :advanced-tier-price-annual="6000"
        default-tier="entry"
        :default-is-annual="false"
        annual-badge-text="Save 20%"
        button-label="Get started today with {tier}"
        button-link="/home"
        />
      </template>
    </HumanifySection>

    <!-- Footer -->
    <HumanifyFooter
      copyright-notice="&copy; 2025 Humanify Inc. All rights reserved."
      background-color="crust"
      :dark-variant="true"
    >
      <template #branding>
        <HumanifyLogo :link-to-front-page="false" />
      </template>
    </HumanifyFooter>
  </div>
</template>

<script setup lang="ts">
// Page metadata
useHead({
  title: 'Test Page - Humanify Components',
  meta: [
    { name: 'description', content: 'Test page showcasing Humanify components in Nuxt' }
  ]
})
</script>
