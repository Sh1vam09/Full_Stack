export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-800">Responsive Design Demo</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h2 className="text-xl font-semibold mb-3 text-gray-800">Card 1</h2>
            <p className="text-gray-600">
              This card demonstrates responsive grid layout. On mobile, it's a single column.
              On tablets (md), it becomes 2 columns. On desktop (lg), it becomes 3 columns.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h2 className="text-xl font-semibold mb-3 text-gray-800">Card 2</h2>
            <p className="text-gray-600">
              Tailwind CSS makes responsive design easy with utility classes like
              grid-cols-1, md:grid-cols-2, and lg:grid-cols-3.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h2 className="text-xl font-semibold mb-3 text-gray-800">Card 3</h2>
            <p className="text-gray-600">
              All styling is done using Tailwind utility classes for rapid development
              and consistent design.
            </p>
          </div>
        </div>

        {/* Responsive Flex Layout */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Responsive Flex Layout</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 bg-blue-100 p-4 rounded">
              <h3 className="font-semibold mb-2">Flex Item 1</h3>
              <p className="text-sm text-gray-700">
                On mobile, items stack vertically (flex-col).
                On medium screens and up, they align horizontally (md:flex-row).
              </p>
            </div>
            <div className="flex-1 bg-green-100 p-4 rounded">
              <h3 className="font-semibold mb-2">Flex Item 2</h3>
              <p className="text-sm text-gray-700">
                Each item takes equal space with flex-1.
                Gap-4 adds consistent spacing between items.
              </p>
            </div>
            <div className="flex-1 bg-purple-100 p-4 rounded">
              <h3 className="font-semibold mb-2">Flex Item 3</h3>
              <p className="text-sm text-gray-700">
                Responsive design ensures optimal viewing experience
                across all device sizes.
              </p>
            </div>
          </div>
        </div>

        {/* Responsive Text */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-800">
            Responsive Typography
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 mb-4">
            Text sizes adjust based on screen size. This paragraph uses text-sm on mobile,
            text-base on medium screens, and text-lg on large screens.
          </p>
          <div className="space-y-2">
            <button className="w-full md:w-auto px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Mobile Full Width Button
            </button>
            <button className="w-full md:w-auto px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              Responsive Button
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-12">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-sm">
            © 2024 Responsive Design Demo - Built with Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  )
}
