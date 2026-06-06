/**
 * Unsplash görselleri için optimize edilmiş <img> sarmalayıcı.
 * - auto=format + q=72 → küçük dosya, modern format (Lighthouse/CWV)
 * - srcSet ile responsive yükleme
 * - loading="lazy" (hero hariç) → ilk yük hızlı
 *
 * NOT: Bunlar telifsiz Unsplash stok görselleridir, yer tutucu amaçlıdır.
 * Üretimde kendi fabrika/ürün fotoğraflarınla değiştir.
 */
type RemoteImageProps = {
  /** Unsplash görselinin temel URL'i (sorgu parametresi olmadan) */
  src: string
  alt: string
  className?: string
  /** Hero gibi ilk ekranda görünen görsellerde true → eager yükle */
  priority?: boolean
  /** Varsayılan görünen genişlik (px) — srcSet hesabı için */
  width?: number
}

function build(src: string, w: number) {
  return `${src}?auto=format&fit=crop&q=72&w=${w}`
}

export function RemoteImage({
  src,
  alt,
  className = '',
  priority = false,
  width = 800,
}: RemoteImageProps) {
  const widths = [width, width * 1.5, width * 2].map((w) => Math.round(w))
  const srcSet = widths.map((w) => `${build(src, w)} ${w}w`).join(', ')

  return (
    <img
      src={build(src, width)}
      srcSet={srcSet}
      sizes={`(max-width: 768px) 100vw, ${width}px`}
      alt={alt}
      className={className}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      // @ts-expect-error fetchPriority React tipinde yeni olabilir
      fetchpriority={priority ? 'high' : undefined}
    />
  )
}
