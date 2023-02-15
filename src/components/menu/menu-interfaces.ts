export interface MenuStyledProps {
  isMenuOpen: boolean;
}

export interface SubMenuStyledProps {
  isSubMenuOpen: boolean;
  isActive?: boolean;
}

export interface MenuItem {
  id: number
  name: string;
  path: string;
  title: string;
  submenu: SubMenuItem[] | null;
}

export interface SubMenuItem {
  id: number | string;
  path: string;
  name: string;
}

export interface WrapperNavProps {
  isVisible: boolean;
}
