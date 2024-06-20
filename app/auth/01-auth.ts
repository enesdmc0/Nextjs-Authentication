import { createSession, deleteSession } from '@/app/auth/02-stateless-session';
import {
    FormState,
    LoginFormSchema,
    SignupFormSchema,
} from '@/app/auth/definitions';
import { dummyUsers } from '@/dummy-data';
import bcrypt from 'bcryptjs';



export async function signup(state: FormState, formData: FormData): Promise<FormState> {
    // 1. Validate form fields
    const validatedFields = SignupFormSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
    });

    // If any form fields are invalid, return early
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        };
    }

    // 2. Prepare data for insertion into dummy database
    const { name, email, password } = validatedFields.data;

    // 3. Check if the user's email already exists
    const existingUser = dummyUsers.find(user => user.email === email);
    if (existingUser) {
        return {
            message: 'Email already exists, please use a different email or login.',
        };
    }

    // Hash the user's password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 4. Insert the user into the dummy database
    const newUser = {
        id: dummyUsers.length + 1,
        name,
        email,
        password: hashedPassword,
    };
    dummyUsers.push(newUser);

    // 5. Create a session for the user
    const userId = newUser.id.toString();
    await createSession(userId);

    return {
        message: 'Signup successful!',
    };
}

export async function login(state: FormState, formData: FormData): Promise<FormState> {
    // 1. Validate form fields
    const validatedFields = LoginFormSchema.safeParse({
        email: formData.get('email'),
        password: formData.get('password'),
    });

 
    // If any form fields are invalid, return early
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        };
    }

    // 2. Query the dummy database for the user with the given email
    const { email, password } = validatedFields.data;

    const user = dummyUsers.find(user => user.email === email);

    // If user is not found, return early
    if (!user) {
        return {message: 'User not found.'};
    }

    // 3. Compare the user's password with the hashed password in the dummy database
    const passwordMatch = await bcrypt.compare(password, user.password);

    // If the password does not match, return early
    if (!passwordMatch) {
        return {message: 'Invalid password.'};
    }

    // 4. If login successful, create a session for the user
    const userId = user.id.toString();
    await createSession(userId);

    return {
        message: 'Login successful!',
    };
}

export async function logout() {
    await deleteSession();
    return {
        message: 'Logout successful!',
    };
}