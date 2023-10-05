import { Router } from "@/components";
import { CreateProvider } from "@/contexts/create";
import { UserProvider } from "@/contexts/user";

export function App() {
  return (
    <UserProvider>
      <CreateProvider>
        <Router />
      </CreateProvider>
    </UserProvider>
  );
}
