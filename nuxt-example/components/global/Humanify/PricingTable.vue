<template>
  <div class="max-w-2xl">
    <!-- Billing toggle -->
    <div class="mb-8 flex items-center justify-center">
      <div class="w-24 text-right">
        <span
          :class="[
            'text-subtext-0/75 font-medium',
            !isAnnualLocal && 'text-mauve'
          ]"
        >
          Monthly
        </span>
      </div>

      <button
        @click="toggleAnnual"
        class="bg-surface-1 relative mx-3 h-7 w-14 cursor-pointer rounded-full border-0 p-0.5"
      >
        <div
          :class="[
            'border-flamingo bg-inverted-text absolute top-0.5 h-6 w-6 rounded-full border-2 transition-all duration-200',
            isAnnualLocal ? 'left-7' : 'left-0.5'
          ]"
        />
      </button>
      <div class="flex w-36 items-center">
        <span
          :class="[
            'text-subtext-0/75 font-medium',
            isAnnualLocal && 'text-mauve'
          ]"
        >
          Annual
        </span>
        <span
          :class="[
            'bg-green text-inverted-text ml-2 whitespace-nowrap rounded-full px-2 py-1 text-xs font-medium leading-none transition-opacity duration-200',
            isAnnualLocal ? 'opacity-100' : 'opacity-0'
          ]"
        >
          {{ annualBadgeText }}
        </span>
      </div>
    </div>

    <!-- Pricing tiers -->
    <div class="mb-6 flex flex-col gap-4 sm:flex-row">
      <div
        v-for="planName in ['entry', 'mid', 'advanced']"
        :key="planName"
        @click="selectTier(planName)"
        @keydown="handleKeydown($event, planName)"
        :data-state="selectedTierLocal === planName ? 'selected' : undefined"
        role="button"
        tabindex="0"
        :class="[
          'group flex-1 cursor-pointer rounded-lg p-5 transition-all duration-200',
          'bg-surface-1',
          'data-[state=selected]:outline-mauve data-[state=selected]:outline-offset-3 data-[state=selected]:outline-2',
          'focus-visible:outline-red focus-visible:outline-2 focus-visible:outline-offset-2'
        ]"
      >
        <h3 class="text-text mb-3 text-lg font-bold">
          {{ getTierName(planName) }}
        </h3>

        <div class="mb-4">
          <div class="text-text mb-1 text-2xl font-bold">
            ${{ getCurrentPrice(planName).toLocaleString() }}
          </div>
        </div>

        <div class="text-text text-sm leading-relaxed">
          {{ getTierDescription(planName) }}
        </div>
      </div>
    </div>

    <!-- Button -->
    <div>
      <a
        :href="buttonLink"
        :class="[
          'bg-mauve text-inverted-text hover:bg-mauve/75 inline-block w-full rounded-sm px-12 py-3 text-center text-sm font-medium transition',
          'focus-visible:outline-red focus-visible:outline-2 focus-visible:outline-offset-2'
        ]"
      >
        {{ buttonLabel.replace('{tier}', getTierName(selectedTierLocal)) }}
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = withDefaults(defineProps<{
  /**
   * Entry tier name
   * @example Basic
   */
  entryTierName?: string
  /**
   * Entry tier description
   * @example Perfect for individuals and small projects
   */
  entryTierDescription?: string
  /**
   * Entry tier monthly price
   * @example 600
   */
  entryTierPriceMonthly?: number
  /**
   * Entry tier annual price
   * @example 480
   */
  entryTierPriceAnnual?: number
  /**
   * Mid tier name
   * @example Pro
   */
  midTierName?: string
  /**
   * Mid tier description
   * @example Ideal for professionals and growing teams
   */
  midTierDescription?: string
  /**
   * Mid tier monthly price
   * @example 2500
   */
  midTierPriceMonthly?: number
  /**
   * Mid tier annual price
   * @example 2000
   */
  midTierPriceAnnual?: number
  /**
   * Advanced tier name
   * @example Business
   */
  advancedTierName?: string
  /**
   * Advanced tier description
   * @example For organizations with advanced needs
   */
  advancedTierDescription?: string
  /**
   * Advanced tier monthly price
   * @example 7500
   */
  advancedTierPriceMonthly?: number
  /**
   * Advanced tier annual price
   * @example 6000
   */
  advancedTierPriceAnnual?: number
  /**
   * Default selected tier
   * @example entry
   * @example mid
   * @example advanced
   */
  defaultTier?: 'entry' | 'mid' | 'advanced'
  /**
   * Default billing period
   * @example false
   * @example true
   */
  defaultIsAnnual?: boolean
  /**
   * Annual badge text
   * @example Save 20%
   */
  annualBadgeText?: string
  /**
   * Button label (use {tier} as placeholder)
   * @example Get started today with {tier}
   */
  buttonLabel?: string
  /**
   * Button link URL
   * @example /pricing
   */
  buttonLink?: string
}>(), {
  entryTierName: 'Basic',
  entryTierDescription: 'Perfect for individuals and small projects',
  entryTierPriceMonthly: 600,
  entryTierPriceAnnual: 480,
  midTierName: 'Pro',
  midTierDescription: 'Ideal for professionals and growing teams',
  midTierPriceMonthly: 2500,
  midTierPriceAnnual: 2000,
  advancedTierName: 'Business',
  advancedTierDescription: 'For organizations with advanced needs',
  advancedTierPriceMonthly: 7500,
  advancedTierPriceAnnual: 6000,
  defaultTier: 'entry',
  defaultIsAnnual: false,
  annualBadgeText: 'Save 20%',
  buttonLabel: 'Get started today with {tier}',
  buttonLink: '/home',
})

const isAnnualLocal = ref(props.defaultIsAnnual)
const selectedTierLocal = ref(props.defaultTier)

const tierNames = {
  entry: props.entryTierName,
  mid: props.midTierName,
  advanced: props.advancedTierName,
}

const tierDescriptions = {
  entry: props.entryTierDescription,
  mid: props.midTierDescription,
  advanced: props.advancedTierDescription,
}

const tierPrices = {
  entry: {
    monthly: props.entryTierPriceMonthly,
    annual: props.entryTierPriceAnnual,
  },
  mid: {
    monthly: props.midTierPriceMonthly,
    annual: props.midTierPriceAnnual,
  },
  advanced: {
    monthly: props.advancedTierPriceMonthly,
    annual: props.advancedTierPriceAnnual,
  },
}

const getCurrentPrice = (tierName: 'entry' | 'mid' | 'advanced') => {
  return tierPrices[tierName][isAnnualLocal.value ? 'annual' : 'monthly']
}

const getTierName = (tierName: 'entry' | 'mid' | 'advanced') => {
  return tierNames[tierName]
}

const getTierDescription = (tierName: 'entry' | 'mid' | 'advanced') => {
  return tierDescriptions[tierName]
}

const toggleAnnual = () => {
  isAnnualLocal.value = !isAnnualLocal.value
}

const selectTier = (tierName: 'entry' | 'mid' | 'advanced') => {
  selectedTierLocal.value = tierName
}

const handleKeydown = (e: KeyboardEvent, tierName: 'entry' | 'mid' | 'advanced') => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault()
    selectTier(tierName)
  }
}
</script>
