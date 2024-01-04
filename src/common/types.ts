
/**
 * Represents an extended user object.
 */
type ExtendedUser = {
  id: string;
  createdAt: string;
  updatedAt: string;
  firstName: string;
  lastName: string;
  username: string;
  role: string;
  email: string;
  avatar: string;
  phone: string;
  isActive: boolean;
};

/**
 * Represents a login response object.
 */
type LoginResponse = {
  user: ExtendedUser;
  token: {
    expiresIn: number;
    accessToken: string;
  };
};
