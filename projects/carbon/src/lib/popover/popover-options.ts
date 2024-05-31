export interface PopoverOptions {
  title?: string;
  items: PopoverItem[];
}

export interface PopoverItem {
  label: string;
  code: string;
  data?: any;
  checked?: boolean;
  icon?: string;
  color?: string;
  itemColor?: string;
  iconColor?: string;
  badge?: number;
  /** 隐藏 */
  hide?: boolean;
  children?: PopoverItem[];
}
