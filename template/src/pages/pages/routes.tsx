import { redirect, RouteObject } from 'react-router-dom'
import { definition } from './definition'
/**
 * react router 路由定义
 */
const routes: RouteObject[] = [
  {
    path: definition.index.path,
    element: <definition.index.component />,
    children: [{ index: true, element: <definition.index.component /> }],
  },
]

export default routes
