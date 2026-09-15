import CustomButton from './CustomButton';
import Title from './Title';

function Card({ children, title, color = 'bg-zinc-700' }) {
  const colorClasses = {
    primary: 'bg-blue-500',
    secondary: 'bg-gray-500',
    danger: 'bg-red-500',
    success: 'bg-green-500',
  };
  return (
    <div className={`p-4 rounded-md ${color} ${colorClasses[color] || ''}`}>
      {title && <h3 className="text-xl font-bold mb-3 text-gray-300">{title}</h3>}
      {children}
    </div>
  );
}
function Container({ children, layout = 'vertical' }) {
  const layoutClasses = {
    vertical: 'flex flex-col gap-4',
    horizontal: 'flex flex-row gap-4',
    grid: 'grid grid-cols-2 gap-4',
  };
  return <div className={`${layoutClasses[layout] || ''}`}>{children}</div>;
}
const ChildrenProps = () => {
  return (
    <section id="children" className="sectionCard">
      <Title text={'Children Props'} />
      <p className="text-zinc-300">
        This is an example of using children props in React components.
      </p>

      <Title text={'Different Layouts'} />
      <p className="text-zinc-300">
        This is an example of using different layouts with the Container component.
      </p>
      <Container layout="horizontal">
        <Card title="Card 1" color="primary">
          <p className="text-zinc-300">This is the content of Card 1.</p>
        </Card>
        <Card title="Card 2" color="secondary">
          <p className="text-zinc-300">This is the content of Card 2.</p>
        </Card>
        <Card title="Card 3" color="danger">
          <p className="text-zinc-300">This is the content of Card 3.</p>
        </Card>
        <Card title="Statistics" color="success">
          <div>
            <h3>
              Name: <span>Dipesh</span>
            </h3>

            <h4>
              Website:
              <CustomButton
                href="https://dipeshchaudhary.name.np"
                target="_blank"
                rel="noopener noreferrer"
                text="Visit Website"
                size="small"
                color="primary"
              />
            </h4>
            <h4>
              GitHub:
              <CustomButton
                text="GitHub"
                size={'large'}
                link="https://github.com/dipeshxhy"
                color="primary"
              />
            </h4>
          </div>
        </Card>
      </Container>
      <Container layout="vertical">
        <Card title="Card 1" color="primary">
          <p className="text-zinc-300">This is the content of Card 1.</p>
        </Card>
        <Card title="Card 2" color="secondary">
          <p className="text-zinc-300">This is the content of Card 2.</p>
        </Card>
        <Card title="Card 3" color="danger">
          <p className="text-zinc-300">This is the content of Card 3.</p>
        </Card>
        <Card title="Card 4" color="success">
          <p className="text-zinc-300">This is the content of Card 4.</p>
        </Card>
      </Container>
    </section>
  );
};
export default ChildrenProps;
