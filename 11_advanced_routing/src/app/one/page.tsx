import Link from 'next/link';

const OnePage = () => {
  return (
    <div>
      <Link href="/one/two">Go to Two</Link>
      <Link href="/three">Go to Three</Link>
    </div>
  );
};
export default OnePage;
