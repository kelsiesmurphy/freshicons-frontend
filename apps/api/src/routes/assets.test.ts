// import { describe, it, expect, vi, afterEach } from "vitest";
// import request from "supertest";
// import app from "../index"; // adjust this to your app file
// import * as supabaseModule from "../lib/supabase";
// import * as clerkModule from "../lib/verifyClerkJWT";

// // Mock the external modules
// vi.mock("../lib/supabase");
// vi.mock("../lib/verifyClerkJWT");

// describe("API tests", () => {
//   afterEach(() => {
//     vi.clearAllMocks();
//   });

//   describe("GET /search", () => {
//     it("should return assets matching query", async () => {
//       const mockData = [
//         { id: "1", name: "Test Asset", description: "desc", tags: ["tag1"] },
//       ];
//       (supabaseModule.supabase.from as unknown as vi.Mock).mockReturnValue({
//         select: vi.fn().mockReturnThis(),
//         or: vi.fn().mockResolvedValue({ data: mockData, error: null }),
//       });

//       const res = await request(app).get("/search?q=test");

//       expect(res.status).toBe(200);
//       expect(res.body).toEqual(mockData);
//       expect(supabaseModule.supabase.from).toHaveBeenCalledWith("assets");
//     });

//     it("should handle supabase error", async () => {
//       (supabaseModule.supabase.from as unknown as vi.Mock).mockReturnValue({
//         select: vi.fn().mockReturnThis(),
//         or: vi
//           .fn()
//           .mockResolvedValue({ data: null, error: { message: "DB error" } }),
//       });

//       const res = await request(app).get("/search?q=test");

//       expect(res.status).toBe(500);
//       expect(res.body).toEqual({ error: "DB error" });
//     });
//   });

//   describe("GET /:id/download-url", () => {
//     const userId = "user-123";
//     const assetId = "asset-456";

//     it("should return 401 if no or invalid auth header", async () => {
//       (clerkModule.verifyClerkJWT as unknown as vi.Mock).mockImplementation(
//         () => {
//           throw new Error("Invalid token");
//         }
//       );

//       const res = await request(app).get(`/${assetId}/download-url`);

//       expect(res.status).toBe(401);
//       expect(res.body).toEqual({ error: "Invalid token" });
//     });

//     it("should return 403 if purchase not found", async () => {
//       (clerkModule.verifyClerkJWT as unknown as vi.Mock).mockResolvedValue({
//         userId,
//       });
//       (supabaseModule.supabase.from as unknown as vi.Mock)
//         .mockReturnValueOnce({
//           select: vi.fn().mockReturnThis(),
//           eq: vi.fn().mockReturnThis(),
//           maybeSingle: vi.fn().mockResolvedValue({ data: null }),
//         })
//         .mockReturnValueOnce({
//           select: vi.fn(),
//           eq: vi.fn(),
//           maybeSingle: vi.fn(),
//         });

//       const res = await request(app)
//         .get(`/${assetId}/download-url`)
//         .set("Authorization", "Bearer validtoken");

//       expect(res.status).toBe(403);
//       expect(res.body).toEqual({ error: "Not purchased" });
//     });

//     it("should return 404 if asset not found", async () => {
//       (clerkModule.verifyClerkJWT as unknown as vi.Mock).mockResolvedValue({
//         userId,
//       });
//       (supabaseModule.supabase.from as unknown as vi.Mock)
//         // purchase exists
//         .mockReturnValueOnce({
//           select: vi.fn().mockReturnThis(),
//           eq: vi.fn().mockReturnThis(),
//           maybeSingle: vi.fn().mockResolvedValue({ data: { id: "purchase1" } }),
//         })
//         // asset not found
//         .mockReturnValueOnce({
//           select: vi.fn().mockReturnThis(),
//           eq: vi.fn().mockReturnThis(),
//           maybeSingle: vi.fn().mockResolvedValue({ data: null }),
//         });

//       const res = await request(app)
//         .get(`/${assetId}/download-url`)
//         .set("Authorization", "Bearer validtoken");

//       expect(res.status).toBe(404);
//       expect(res.body).toEqual({ error: "Asset not found" });
//     });

//     it("should return the asset file URL if purchased", async () => {
//       const fileUrl = "https://files.com/asset1.png";

//       (clerkModule.verifyClerkJWT as unknown as vi.Mock).mockResolvedValue({
//         userId,
//       });
//       (supabaseModule.supabase.from as unknown as vi.Mock)
//         // purchase exists
//         .mockReturnValueOnce({
//           select: vi.fn().mockReturnThis(),
//           eq: vi.fn().mockReturnThis(),
//           maybeSingle: vi.fn().mockResolvedValue({ data: { id: "purchase1" } }),
//         })
//         // asset found
//         .mockReturnValueOnce({
//           select: vi.fn().mockReturnThis(),
//           eq: vi.fn().mockReturnThis(),
//           maybeSingle: vi
//             .fn()
//             .mockResolvedValue({ data: { file_url: fileUrl } }),
//         });

//       const res = await request(app)
//         .get(`/${assetId}/download-url`)
//         .set("Authorization", "Bearer validtoken");

//       expect(res.status).toBe(200);
//       expect(res.body).toEqual({ url: fileUrl });
//     });
//   });
// });
