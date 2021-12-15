import styles from './index.less';
import { useDispatch } from 'umi'
import { useEffect } from 'react';
import { UmiComponentProps } from '@/common/type'

interface Props extends UmiComponentProps { }
export default function HomePage(props: Props) {
  // console.log("----",API_PREFIX);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'menu/getMenu' });
  }, []);
  console.log('Props: ', props);
  return (
    <div>
      <h1 className={styles.title}>测试git提交环境，以及代码规范性检测</h1>
    </div>
  );
}
