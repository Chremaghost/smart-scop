export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav>Sidebar</nav>
      <main>{children}</main>
    </div>
  )
}
