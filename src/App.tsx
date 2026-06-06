import { useEffect, useState } from 'react'
import './App.css'
import { useReveal, useCountUp } from './hooks'
import { RemoteImage } from './image'
import {
  ArrowRightIcon,
  PhoneIcon,
  MailIcon,
  PinIcon,
  WhatsAppIcon,
} from './icons'
import {
  trustCards,
  products,
  processSteps,
  stats,
  certificates,
} from './content'

/* ===============================================================
   Yardımcı bileşenler
   =============================================================== */

/** Görünürlükte yumuşakça beliren sarmalayıcı. */
function Reveal({
  children,
  className = '',
  style,
}: {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}) {
  const ref = useReveal<HTMLDivElement>()
  return (
    <div ref={ref} className={`reveal ${className}`} style={style}>
      {children}
    </div>
  )
}

/** Bölüm üstü küçük etiket — kurumsal, sade. */
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-navy-500">
      {children}
    </span>
  )
}

/* ===============================================================
   Bölümler
   =============================================================== */

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const nav = [
    { label: 'Kurumsal', href: '#hakkimizda' },
    { label: 'Ürünler', href: '#urunler' },
    { label: 'Üretim', href: '#uretim' },
    { label: 'Sertifikalar', href: '#sertifikalar' },
    { label: 'İletişim', href: '#iletisim' },
  ]

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'border-b border-ink-200 bg-white/90 backdrop-blur'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <a
          href="#"
          className={`text-xl font-semibold tracking-tight transition-colors ${
            scrolled ? 'text-navy-900' : 'text-white'
          }`}
        >
          HASMOP
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className={`text-sm font-medium transition-colors ${
                scrolled
                  ? 'text-ink-600 hover:text-navy-700'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              {n.label}
            </a>
          ))}
          <a
            href="#iletisim"
            className="rounded-md bg-signal-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-signal-600"
          >
            Teklif Al
          </a>
        </nav>

        <button
          type="button"
          aria-label="Menü"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className={`flex h-10 w-10 items-center justify-center lg:hidden ${
            scrolled ? 'text-navy-900' : 'text-white'
          }`}
        >
          <span className="text-2xl">{open ? '✕' : '☰'}</span>
        </button>
      </div>

      {open && (
        <div className="border-t border-ink-200 bg-white px-6 py-6 lg:hidden">
          <nav className="flex flex-col gap-4">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-ink-700"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#iletisim"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md bg-signal-500 px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Teklif Al
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center">
      {/* Stok görsel — kendi üretim tesisi fotoğrafın/videonla değiştir.
          Koyu degrade overlay metin okunurluğu için korunmalı. */}
      <div className="absolute inset-0 -z-10">
        <RemoteImage
          src="https://images.unsplash.com/photo-1717386255773-1e3037c81788"
          alt="Üretim tesisi"
          priority
          width={1600}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/85 via-navy-900/70 to-navy-950/90" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 pt-28 pb-20 lg:px-10">
        <div className="max-w-3xl">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-navy-200">
            Profesyonel Mop Üretimi
          </p>
          <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            HASMOP
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-100/90 lg:text-xl">
            Türkiye ve yurt dışına kaliteli üretim çözümleri. Kendi tesisimizde
            ürettiğimiz profesyonel mop ve temizlik ekipmanları.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#iletisim"
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-signal-500 px-7 py-4 text-base font-semibold text-white transition-colors hover:bg-signal-600"
            >
              Teklif Al
              <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#urunler"
              className="inline-flex items-center justify-center rounded-md border border-white/30 bg-white/5 px-7 py-4 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              Ürünleri İncele
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Trust() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
      <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {trustCards.map((c, i) => (
          <Reveal
            key={c.title}
            className="flex h-full flex-col"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <c.icon className="h-9 w-9 text-navy-600" />
            <h3 className="mt-6 text-lg font-semibold text-navy-900">
              {c.title}
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-500">
              {c.desc}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Products() {
  return (
    <section id="urunler" className="bg-ink-50 py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <Eyebrow>Ürünler</Eyebrow>
          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-navy-900 lg:text-5xl">
            Profesyonel temizlik için üretim
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-500">
            Kurumsal kullanım için tasarlanmış, dayanıklı ve hijyen odaklı
            ürün gruplarımız.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <Reveal key={p.name}>
              <a href="#iletisim" className="group block">
                {/* Stok görsel — kendi ürün fotoğrafınla değiştir */}
                <div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-ink-100">
                  <RemoteImage
                    src={p.image}
                    alt={p.name}
                    width={500}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-navy-900">
                  {p.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">
                  {p.desc}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-navy-600 transition-colors group-hover:text-navy-800">
                  Detay İncele
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Process() {
  return (
    <section
      id="uretim"
      className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36"
    >
      <Reveal className="max-w-2xl">
        <Eyebrow>Üretim Süreci</Eyebrow>
        <h2 className="mt-5 text-4xl font-semibold tracking-tight text-navy-900 lg:text-5xl">
          Hammaddeden sevkiyata
        </h2>
      </Reveal>

      <Reveal className="mt-16">
        <ol className="grid gap-y-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-x-6">
          {processSteps.map((s, i) => (
            <li key={s.n} className="relative">
              {/* Bağlantı çizgisi (yalnızca masaüstü) */}
              {i < processSteps.length - 1 && (
                <span className="absolute left-12 top-3 hidden h-px w-full bg-ink-200 lg:block" />
              )}
              <span className="relative inline-block text-sm font-semibold text-navy-400">
                {s.n}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-navy-900">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">
                {s.desc}
              </p>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  )
}

function About() {
  return (
    <section id="hakkimizda" className="bg-navy-900 py-28 text-white lg:py-36">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
        <Reveal>
          <Eyebrow>Hakkımızda</Eyebrow>
          <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight lg:text-5xl">
            20 yılı aşkın üretim deneyimi
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-navy-100/80">
            Hasmop, profesyonel temizlik ekipmanları alanında kendi tesisinde
            üretim yapan bir kuruluştur. Kalite kontrolünden ihracata kadar
            tüm süreci tek çatı altında yönetiriz.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-navy-100/80">
            Kurumsal müşterilerimiz için güvenilir, ölçeklenebilir ve uzun
            vadeli bir çözüm ortağıyız.
          </p>
          <a
            href="#iletisim"
            className="mt-8 inline-flex items-center gap-2 text-base font-semibold text-white"
          >
            Bizimle çalışın
            <ArrowRightIcon className="h-5 w-5" />
          </a>
        </Reveal>

        <Reveal>
          {/* Stok görsel — kendi fabrika / üretim hattı fotoğrafınla değiştir */}
          <div className="aspect-[4/3] w-full overflow-hidden rounded-xl">
            <RemoteImage
              src="https://images.unsplash.com/photo-1716194583732-0b9874234218"
              alt="Üretim hattı"
              width={800}
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function StatItem({
  target,
  suffix,
  label,
}: {
  target: number
  suffix: string
  label: string
}) {
  const { ref, value } = useCountUp(target)
  return (
    <div className="text-center">
      <div className="text-4xl font-semibold tracking-tight text-navy-900 lg:text-5xl">
        <span ref={ref}>{value.toLocaleString('tr-TR')}</span>
        <span className="text-signal-500">{suffix}</span>
      </div>
      <div className="mt-3 text-sm font-medium uppercase tracking-wider text-ink-500">
        {label}
      </div>
    </div>
  )
}

function Stats() {
  return (
    <section className="border-y border-ink-200 py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-12 px-6 lg:grid-cols-4 lg:px-10">
        {stats.map((s) => (
          <StatItem
            key={s.label}
            target={s.target}
            suffix={s.suffix}
            label={s.label}
          />
        ))}
      </div>
    </section>
  )
}

function Certificates() {
  return (
    <section
      id="sertifikalar"
      className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36"
    >
      <Reveal className="max-w-2xl">
        <Eyebrow>Sertifikalar</Eyebrow>
        <h2 className="mt-5 text-4xl font-semibold tracking-tight text-navy-900 lg:text-5xl">
          Belgelendirilmiş kalite
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {certificates.map((c) => (
          <Reveal key={c.code}>
            <div className="flex h-full flex-col justify-between rounded-xl border border-ink-200 p-8 transition-colors hover:border-navy-300">
              <div className="text-2xl font-semibold tracking-tight text-navy-900">
                {c.code}
              </div>
              <p className="mt-6 text-sm text-ink-500">{c.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function References() {
  // Placeholder logo duvarı — gerçek müşteri logolarıyla değiştir
  const logos = [
    'Müşteri A',
    'Müşteri B',
    'Müşteri C',
    'Müşteri D',
    'Müşteri E',
    'Müşteri F',
  ]
  return (
    <section className="bg-ink-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="text-center">
          <Eyebrow>Referanslar</Eyebrow>
          <p className="mx-auto mt-4 max-w-xl text-ink-500">
            Yurt içi ve yurt dışından kurumsal iş ortaklarımız.
          </p>
        </Reveal>
        <Reveal className="mt-14">
          <div className="grid grid-cols-2 items-center gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
            {logos.map((l) => (
              <div
                key={l}
                className="flex h-12 items-center justify-center text-sm font-medium text-ink-400"
              >
                {/* GERÇEK LOGO: <img src="..." alt="..." /> */}
                {l}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type = 'text',
}: {
  label: string
  name: string
  type?: string
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-medium text-ink-700"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        className="w-full rounded-md border border-ink-200 px-4 py-3 text-ink-800 outline-none transition-colors placeholder:text-ink-400 focus:border-navy-500"
      />
    </div>
  )
}

function Contact() {
  const [sent, setSent] = useState(false)

  const contactRows = [
    {
      icon: PhoneIcon,
      label: 'Telefon',
      value: '+90 (000) 000 00 00',
      href: 'tel:+900000000000',
    },
    {
      icon: MailIcon,
      label: 'E-posta',
      value: 'info@hasmop.com',
      href: 'mailto:info@hasmop.com',
    },
    {
      icon: WhatsAppIcon,
      label: 'WhatsApp',
      value: 'Hızlı iletişim',
      href: 'https://wa.me/900000000000',
    },
    {
      icon: PinIcon,
      label: 'Adres',
      value: 'Organize Sanayi Bölgesi, Türkiye',
      href: '#harita',
    },
  ]

  return (
    <section
      id="iletisim"
      className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36"
    >
      <div className="grid gap-16 lg:grid-cols-2">
        {/* Sol: teklif formu (ön planda) */}
        <Reveal>
          <Eyebrow>İletişim</Eyebrow>
          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-navy-900 lg:text-5xl">
            Teklif isteyin
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-500">
            Toptan ve kurumsal talepleriniz için formu doldurun. En kısa
            sürede dönüş yapalım.
          </p>

          {sent ? (
            <div className="mt-10 rounded-lg border border-navy-200 bg-navy-50 p-6 text-navy-800">
              Talebiniz alındı. Teşekkür ederiz — en kısa sürede dönüş
              yapacağız.
              <span className="block text-sm text-ink-500">
                {' '}
                (Demo gönderim)
              </span>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setSent(true)
              }}
              className="mt-10 grid gap-5"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Firma / Ad Soyad" name="name" />
                <Field label="Telefon" name="phone" type="tel" />
              </div>
              <Field label="E-posta" name="email" type="email" />
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-ink-700"
                >
                  Talebiniz
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full rounded-md border border-ink-200 px-4 py-3 text-ink-800 outline-none transition-colors placeholder:text-ink-400 focus:border-navy-500"
                  placeholder="Ürün, adet ve detayları kısaca yazın…"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-signal-500 px-7 py-4 text-base font-semibold text-white transition-colors hover:bg-signal-600"
              >
                Teklif Talebi Gönder
                <ArrowRightIcon className="h-5 w-5" />
              </button>
            </form>
          )}
        </Reveal>

        {/* Sağ: iletişim bilgileri + harita */}
        <Reveal>
          <div className="rounded-2xl border border-ink-200 p-8 lg:p-10">
            <h3 className="text-lg font-semibold text-navy-900">Bize ulaşın</h3>
            <ul className="mt-6 divide-y divide-ink-100">
              {contactRows.map((r) => (
                <li key={r.label}>
                  <a
                    href={r.href}
                    className="flex items-center gap-4 py-4 transition-colors hover:text-navy-700"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-navy-50 text-navy-600">
                      <r.icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-wider text-ink-400">
                        {r.label}
                      </span>
                      <span className="block font-medium text-ink-800">
                        {r.value}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Örnek konum — kendi adresinin Google Maps embed URL'i ile değiştir */}
            <div id="harita" className="mt-6 overflow-hidden rounded-lg">
              <iframe
                title="Hasmop konum"
                src="https://www.google.com/maps?q=Turkey&output=embed"
                className="aspect-video w-full border-0 grayscale"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-ink-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-12 lg:flex-row lg:items-center lg:px-10">
        <div>
          <div className="text-lg font-semibold tracking-tight text-navy-900">
            HASMOP
          </div>
          <p className="mt-1 text-sm text-ink-500">
            Profesyonel mop ve temizlik ekipmanları üreticisi.
          </p>
        </div>
        <p className="text-sm text-ink-400">
          © {new Date().getFullYear()} Hasmop. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  )
}

/* ===============================================================
   Sayfa
   =============================================================== */

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Trust />
        <Products />
        <Process />
        <About />
        <Stats />
        <Certificates />
        <References />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
