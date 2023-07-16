export interface Menu {
  id: number
  name: string
  description?: string
  url: string
  icon?: string
}

export interface ToolbarProps {
  subs: Menu[]
}
