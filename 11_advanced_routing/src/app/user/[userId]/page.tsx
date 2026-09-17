import { notFound } from 'next/navigation';

const SingleUserPage = async ({ params }: { params: { userId: string } }) => {
  const { userId } = await params;
  if (+userId > 10) {
    return notFound();
  }
  return <div>SingleUserPage {userId}</div>;
};
export default SingleUserPage;
