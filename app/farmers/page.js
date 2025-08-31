import Link from 'next/link';
import styles from './farmers.module.css';

export default function Farmers() {
  return (
    <div className={styles.container}>
      <h1>Çiftçi Listesi</h1>
      <div className={styles.sidebar}>
        <h3>Filtreler</h3>
        <select>
          <option>Şehir Seç</option>
          <option>İstanbul</option>
          <option>İzmir</option>
        </select>
        <input type="checkbox" id="meyve" /> <label htmlFor="meyve">Meyve</label>
      </div>
      <div className={styles.list}>
        <div className={styles.farmerCard}>
          <h3>Ahmet Çiftçi</h3>
          <p>İzmir - Elma, Zeytin</p>
          <Link href="/farmer/1">Detay</Link>
        </div>
      </div>
    </div>
  );
}