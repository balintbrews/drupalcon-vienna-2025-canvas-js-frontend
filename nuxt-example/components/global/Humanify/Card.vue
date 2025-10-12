<template>
  <div class="bg-surface-0 flex flex-col gap-3 rounded-lg p-6">
    <div
      v-if="iconNameFromLucide"
      :class="cardVariants({ iconColor })"
      :style="{
        maskImage: `url(https://esm.sh/lucide-static@0.544.0/icons/${iconNameFromLucide}.svg)`,
        maskSize: 'contain',
        maskRepeat: 'no-repeat',
        maskPosition: 'center',
        WebkitMaskImage: `url(https://esm.sh/lucide-static@0.544.0/icons/${iconNameFromLucide}.svg)`,
        WebkitMaskSize: 'contain',
        WebkitMaskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
      }"
    />
    <h3 v-if="title" class="text-text text-lg font-semibold">
      {{ title }}
    </h3>
    <p v-if="description" class="text-subtext-0" v-html="description" />
  </div>
</template>

<script setup lang="ts">
import { cva } from 'class-variance-authority'

withDefaults(defineProps<{
  /**
   * Card title
   * @example Featured Article
   * @example Product Showcase
   */
  title?: string
  /**
   * Card description (supports HTML)
   * @example Learn more about our services
   * @example Discover new features
   */
  description?: string
  /**
   * Lucide icon name (from https://lucide.dev)
   * @example heart
   * @example star
   * @example zap
   */
  iconNameFromLucide?: string
  /**
   * Icon color
   * @example teal
   * @example mauve
   * @example blue
   */
  iconColor?: 'text' | 'rosewater' | 'flamingo' | 'pink' | 'mauve' | 'red' | 'maroon' | 'peach' | 'yellow' | 'green' | 'teal' | 'sky' | 'sapphire' | 'blue' | 'lavender'
}>(), {
  title: '',
  description: '',
  iconNameFromLucide: '',
  iconColor: 'teal',
})

const cardVariants = cva("size-8", {
  variants: {
    iconColor: {
      text: "bg-text",
      rosewater: "bg-rosewater",
      flamingo: "bg-flamingo",
      pink: "bg-pink",
      mauve: "bg-mauve",
      red: "bg-red",
      maroon: "bg-maroon",
      peach: "bg-peach",
      yellow: "bg-yellow",
      green: "bg-green",
      teal: "bg-teal",
      sky: "bg-sky",
      sapphire: "bg-sapphire",
      blue: "bg-blue",
      lavender: "bg-lavender",
    },
  },
  defaultVariants: {
    iconColor: "teal",
  },
})
</script>
