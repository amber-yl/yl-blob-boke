import styles from './index.less';
import TableBasic from './TableBasic';
import ModalBasic from './ModalBasic';
export default function UserInfoPage() {
  console.log('----', API_PREFIX);
  return (
    <div>
      <TableBasic />
      <h1 className={styles.title}>Page UserInfo</h1>
      <ModalBasic />
    </div>
  );
}
