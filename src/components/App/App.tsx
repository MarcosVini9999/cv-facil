import { Router } from "@/components";
import { UserProvider } from "@/contexts/user";

export function App() {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
}
