import { clerkClient } from "./clerk";

/**
 * Verifies the JWT from the Authorization header.
 * Returns the Auth object with user details if valid.
 */
export async function verifyClerkJWT(authHeader?: string) {
  if (!authHeader?.startsWith("Bearer ")) {
    throw new Error("Missing or malformed Authorization header");
  }

  const token = authHeader.replace("Bearer ", "");

  // Create a fake Request object to satisfy Clerk's API
  const fakeRequest = new Request("http://localhost", {
    headers: { Authorization: `Bearer ${token}` },
  });

  const { isAuthenticated, toAuth, message } = await clerkClient.authenticateRequest(fakeRequest, {
    jwtKey: process.env.CLERK_JWT_KEY, // Use this for networkless verification
    authorizedParties: [process.env.APP_ORIGIN || "http://localhost:3000"],
  });

  if (!isAuthenticated) {
    throw new Error(message || "Unauthorized");
  }

  const auth = toAuth();
  return auth;
}
