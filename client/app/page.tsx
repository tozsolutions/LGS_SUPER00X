import Link from 'next/link'
import { BookOpenIcon, AcademicCapIcon, ChartBarIcon, UserGroupIcon } from '@heroicons/react/24/outline'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <AcademicCapIcon className="h-8 w-8 text-primary-600" />
              <h1 className="ml-2 text-2xl font-bold text-gray-900">LGS Super</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/courses" className="text-gray-600 hover:text-primary-600">Kurslar</Link>
              <Link href="/exams" className="text-gray-600 hover:text-primary-600">Sınavlar</Link>
              <Link href="/about" className="text-gray-600 hover:text-primary-600">Hakkımızda</Link>
              <Link href="/contact" className="text-gray-600 hover:text-primary-600">İletişim</Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Link href="/auth/login" className="btn-secondary">Giriş Yap</Link>
              <Link href="/auth/register" className="btn-primary">Üye Ol</Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">LGS'de Başarının</span>
            <span className="block text-primary-600">Anahtarı</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Kapsamlı eğitim içerikleri, interaktif dersler ve deneme sınavları ile LGS'ye hazırlanın. 
            Kişiselleştirilmiş çalışma planları ve detaylı analiz raporları ile hedeflerinize ulaşın.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <Link href="/auth/register" className="btn-primary text-lg px-8 py-3">
                Hemen Başla
              </Link>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <Link href="/courses" className="btn-secondary text-lg px-8 py-3">
                Kursları Keşfet
              </Link>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card p-6">
              <div className="flex items-center">
                <BookOpenIcon className="h-8 w-8 text-primary-600" />
                <h3 className="ml-2 text-lg font-medium text-gray-900">İnteraktif Dersler</h3>
              </div>
              <p className="mt-2 text-gray-600">
                Video dersler, animasyonlar ve etkileşimli içeriklerle öğrenin.
              </p>
            </div>

            <div className="card p-6">
              <div className="flex items-center">
                <AcademicCapIcon className="h-8 w-8 text-primary-600" />
                <h3 className="ml-2 text-lg font-medium text-gray-900">Deneme Sınavları</h3>
              </div>
              <p className="mt-2 text-gray-600">
                LGS formatında hazırlanmış gerçekçi deneme sınavları ile pratik yapın.
              </p>
            </div>

            <div className="card p-6">
              <div className="flex items-center">
                <ChartBarIcon className="h-8 w-8 text-primary-600" />
                <h3 className="ml-2 text-lg font-medium text-gray-900">Detaylı Analiz</h3>
              </div>
              <p className="mt-2 text-gray-600">
                Performansınızı takip edin ve gelişim alanlarınızı belirleyin.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white mt-20">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center items-center mb-4">
              <AcademicCapIcon className="h-6 w-6 text-primary-600" />
              <span className="ml-2 text-lg font-semibold text-gray-900">LGS Super</span>
            </div>
            <p className="text-gray-600">
              © 2024 TOZ Solutions. Tüm hakları saklıdır.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}