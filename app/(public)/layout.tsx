
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="mx-auto flex justify-center items-center w-full h-full bg-black">
      {children}
    </main>
  );
}
