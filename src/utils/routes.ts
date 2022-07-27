interface IRoute {
  path: string
  label?: string
}

export const ROUTES: Array<IRoute> = [
  {
    path: '/',
    label: 'Home',
  },
  {
    path: '/contact',
    label: 'Contact',
  },
  // {
  //   path: 'https://www.notion.so/henriquederosa/Henrique-Derosa-Resume-0eba4e1158c040b289b58833d61fbdd2',
  //   label: 'Resume',
  // },
]
