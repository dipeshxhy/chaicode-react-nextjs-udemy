import { Button } from '@/components/ui/button';
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from 'lucide-react';

export default function ProductCard({ imageUrl, buttonText = 'buy now', title = 'Title Here' }) {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <div className="absolute z-30  " />
      <img
        src={imageUrl}
        alt="Event cover"
        className="relative z-20 aspect-video w-full object-cover"
      />
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          A practical talk on component APIs, accessibility, and shipping faster.
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full capitalize cursor-pointer">{buttonText}</Button>
      </CardFooter>
    </Card>
  );
}
