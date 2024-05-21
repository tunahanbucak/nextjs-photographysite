'use client';

import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import {
  UserCheck,
  MailIcon,
  ArrowRightIcon,
  MessageSquare,
  UserRoundCheck,
  Building,
} from 'lucide-react';

export default function Form() {
  return (
    <form className="flex flex-col gap-y-4">
      <div className="relative flex items-center">
        <Input type="name" id="first name" placeholder="İsim" />
        <UserCheck className="absolute right-6 " size={20} />
      </div>

      <div className="relative flex items-center">
        <Input type="name" id="Last name" placeholder="Soyisim" />
        <UserRoundCheck className="absolute right-6 " size={20} />
      </div>

      <div className="relative flex items-center">
        <Input type="email" id="email" placeholder="E-posta" />
        <MailIcon className="absolute right-6 " size={20} />
      </div>

      <div className="relative flex items-center">
        <Textarea placeholder="Mesajınızı buraya yazın..." />
        <MessageSquare className="absolute top-4 right-6 " size={20} />
      </div>
      <Button className="flex items-center gap-x-1 max-w[165px]">
        Gönder
        <ArrowRightIcon size={12} />
      </Button>
    </form>
  );
}
