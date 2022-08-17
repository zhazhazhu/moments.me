declare module "vue3-grid-layout" {
  import type { Plugin } from "vue";
  import { DefineComponent } from "vue";

  export type LayoutItem = {
    i: number;
    static?: boolean;
    x?: number;
    y?: number;
    w?: number;
    h?: number;
  };

  export type Layout = LayoutItem[];

  export interface GridLayoutProps {
    colNum?: number;
    layout?: Layout;
    rowHeight?: number;
    maxRows?: number; //定义最大行数
    margin?: number[]; //定义栅格中的元素边距
    isDraggable?: boolean; //标识栅格中的元素是否可拖拽
    isResizable?: boolean; //标识栅格中的元素是否可调整大小。
    isMirrored?: boolean; //标识栅格中的元素是否可镜像反转
    autoSize?: boolean; //识容器是否自动调整大小
    verticalCompact?: boolean; //标识布局是否垂直压缩
    preventCollision?: boolean; //标识布局是否阻止碰撞
    useCssTransforms?: boolean; //标识是否使用css变换
    responsive?: boolean; //标识布局是否为响应式
    breakpoints?: {
      lg: number;
      md: number;
      sm: number;
      xs: number;
      xxs: number;
    };
    cols?: {
      lg: number;
      md: number;
      sm: number;
      xs: number;
      xxs: number;
    };
    useStyleCursor?: boolean; //标识是否使用鼠标指针样式
  }

  export interface GridItemProps {
    i?: number;
    w?: number;
    h?: number;
    x?: number;
    y?: number;
    minW?: number;
    minH?: number;
    maxW?: number;
    maxH?: number;
    isDraggable?: boolean;
    isResizable?: boolean;
    static?: boolean;
  }

  const VueGridLayout: Plugin;

  export default VueGridLayout;

  export const GridLayout: DefineComponent<GridLayoutProps>;

  export const GridItem: DefineComponent<GridItemProps>;
}
