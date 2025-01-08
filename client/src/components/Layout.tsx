import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-xl font-bold">
              Blog Management
            </Link>
            <div className="flex items-center space-x-4">
              {isAuthenticated ? (
                <>
                  <span>Welcome, {user?.username}!</span>
                  <Link
                    href="/dashboard"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="text-red-600 hover:text-red-800"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Login
                  </Link>
                  <Link
                    href="/register"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-6xl mx-auto px-4 py-8">{children}</main>
    </div>
  );
}
