export default function Header() {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">MatTribe</h1>
      <nav className="space-x-4">
        <a href="/" className="text-blue-600 hover:underline">Accueil</a>
        <a href="/about" className="text-blue-600 hover:underline">À propos</a>
      </nav>
    </header>
  );
}