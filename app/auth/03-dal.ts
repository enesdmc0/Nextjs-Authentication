import 'server-only';
import { cache } from 'react';
import { verifySession } from '@/app/auth/02-stateless-session';
import { dummyUsers } from '@/dummy-data';



export const getUser = cache(async () => {
  const session = await verifySession();
  if (!session) return null;

  try {
    const user = dummyUsers.find(user => user.id.toString() === session.userId.toString());

    if (!user) {
      console.log('User not found');
      return null;
    }

    return {
      id: user.id,
      name: user.name,
      email: user.email
    };
  } catch (error) {
    console.log('Failed to fetch user');
    return null;
  }
});