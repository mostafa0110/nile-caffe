import admin from "../../../lib/firebaseAdmin";
import connectDB from "../../../lib/mongoose"; // Using the connectDB from your file
import User from "../../../models/User"; // User model

export async function POST(req) {
  try {
    const { idToken, name, isLogin } = await req.json();

    // Verify Firebase ID token
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    const { uid, email } = decodedToken;

    console.log("Decoded Token:", decodedToken);

    // Connect to MongoDB using the imported connectDB function
    await connectDB();

    // Check if user already exists
    const existingUser = await User.findOne({ uid });
    console.log("Existing User:", existingUser);

    if (isLogin) {
      if (!existingUser) {
        return new Response(
          JSON.stringify({ message: "User not found, please sign up first." }),
          { status: 404 }
        );
      }
      // If user exists, return success message
      return new Response(
        JSON.stringify({ message: "User logged in successfully" }),
        { status: 200 }
      );
    } else {
      // Handle sign-up logic
      if (existingUser) {
        return new Response(
          JSON.stringify({ message: "User already exists" }),
          { status: 409 }
        );
      }

      // Insert new user into MongoDB with the name
      const newUser = new User({
        uid,
        email,
        name,
      });

      await newUser.save();
      console.log("User Inserted into MongoDB:", newUser);

      return new Response(
        JSON.stringify({ message: "User signed up and stored successfully" }),
        { status: 201 }
      );
    }
  } catch (error) {
    console.error("Error during MongoDB or Firebase operation:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
