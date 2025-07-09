// import { GoogleAnalytics } from "@next/third-parties/google";
// import { GoogleTagManager } from "@next/third-parties/google";
// import { Analytics } from "@vercel/analytics/next";

// import MainLayout from "@/components/layout/MainLayout";
// import Providers from "./providers";
// import { getAllFontVariables } from "./fonts/fonts.config";

// import "@/styles/styles.scss";

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "https://www.almaissues.com",
  ),
  title: {
    default: "Alma Issues - Moda de Diseño Atemporal",
    template: "%s - Alma Issues",
  },
  description:
    "Descubre Alma Issues, donde cada diseño es una pieza única que celebra la artesanía y la moda atemporal. Explora nuestra colección de conjuntos, vestidos y túnicas de alta calidad, creadas con pasión y dedicación para mujeres que buscan elegancia y distinción en cada prenda.",

  // Open Graph (para Facebook, Pinterest, etc.)
  openGraph: {
    title: "Alma Issues | Moda de Diseño Atemporal",
    description:
      "Descubre piezas únicas que celebran la artesanía y la atemporalidad. Conjuntos, vestidos y túnicas de alta calidad creadas con pasión para mujeres que buscan elegancia y distinción.",
    url: "https://www.almaissues.com",
    siteName: "Alma Issues",
    images: [
      {
        url: "/images/test-og.jpg",
        width: 1200,
        height: 630,
        alt: "Diseños de alta costura de Alma Issues",
      },
    ],
    locale: "es_ES",
    type: "website",
    publishedTime: "2024-01-01T00:00:00.000Z",
    authors: ["Alma Issues"],
  },

  // Para los robots de búsqueda
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Para Twitter
  twitter: {
    card: "summary_large_image",
    title: "Alma Issues | Moda de Diseño atemporal",
    description:
      "Descubre piezas únicas que celebran la artesanía y la atemporalidad. Conjuntos, vestidos y túnicas de alta calidad creadas con pasión para mujeres que buscan elegancia y distinción.",
    images: ["/images/test-og.jpg"],
  },
};

// @ts-expect-error testing
export default function RootLayout({ children }) {
  return (
    <html lang="es">
      {/* <body className={getAllFontVariables()} suppressHydrationWarning={true}> */}
      <body suppressHydrationWarning={true}>
        {/* <Providers>
          <MainLayout>{children}</MainLayout>
        </Providers> */}
        {children}
        {/* <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} /> */}
        {/* <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        <Analytics /> */}
      </body>
    </html>
  );
}
