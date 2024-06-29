import styles from './styles.module.css';

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={`sm:pt-0 ${styles.blogContainer}`}>
      {children}
    </div>
  );
}