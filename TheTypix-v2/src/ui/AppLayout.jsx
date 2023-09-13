function AppLayout({ children }) {
  return (
    <main className="w-screen h-screen bg-gray-950 flex flex-col items-center justify-center">
      {children}
    </main>
  );
}

export default AppLayout;
