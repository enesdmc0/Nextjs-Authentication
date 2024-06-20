import { Button } from "@/components/ui/button";
import LogoutButton from "./logout-button";
import Image from "next/image";
import { getUser } from "@/app/auth/03-dal";



export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getUser();

  const activeLink = "/dashboard";

  return (
    <div className="flex min-h-screen w-full">
      <div className="flex w-full flex-col">
        <header className="flex h-14 items-center border-b px-4 md:gap-4">
        <LogoutButton />
          <div className="ml-auto flex items-center gap-4">
            <div>
              <span>{user?.name}</span>
            </div>
            <Button className="rounded-full" size="icon" variant="ghost">
              <Image
                alt="Avatar"
                className="rounded-full"
                height="32"
                src="/placeholder.jpeg"
                style={{
                  aspectRatio: "32/32",
                  objectFit: "cover",
                }}
                width="32"
              />
            </Button>
          </div>
        </header>
        <main className="flex-1 p-4 md:p-6">{children}</main>
      </div>
    </div>
  );
}
