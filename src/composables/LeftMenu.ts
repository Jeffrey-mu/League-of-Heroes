
export const activeMenu = ref(1)
export interface Menu {
  label: string
  id: number
}
export function handleMenu(menu: Menu) {
  activeMenu.value = menu.id
}
