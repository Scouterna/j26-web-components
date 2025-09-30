import { Component, h, Prop } from "@stencil/core";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/utils";

const buttonVariants = cva(
  `
    flex items-center justify-center
    cursor-pointer
    border border-transparent
    ring-offset-2
    leading-none font-sans font-medium
    disabled:opacity-40
  `,
  {
    variants: {
      color: {
        gray: `
          [--btn-text:var(--color-gray-800)]
          [--btn-border:var(--color-gray-400)]
          [--btn-bg:var(--color-gray-200)]
          [--btn-bg-hover:var(--color-gray-4300)]
          [--btn-bg-active:var(--color-gray-400)]
          
          [--btn-bg-text-hover:var(--color-gray-200)]
          [--btn-bg-text-active:var(--color-gray-300)]
        `,
        blue: `
          [--btn-text:var(--color-white)]
          [--btn-border:var(--color-blue)]
          [--btn-bg:var(--color-background-brand-base)]
          [--btn-bg-hover:var(--color-background-brand-hovered)]
          [--btn-bg-active:var(--color-background-brand-pressed)]
          
          [--btn-bg-text-hover:var(--color-bluegray-100)]
          [--btn-bg-text-active:var(--color-bluegray-200)]
        `,
        orange: `
          [--btn-text:var(--color-white)]
          [--btn-border:var(--color-orange)]
          [--btn-bg:var(--color-orange)]
          [--btn-bg-hover:var(--color-orange-hover)]
          [--btn-bg-active:var(--color-orange-active)]
          
          [--btn-bg-text-hover:var(--color-orange-100)]
          [--btn-bg-text-active:var(--color-orange-200)]
        `,
        red: `
          [--btn-text:var(--color-white)]
          [--btn-border:var(--color-red)]
          [--btn-bg:var(--color-red)]
          [--btn-bg-hover:var(--color-red-hover)]
          [--btn-bg-active:var(--color-red-active)]
          
          [--btn-bg-text-hover:var(--color-red-100)]
          [--btn-bg-text-active:var(--color-red-200)]
        `,
        trackergreen: `
          [--btn-text:var(--color-white)]
          [--btn-border:var(--color-trackergreen)]
          [--btn-bg:var(--color-trackergreen)]
          [--btn-bg-hover:var(--color-trackergreen-hover)]
          [--btn-bg-active:var(--color-trackergreen-active)]
          
          [--btn-bg-text-hover:var(--color-trackergreen-100)]
          [--btn-bg-text-active:var(--color-trackergreen-200)]
        `,
        discovererblue: `
          [--btn-text:var(--color-white)]
          [--btn-border:var(--color-discovererblue)]
          [--btn-bg:var(--color-discovererblue)]
          [--btn-bg-hover:var(--color-discovererblue-hover)]
          [--btn-bg-active:var(--color-discovererblue-active)]
          
          [--btn-bg-text-hover:var(--color-discovererblue-100)]
          [--btn-bg-text-active:var(--color-discovererblue-200)]
        `,
        adventurerorange: `
          [--btn-text:var(--color-white)]
          [--btn-border:var(--color-adventurerorange)]
          [--btn-bg:var(--color-adventurerorange)]
          [--btn-bg-hover:var(--color-adventurerorange-hover)]
          [--btn-bg-active:var(--color-adventurerorange-active)]
          
          [--btn-bg-text-hover:var(--color-adventurerorange-100)]
          [--btn-bg-text-active:var(--color-adventurerorange-200)]
        `,
        challengerpink: `
          [--btn-text:var(--color-white)]
          [--btn-border:var(--color-challengerpink)]
          [--btn-bg:var(--color-challengerpink)]
          [--btn-bg-hover:var(--color-challengerpink-hover)]
          [--btn-bg-active:var(--color-challengerpink-active)]
          
          [--btn-bg-text-hover:var(--color-challengerpink-100)]
          [--btn-bg-text-active:var(--color-challengerpink-200)]
        `,
        roveryellow: `
          [--btn-text:var(--color-gray-dark)]
          [--btn-border:var(--color-roveryellow)]
          [--btn-bg:var(--color-roveryellow)]
          [--btn-bg-hover:var(--color-roveryellow-hover)]
          [--btn-bg-active:var(--color-roveryellow-active)]
          
          [--btn-bg-text-hover:var(--color-roveryellow-100)]
          [--btn-bg-text-active:var(--color-roveryellow-200)]
        `,
      },
      variant: {
        contained: `
          text-(--btn-text) bg-(--btn-bg)
          disabled:bg-(--btn-bg)
          hover:bg-(--btn-bg-hover)
          active:bg-(--btn-bg-active)
          focus-visible:bg-(--btn-bg) focus-visible:ring-2 focus-visible:ring-(--btn-border) focus-visible:outline-none
        `,
        text: `
          text-(--btn-bg) bg-transparent
          disabled:bg-transparent
          hover:bg-(--btn-bg-text-hover)
          active:bg-(--btn-bg-text-active)
          focus-visible:bg-(--btn-bg-text-hover) focus-visible:ring-2 focus-visible:ring-(--btn-text-outline) focus-visible:outline-none
        `,
        outlined: `
          text-(--btn-bg) border-(--btn-border) bg-transparent
          disabled:bg-transparent
          hover:bg-(--btn-bg-text-hover)
          active:bg-(--btn-bg-text-active)
          focus-visible:bg-(--btn-bg-text-hover) focus-visible:ring-2 focus-visible:ring-(--btn-text-outline) focus-visible:outline-none
        `,
      },
      size: {
        medium: "text-base px-4 h-10 rounded-lg",
        small: "text-sm px-3 h-8 rounded-md",
        "medium-icon": "text-base size-10 rounded-lg",
        "small-icon": "text-sm size-8 rounded-md",
        "tiny-icon": "text-sm p-1 size-6 rounded-md",
      },
    },
    defaultVariants: {
      color: "blue",
      variant: "contained",
      size: "medium",
    },
    compoundVariants: [
      {
        color: "gray",
        variant: "text",
        class: `
          text-(--btn-text)
        `,
      },
      {
        color: "gray",
        variant: "outlined",
        class: `
          text-(--btn-text)
        `,
      },
    ],
  },
);

export type ButtonProps = VariantProps<typeof buttonVariants>;

@Component({
  tag: "scout-button",
  styleUrl: "scout-button.css",
  shadow: true,
})
export class Button {
  @Prop() color: ButtonProps["color"];
  @Prop() variant: ButtonProps["variant"];
  @Prop() size: ButtonProps["size"];

  render() {
    const classes = buttonVariants({
      color: this.color,
      variant: this.variant,
      size: this.size,
    });

    return (
      <button type="button" class={cn(classes)}>
        <slot />
      </button>
    );
  }
}
