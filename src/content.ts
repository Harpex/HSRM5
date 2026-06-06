/**
 * Site içeriği. Gerçek metin ve değerlerle buradan güncelleyebilirsin.
 * Görseller şimdilik placeholder — gerçek fotoğraflarla değiştir (bkz. App.tsx yorumları).
 */
import {
  FactoryIcon,
  GaugeIcon,
  ShieldCheckIcon,
  HandshakeIcon,
} from './icons'

export const trustCards = [
  {
    icon: FactoryIcon,
    title: 'Üretici Firma',
    desc: 'Kendi tesisimizde, baştan sona kontrol ettiğimiz bir üretim hattı.',
  },
  {
    icon: GaugeIcon,
    title: 'Yüksek Üretim Kapasitesi',
    desc: 'Toptan ve kurumsal taleplere zamanında yanıt veren ölçek.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Kalite Kontrol Süreci',
    desc: 'Her parti, sevkiyat öncesi çok aşamalı kontrolden geçer.',
  },
  {
    icon: HandshakeIcon,
    title: 'Kurumsal Çözüm Ortağı',
    desc: 'Markanıza özel üretim ve uzun vadeli tedarik iş birlikleri.',
  },
]

export const products = [
  {
    name: 'Endüstriyel Mop Serisi',
    desc: 'Yüksek emiş kapasiteli, dayanıklı profesyonel temizlik mopları.',
    image: 'https://images.unsplash.com/photo-1649073000644-d839009ff2dd',
  },
  {
    name: 'Mikrofiber Sistemler',
    desc: 'Hijyen odaklı kurumsal kullanım için mikrofiber mop çözümleri.',
    image: 'https://images.unsplash.com/photo-1664004924947-2a2b6fbefb8b',
  },
  {
    name: 'Islak & Kuru Setler',
    desc: 'Otel, hastane ve tesisler için komple temizlik ekipman setleri.',
    image: 'https://images.unsplash.com/photo-1689127903369-aef916b0c40d',
  },
  {
    name: 'Aparat & Yedek Parça',
    desc: 'Sap, kova, pres ve tüm tamamlayıcı ekipman yelpazesi.',
    image: 'https://images.unsplash.com/photo-1664008760004-182420e58e7c',
  },
]

export const processSteps = [
  { n: '01', title: 'Hammadde', desc: 'Seçilmiş, test edilmiş malzeme tedariki.' },
  { n: '02', title: 'Üretim', desc: 'Modern hatlarda hassas üretim.' },
  { n: '03', title: 'Kalite Kontrol', desc: 'Çok aşamalı denetim ve test.' },
  { n: '04', title: 'Paketleme', desc: 'Dayanıklı, ihracata uygun ambalaj.' },
  { n: '05', title: 'Sevkiyat', desc: 'Yurt içi ve yurt dışına zamanında teslim.' },
]

export const stats = [
  { target: 20, suffix: '+', label: 'Yıl Deneyim' },
  { target: 500000, suffix: '+', label: 'Yıllık Üretim', compact: true },
  { target: 10, suffix: '+', label: 'Ülkeye İhracat' },
  { target: 1000, suffix: '+', label: 'Kurumsal Müşteri' },
]

export const certificates = [
  { code: 'ISO 9001', desc: 'Kalite Yönetim Sistemi' },
  { code: 'ISO 14001', desc: 'Çevre Yönetim Sistemi' },
  { code: 'CE', desc: 'Avrupa Uygunluk Belgesi' },
  { code: 'TSE', desc: 'Türk Standartları Belgesi' },
]
