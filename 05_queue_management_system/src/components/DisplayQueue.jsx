import { Badge } from './ui/badge';
import { Button } from './ui/button';

const DisplayQueue = ({ queue, onRemove, onUpdateStatus }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'waiting':
        return 'bg-yellow-700';
      case 'serving':
        return 'bg-blue-700';
      case 'completed':
        return 'bg-green-700';
      default:
        return '';
    }
  };
  return (
    <div className="w-full  self-start p-4 shadow-md bg-gray-800 rounded-md space-y-4">
      <h2 className="text-xl">Current Queue</h2>
      <hr className="border-t border-gray-700" />
      <div className="space-y-4 max-h-98 overflow-auto">
        {queue.length === 0 ? (
          <p className="text-gray-400 text-center">No customers in the queue.start adding some!</p>
        ) : (
          <ul>
            {queue.map((customer) => (
              <li
                key={customer.id}
                className=" bg-zinc-900 p-4 rounded text-white shadow-md flex items-center justify-between my-2"
              >
                <div>
                  <h2 className="text-lg">{customer.name}</h2>
                  <p className="text-sm text-gray-400">Selected Service: {customer.service}</p>
                  <Badge className={`text-white ${getStatusColor(customer.status)}`}>
                    {customer.status}
                  </Badge>
                </div>
                <div className="flex gap-2 mt-2">
                  {customer.status === 'waiting' && (
                    <Button
                      className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded"
                      onClick={() => onUpdateStatus(customer.id, 'serving')}
                    >
                      Serve
                    </Button>
                  )}
                  {customer.status === 'serving' && (
                    <Button
                      className="bg-green-500 hover:bg-green-600 text-gray-white px-2 py-1 rounded"
                      onClick={() => onUpdateStatus(customer.id, 'completed')}
                    >
                      Complete
                    </Button>
                  )}
                  <Button
                    className="bg-gray-500 hover:bg-gray-600 text-white px-2 py-1 rounded"
                    onClick={() => onRemove(customer.id)}
                  >
                    Remove
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
export default DisplayQueue;
