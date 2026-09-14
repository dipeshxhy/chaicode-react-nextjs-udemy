import { UserPlus } from 'lucide-react';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from './ui/select';

const options = [
  { value: 'consultation', label: 'Consultation' },
  { value: 'payment', label: 'Payment' },
  { value: 'support', label: 'Support' },
];

const AddQueueForm = ({ onAdd }) => {
  const [customer, setCustomer] = useState({
    name: '',
    service: 'Select Service',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!customer.name || customer.service === 'Select Service') {
      alert('Please fill in all fields');
      return;
    }
    const newCustomer = {
      id: nanoid(),
      name: customer.name,
      service: customer.service,
      status: 'waiting',
    };
    onAdd(newCustomer);
    setCustomer({ name: '', service: 'Select Service' });
  };
  return (
    <form
      className=" w-full max-w-md self-start p-4 shadow-md bg-gray-800 rounded-md  space-y-4"
      onSubmit={handleSubmit}
    >
      <h2 className="text-xl text-center">Add to Queue</h2>
      <Input
        value={customer.name}
        onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
        type={'text'}
        placeholder="Customer Name"
      />
      <Select
        items={options}
        value={customer.service}
        onValueChange={(value) => setCustomer({ ...customer, service: value })}
      >
        <SelectTrigger className="w-full ">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Select Service</SelectLabel>
            {options.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600">
        <UserPlus className="mr-2 h-4 w-4" /> Add Customer
      </Button>
    </form>
  );
};
``;
export default AddQueueForm;
