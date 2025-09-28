import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "@/redux/data/authSlice";
import { AuthContext } from "react-oauth2-code-pkce";
import { useNavigate } from "react-router";

export function LoginForm({ className, ...props }) {
  const { token, tokenData, logIn, logOut, isAuthenticated } =
    useContext(AuthContext);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.auth);

  const [authReady, setAuthReady] = useState(false);

  useEffect(() => {
    const userid = localStorage.getItem("userId");

    // console.log(userid);
    if (userid) {
      navigate("/report");
    }
  }, [navigate]);

  useEffect(() => {
    if (token) {
      dispatch(setCredentials({ token, user: tokenData }));
      setAuthReady(true);
    }
  }, [token, tokenData, dispatch]);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      setCredentials({
        token: "dummyToken123",
        user: { email: formData.email, sub: "user123", name: "Demo User" },
      })
    );
  };

  return (
    <form
      className={cn("flex flex-col gap-6", className)}
      {...props}
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
        <p className="text-muted-foreground text-sm">
          Enter your email below to login to your account
        </p>
      </div>

      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <a
              href="#"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Forgot your password?
            </a>
          </div>
          <Input
            id="password"
            type="password"
            required
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </Button>

        {error && <p className="text-red-500 text-sm">{error}</p>}
        {token && (
          <p className="text-green-600 text-sm">
            ✅ Login successful! Welcome {user?.name || "User"}
          </p>
        )}

        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
          <span className="bg-background relative z-10 px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>

        <Button
          variant="outline"
          className="w-full flex items-center gap-2"
          onClick={() => logIn()}
        >
          Login with Keycloak
        </Button>
      </div>

      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <a href="#" className="underline underline-offset-4">
          Sign up
        </a>
      </div>
    </form>
  );
}
