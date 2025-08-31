import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>Açık Bahçe</div>
        <input type="text" placeholder="Şehir veya Ürün Ara" className={styles.search} />
        <ul className={styles.navLinks}>
          <li><Link href="/farmers">Çiftçiler</Link></li>
          <li><Link href="/map">Harita</Link></li>
          <li><Link href="/login">Giriş</Link></li>
        </ul>
      </nav>
      <section className={styles.hero}>
        <h1>Yerel Çiftçilerden Taze Ürünler</h1>
        <p>Açık Bahçe ile keşfet ve destekle!</p>
      </section>
      <section className={styles.featured}>
        <h2>Öne Çıkan Çiftçiler</h2>
        <div className={styles.farmerGrid}>
          {/* Mock data for now */}
          <div className={styles.farmerCard}>
            <h3>Ahmet Çiftçi</h3>
            <p>İzmir - Elma, Zeytin</p>
            <Link href="/farmer/1">Detay</Link>
          </div>
        </div>
      </section>
      <footer className={styles.footer}>
        <p>&copy; 2025 Açık Bahçe</p>
      </footer>
    </div>
  );
}