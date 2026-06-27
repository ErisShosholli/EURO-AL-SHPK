import {
  Award,
  BadgeCheck,
  Building2,
  CheckCircle2,
  DoorOpen,
  DraftingCompass,
  Factory,
  Hammer,
  Home,
  Layers3,
  MessageSquareText,
  PackageCheck,
  PanelTop,
  Ruler,
  ShieldCheck,
  Sparkles,
  Star,
  ThermometerSun,
  Truck,
  Users,
  VenetianMask,
  Wrench
} from "lucide-react";

export const company = {
  name: "EURO AL-SHPK",
  phone: "+383 49 345 666",
  phoneHref: "tel:+38349345666",
  email: "euro-al@outlook.com",
  emailHref: "mailto:euro-al@outlook.com",
  address: "Shipol, Rruga e Kombit, Mitrovicë, Kosovë",
  mapsQuery: "Shipol Rruga e Kombit Mitrovice Kosovo"
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "Rreth Nesh", href: "#rreth-nesh" },
  { label: "Produktet", href: "#produktet" },
  { label: "Projektet", href: "#projektet" },
  { label: "Shërbimet", href: "#sherbimet" },
  { label: "Blog", href: "#blog" },
  { label: "Kontakt", href: "#kontakt" }
];

export const heroCards = [
  {
    title: "Cilësi Premium",
    text: "Profile të certifikuara dhe standarde evropiane.",
    icon: Award
  },
  {
    title: "Izolim Maksimal",
    text: "Kursim energjie me izolim termik dhe akustik.",
    icon: ThermometerSun
  },
  {
    title: "Dizajn Modern",
    text: "Linja elegante për arkitekturë bashkëkohore.",
    icon: Sparkles
  },
  {
    title: "Montim Profesional",
    text: "Ekipe të specializuara për çdo detaj në objekt.",
    icon: Users
  }
];

export const products = [
  {
    title: "Dyer Alumini",
    description: "Dyer hyrëse dhe të brendshme me siguri, qëndrueshmëri dhe estetikë moderne.",
    image: "/images/site/product-doors.jpeg",
    icon: DoorOpen
  },
  {
    title: "Dritare Alumini",
    description: "Sisteme dritaresh me izolim të lartë, hapje praktike dhe jetëgjatësi.",
    image: "/images/site/product-windows.jpeg",
    icon: PanelTop
  },
  {
    title: "Roleta",
    description: "Roleta funksionale për privatësi, mbrojtje nga dielli dhe kontroll të dritës.",
    image: "/images/site/product-shutters.jpeg",
    icon: VenetianMask
  },
  {
    title: "Fasada Ventiluese",
    description: "Zgjidhje fasade me mbrojtje të avancuar, pamje të pastër dhe performancë energjetike.",
    image: "/images/site/product-ventilated.jpeg",
    icon: Layers3
  },
  {
    title: "Fasada Strukturale",
    description: "Sipërfaqe elegante xhami dhe alumini për objekte moderne dhe afariste.",
    image: "/images/site/product-structural.jpeg",
    icon: Building2
  },
  {
    title: "Curtain Wall Systems",
    description: "Sisteme fasade të vazhdueshme për objekte të mëdha, me saktësi teknike.",
    image: "/images/site/product-curtain-wall.jpeg",
    icon: Home
  }
];

export const stats = [
  { value: 500, suffix: "+", label: "Projekte të realizuara", icon: Building2 },
  { value: 300, suffix: "+", label: "Klientë të kënaqur", icon: Users },
  { value: 10, suffix: "+", label: "Vite përvojë", icon: Award },
  { value: 100, suffix: "%", label: "Garanci në cilësi", icon: ShieldCheck }
];

export const projects = [
  {
    title: "Rezidencë Moderne",
    category: "Banimi",
    image: "/images/site/project-residence.jpeg",
    size: "h-80"
  },
  {
    title: "Fasadë Apartamentesh",
    category: "Fasada",
    image: "/images/site/project-facade.jpeg",
    size: "h-96"
  },
  {
    title: "Fasadë Strukturale",
    category: "Afariste",
    image: "/images/site/project-glass.jpeg",
    size: "h-72"
  },
  {
    title: "Objekt i Lartë Banimi",
    category: "Banimi",
    image: "/images/site/project-highrise.jpeg",
    size: "h-[28rem]"
  },
  {
    title: "Sistem Ventilues",
    category: "Fasada",
    image: "/images/site/project-ventilated.jpeg",
    size: "h-80"
  },
  {
    title: "Ballkon dhe Konstruksion",
    category: "Dyer & Dritare",
    image: "/images/site/project-balcony.jpeg",
    size: "h-96"
  },
  {
    title: "Dyer Premium",
    category: "Dyer & Dritare",
    image: "/images/site/project-doors.jpeg",
    size: "h-72"
  },
  {
    title: "Dritare Panoramike",
    category: "Dyer & Dritare",
    image: "/images/site/project-windows.jpeg",
    size: "h-80"
  }
];

export const serviceSteps = [
  {
    title: "Consultim",
    text: "Analizojmë kërkesën, stilin e objektit dhe pritjet teknike të projektit.",
    icon: MessageSquareText
  },
  {
    title: "Matje",
    text: "Marrim dimensione të sakta në terren për prodhim pa kompromis.",
    icon: Ruler
  },
  {
    title: "Projektim",
    text: "Përgatisim zgjidhje funksionale dhe estetike sipas objektit.",
    icon: DraftingCompass
  },
  {
    title: "Prodhim",
    text: "Realizim me profile cilësore, xham profesional dhe pajisje të besueshme.",
    icon: Factory
  },
  {
    title: "Transport",
    text: "Logjistikë e kujdesshme për ruajtjen e materialeve deri në objekt.",
    icon: Truck
  },
  {
    title: "Montim",
    text: "Instalim nga ekip i trajnuar, me kontroll të detajeve dhe nivelimit.",
    icon: Hammer
  },
  {
    title: "Garanci",
    text: "Mbështetje pas përfundimit dhe garanci për cilësi e funksionalitet.",
    icon: PackageCheck
  }
];

export const testimonials = [
  {
    name: "Arben Krasniqi",
    role: "Investitor rezidencial",
    quote:
      "Punë jashtëzakonisht e pastër. Dritaret dhe dyert u montuan saktë, me izolim të dukshëm dhe përfundim shumë elegant.",
    initials: "AK"
  },
  {
    name: "Liridon Gashi",
    role: "Menaxher projekti",
    quote:
      "Ekip korrekt, afate të respektuara dhe komunikim profesional nga matja deri te montimi. Rezultati final ishte premium.",
    initials: "LG"
  },
  {
    name: "Drita Berisha",
    role: "Kliente private",
    quote:
      "Na ndihmuan të zgjedhim sistemin e duhur për shtëpinë. Fasada dhe roletat duken moderne dhe funksionojnë perfekt.",
    initials: "DB"
  }
];

export const faqs = [
  {
    question: "A punoni vetëm në Mitrovicë?",
    answer:
      "Jo. EURO AL-SHPK punon në të gjithë Kosovën dhe realizon projekte në Evropë sipas kërkesës së klientëve."
  },
  {
    question: "A ofroni matje dhe konsultim para ofertës?",
    answer:
      "Po. Fillojmë me konsultim, pastaj realizojmë matje të sakta në objekt për të përgatitur ofertë të qartë dhe zgjidhje teknike."
  },
  {
    question: "Cilat sisteme alumini realizoni?",
    answer:
      "Realizojmë dyer alumini, dritare alumini, roleta, fasada ventiluese, fasada strukturale dhe curtain wall systems."
  },
  {
    question: "A ofroni garanci për punën?",
    answer:
      "Po. Çdo projekt dorëzohet me fokus në cilësi, montim profesional dhe garanci sipas specifikave të materialeve dhe projektit."
  }
];

export const blogPosts = [
  {
    title: "Si të zgjidhni dritaret e duhura për izolim maksimal",
    text: "Faktorët kryesorë që ndikojnë në kursim energjie, komoditet dhe jetëgjatësi.",
    icon: ThermometerSun
  },
  {
    title: "Fasada ventiluese për objekte moderne",
    text: "Pse arkitektët i zgjedhin për estetikë, mbrojtje dhe performancë.",
    icon: Layers3
  },
  {
    title: "Standardet evropiane në montimin e aluminit",
    text: "Detajet teknike që bëjnë diferencën në cilësi dhe siguri.",
    icon: BadgeCheck
  }
];

export const trustPoints = [
  { label: "Materiale cilësore dhe të certifikuara", icon: CheckCircle2 },
  { label: "Izolim termik dhe akustik i lartë", icon: ThermometerSun },
  { label: "Dizajn modern dhe i personalizuar", icon: Wrench },
  { label: "Montim profesional dhe garanci", icon: Star }
];
