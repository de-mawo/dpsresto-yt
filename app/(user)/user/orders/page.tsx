import Container from '@/app/components/Common/Container'
import UserOrders from './UserOrders'
import { getCurrentUser } from '@/lib/session';
import { User } from '@prisma/client';


export default async function UserOrderPage ()  {
  const user = await getCurrentUser();
  return (
    <Container>
        <UserOrders user={user as User}  />
    </Container>
  )
}
