import styles from './farmer.module.css';

export default function FarmerProfile({ params }) {
  return (
    <div className={styles.container}>
      <h1>Çiftçi Profili: {params.id}</h1>
      <p>Şehir: İzmir</p>
      <p>Ürünler: Elma, Zeytin</p>
      <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">Yol Tarifi</a>
    </div>
  );
}