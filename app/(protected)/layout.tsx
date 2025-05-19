import Sidebar from "@/components/ui/Sidebar"
import Navbar from "@/components/ui/Navbar"

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Sidebar />
        <main>{children}</main>
      </body>
    </html>
  )
}
