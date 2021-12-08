import { GlobalState, UmiComponentProps } from '@/common/type';
import { useSelector } from 'umi'


interface Props extends UmiComponentProps { }
const PrimaryLayout = (props: Props) => {
  const { menu } = useSelector(({ menu: { menu } }: GlobalState) => {
    console.log(menu,"| menu");
    return { menu };
  });
  const { children } = props;
  return <div>primaryLayout{children}</div>;
};
export default PrimaryLayout;