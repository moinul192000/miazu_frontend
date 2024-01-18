import { type DefaultSession } from "next-auth";

/**
 * Represents an extended user object.
 */
export type ExtendedUser = DefaultSession["user"] & {
  role: RoleType;
  isTwoFactorEnabled: boolean;
  isOAuth: boolean;
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  avatar: string;
  phone: string;
  isActive: boolean;
};

/**
 * Represents a user response object.
 */
export type ResponseUser = {
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
export type LoginResponse = {
  user: ResponseUser;
  token: {
    expiresIn: number;
    accessToken: string;
  };
};

/**
 * Enum representing the different user roles.
 */
export enum RoleType {
  USER = "USER",
  ADMIN = "ADMIN",
  MODERATOR = "MODERATOR",
}
