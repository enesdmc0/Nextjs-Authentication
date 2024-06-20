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

    // Explicitly return the columns you need rather than the whole user object
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