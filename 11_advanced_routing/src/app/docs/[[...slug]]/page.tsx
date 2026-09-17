const DocsPage = async ({ params }: { params: { slug: string[] } }) => {
  const { slug } = await params;
  return <div>DocsPage {slug?.join('/')}</div>;
};
export default DocsPage;
