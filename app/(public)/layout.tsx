
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="container mx-auto flex max-w-7xl justify-center items-center w-full h-full bg-black">
      {children}
    </main>
  );
}
