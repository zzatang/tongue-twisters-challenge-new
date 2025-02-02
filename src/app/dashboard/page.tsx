import { UserButton } from "@clerk/nextjs";
 
export default function Dashboard() {
  return (
    <div className="min-h-screen p-8">
      <div className="flex justify-end mb-8">
        <UserButton afterSignOutUrl="/" />
      </div>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Welcome to Tongue Twisters Challenge!</h1>
        <p className="text-lg mb-4">
          Get ready to improve your speech with fun tongue twisters.
        </p>
        {/* More dashboard content will be added here */}
      </div>
    </div>
  );
}
