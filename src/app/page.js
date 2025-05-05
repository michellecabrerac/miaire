import Head from "next/head";
import Image from "next/image";
// Importa iconos si los necesitas, por ejemplo, de lucide-react
// npm install lucide-react
import { Wind, Thermometer, Wrench, CheckCircle } from 'lucide-react';

export default function Home() {
  return (
    <>
      <Head>
        <title>Servicios de Ventilación y Climatización | [Tu Nombre de Empresa]</title>
        <meta name="description" content="Expertos en fabricación, montaje e instalación de sistemas de ventilación y aire acondicionado. Ofrecemos soluciones eficientes y de calidad." />
        {/* Añade aquí otros meta tags relevantes si lo necesitas */}
      </Head>

      <div className="min-h-screen bg-gray-50 font-[family-name:var(--font-geist-sans)] text-gray-800">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-20 md:py-32">
          {/* Opcional: Imagen de fondo sutil */}
          {/* <Image
            src="/path/to/your/hero-background.jpg" // Reemplaza con tu imagen
            alt="Sistemas de climatización modernos"
            layout="fill"
            objectFit="cover"
            className="opacity-20"
            priority
          /> */}
          <div className="container mx-auto px-6 text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Soluciones Integrales en Ventilación y Climatización
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
              Diseñamos, fabricamos e instalamos sistemas eficientes para garantizar tu confort y la calidad del aire en tu hogar o negocio.
            </p>
            <a
              href="#contact" // Enlaza a tu sección de contacto
              className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300 text-lg shadow-md"
            >
              Solicita Presupuesto
            </a>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Nuestros Servicios Especializados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service Card 1 */}
              <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <Wind className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Fabricación y Montaje de Conductos</h3>
                <p className="text-gray-600">
                  Creamos y montamos conductos de ventilación y climatización a medida, incluyendo chapa galvanizada, asegurando un flujo de aire óptimo.
                </p>
              </div>
              {/* Service Card 2 */}
              <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <Thermometer className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Instalación de Aire Acondicionado</h3>
                <p className="text-gray-600">
                  Instalamos una amplia gama de equipos: Split decorativo, sistemas VRV, por conductos, Cassette, y suelo-techo para adaptarnos a tus necesidades.
                </p>
              </div>
              {/* Service Card 3 */}
              <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <Wrench className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Soluciones Personalizadas</h3>
                <p className="text-gray-600">
                  Evaluamos tu espacio y requerimientos para ofrecerte la solución de climatización y ventilación más eficiente y adecuada.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 md:py-24 bg-blue-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              ¿Por Qué Elegirnos?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-6">
                <CheckCircle className="h-10 w-10 text-green-500 mx-auto mb-4" />
                <h4 className="text-lg font-semibold mb-2 text-gray-900">Experiencia Comprobada</h4>
                <p className="text-gray-600">Años de experiencia en el sector garantizan trabajos de alta calidad.</p>
              </div>
              <div className="p-6">
                <CheckCircle className="h-10 w-10 text-green-500 mx-auto mb-4" />
                <h4 className="text-lg font-semibold mb-2 text-gray-900">Materiales de Calidad</h4>
                <p className="text-gray-600">Utilizamos materiales duraderos y eficientes para todas nuestras instalaciones.</p>
              </div>
              <div className="p-6">
                <CheckCircle className="h-10 w-10 text-green-500 mx-auto mb-4" />
                <h4 className="text-lg font-semibold mb-2 text-gray-900">Atención Personalizada</h4>
                <p className="text-gray-600">Nos enfocamos en tus necesidades para ofrecerte la mejor solución.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section (Placeholder) */}
        <section id="contact" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              ¿Listo para mejorar tu confort?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Ponte en contacto con nosotros hoy mismo para obtener un presupuesto sin compromiso o para resolver cualquier duda.
            </p>
            {/* Aquí puedes añadir un formulario de contacto o información de contacto directa */}
            <a
              href="mailto:tuemail@ejemplo.com" // Reemplaza con tu email
              className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300 text-lg shadow-md"
            >
              Contactar Ahora
            </a>
            <p className="mt-6 text-gray-600">O llámanos al: <a href="tel:+34000000000" className="text-blue-600 hover:underline">[Tu Número de Teléfono]</a></p>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-gray-400 py-8">
          <div className="container mx-auto px-6 text-center">
            <p>&copy; {new Date().getFullYear()} [Tu Nombre de Empresa]. Todos los derechos reservados.</p>
            {/* Opcional: Añade enlaces a política de privacidad, etc. */}
            {/* <nav className="mt-4">
              <a href="/privacy" className="hover:text-white mx-2">Política de Privacidad</a>
              <a href="/terms" className="hover:text-white mx-2">Términos de Servicio</a>
            </nav> */}
          </div>
        </footer>
      </div>
    </>
  );
}