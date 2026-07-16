"use client"

import * as React from "react"
import { Select } from "@base-ui/react/select"
import { ChevronDown, Check } from "lucide-react"
import { cn } from "@/lib/utils"

function SelectRoot<Value, Multiple extends boolean | undefined = false>({
  className,
  children,
  ...props
}: Select.Root.Props<Value, Multiple> & { className?: string }) {
  return (
    <Select.Root<Value, Multiple> {...props}>
      {children}
    </Select.Root>
  )
}

function SelectTrigger({
  className,
  children,
  ...props
}: Select.Trigger.Props & { className?: string }) {
  return (
    <Select.Trigger
      className={cn(
        "flex h-10 md:h-8 w-full min-w-0 items-center justify-between gap-2 rounded-lg border border-input bg-transparent px-2.5 py-1 text-base transition-colors outline-none select-none",
        "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "data-placeholder:text-muted-foreground",
        "md:text-sm",
        className
      )}
      {...props}
    >
      {children}
      <Select.Icon className="flex items-center text-muted-foreground">
        <ChevronDown className="h-4 w-4" />
      </Select.Icon>
    </Select.Trigger>
  )
}

function SelectValue({
  className,
  ...props
}: Select.Value.Props & { className?: string }) {
  return (
    <Select.Value
      className={cn("flex-1 text-left", className)}
      {...props}
    />
  )
}

function SelectPopup({
  className,
  children,
  ...props
}: Select.Popup.Props & { className?: string }) {
  return (
    <Select.Portal>
      <Select.Positioner
        className="z-50 outline-hidden"
        sideOffset={4}
      >
        <Select.Popup
          className={cn(
            "group min-w-[var(--anchor-width)] origin-[var(--transform-origin)] overflow-hidden rounded-lg border bg-popover p-1 text-popover-foreground shadow-md",
            "transition-[scale,opacity] duration-100 ease-out",
            "data-starting-style:scale-95 data-starting-style:opacity-0",
            "data-ending-style:scale-95 data-ending-style:opacity-0",
            className
          )}
          {...props}
        >
          {children}
        </Select.Popup>
      </Select.Positioner>
    </Select.Portal>
  )
}

function SelectList({
  className,
  children,
  ...props
}: Select.List.Props & { className?: string }) {
  return (
    <Select.List
      className={cn(
        "relative flex max-h-[var(--available-height)] flex-col overflow-y-auto",
        className
      )}
      {...props}
    >
      {children}
    </Select.List>
  )
}

function SelectItem({
  className,
  children,
  ...props
}: Select.Item.Props & { className?: string }) {
  return (
    <Select.Item
      className={cn(
        "relative flex cursor-default items-center gap-2 rounded-md py-1.5 pr-8 pl-2 text-sm outline-none select-none",
        "data-highlighted:bg-accent data-highlighted:text-accent-foreground",
        "data-disabled:pointer-events-none data-disabled:opacity-50",
        className
      )}
      {...props}
    >
      <Select.ItemText className="flex-1">{children}</Select.ItemText>
      <Select.ItemIndicator className="absolute right-2 inline-flex items-center">
        <Check className="h-4 w-4" />
      </Select.ItemIndicator>
    </Select.Item>
  )
}

export {
  SelectRoot as Root,
  SelectTrigger as Trigger,
  SelectValue as Value,
  SelectPopup as Popup,
  SelectList as List,
  SelectItem as Item,
}
