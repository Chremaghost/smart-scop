export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header>Public Header</header>
      <main>{children}</main>
    </div>
  )
}
