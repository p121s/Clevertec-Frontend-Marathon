export interface AllCategoriesStore {
  menu: MenuItem[];
  isLoading: boolean;
  isLoaded: boolean;
  isError: boolean;
}

interface MenuItem {
  name: string;
  id: number;
  path: string;
  title: string;
  submenu: SubMenuItem[] | null;
}

interface SubMenuItem {
  name: string;
  path: string;
  id: number;
}
