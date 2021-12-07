import { UmiComponentProps } from '@/common/type';
import PublicLayout from '@/layouts/PublicLayout'
import PrimaryLayout from '@/layouts/PrimaryLayout'
import pathToRegexp from 'path-to-regexp';
interface LayoutConfig {
  name: string;
  include: RegExp[];
  exclude: RegExp[];
}
const LAYOUT_MAP: { [key: string]: any } = {
  primary: PrimaryLayout,
  public: PublicLayout,
};

const queryLayout = (layouts: LayoutConfig[], pathname: string) => {
  let result = 'public';
  const isMatch = (regepx: string | RegExp | string[]) => {
    return regepx instanceof RegExp
      ? regepx.test(pathname)
      : pathMatchRegexp(regepx, pathname);
  }
  const pathMatchRegexp = (
    regexp: string | RegExp | string[],
    pathname: string,
  ) => {
    return pathToRegexp(regexp).exec(pathname);
  }
  for (const item of layouts) {
    let include = false;
    let exclude = false;
    if (item.include) {
      for (const regepx of item.include) {
        if (isMatch(regepx)) {
          include = true;
          break;
        }
      }
    }

    if (include && item.exclude) {
      for (const regepx of item.exclude) {
        if (isMatch(regepx)) {
          exclude = true;
          break;
        }
      }
    }
    if (include && !exclude) {
      result = item.name;
      break;
    }
  }
  return result
}

const layouts = [
  {
    name: 'primary',
    include: [/.*/],
    exclude: [/user[/]?$/],
  },
];

interface Props extends UmiComponentProps {}
const BaseLayout = (props: Props) => {
  const { children, location } = props;
  // console.log(children, location);
  const Container = LAYOUT_MAP[queryLayout(layouts, location.pathname)];
  // console.log(Container,"| Container");
  return (
    <>
      <Container>{children}</Container>
    </>
  )
}
export default BaseLayout;