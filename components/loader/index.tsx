import React from 'react';
import styles from './styles.module.css';
import { BarLoader } from 'react-spinners';

export default function Loader({ loading }: { loading: boolean }) {
   return (
      <div className={styles.loader}>
         <BarLoader color="#36d7b7" loading={loading} />
      </div>
   );
}
