export default interface IRoute {
  // 路由路径
  path: string;
  // 路由组件
  component?: any;
  exact?: boolean;
  // 路由信息
  title: string;
  routes?: IRoute[];
}
