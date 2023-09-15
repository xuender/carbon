export interface PopoverOptions {
  title?: string;
  items: PopoverItem[];
}

export interface PopoverItem {
  label: string;
  code: string;
  checked?: boolean;
  icon?: string;
  color?: string;
  itemColor?: string;
  iconColor?: string;
  badge?: number;
}
