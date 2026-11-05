import type { CSSProperties } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Clock3,
  MapPin,
  Phone,
  Star,
  Scissors,
  Gem,
  Shirt,
  Sparkles,
} from "lucide-react";

const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=V-SQUARE%20Vidhan%20Sabha%20Rd%2C%20Saddu%2C%20Raipur%2C%20Chhattisgarh%20492014";
const mapsEmbedUrl =
  "https://www.google.com/maps?q=V-SQUARE,+Vidhan+Sabha+Rd,+Saddu,+Raipur,+Chhattisgarh+492014&output=embed";
const phoneUrl = "tel:+917713172293";

const collections = [
  {
    number: "01",
    name: "Menswear",
    detail: "Everyday essentials and considered occasion looks.",
    image:
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=1200&q=88",
    alt: "Editorial menswear styling",
  },
  {
    number: "02",
    name: "Womenswear",
    detail: "Fresh looks for everyday plans and special moments.",
    image:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1200&q=88",
    alt: "Contemporary womenswear editorial",
  },
  {
    number: "03",
    name: "Occasionwear",
    detail: "Polished dressing for celebrations and important days.",
    image:
      "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?auto=format&fit=crop&w=1200&q=88",
    alt: "Formal occasionwear",
  },
  {
    number: "04",
    name: "Fabrics",
    detail: "Explore fabric choices and ask about current availability.",
    image:
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=1200&q=88",
    alt: "Tailoring fabric texture",
  },
];

const storePhotos = [
  {
    src: "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q5Mq9IhXcIWaCp3ZslxQ1bjr3lIAG-K6qANImdmpeeos_MkdwZW7O4G-pWpmwV_U-mhLVFT_FqYHay3gAsWs5XeR6OaRp6s12wSL11M5Za6HHTX6o82qrmM044oQaFzid17ztZG3KhYu=w397-h298-k-no",
    alt: "V-SQUARE store photo from its Google Maps listing",
    label: "The store",
  },
  {
    src: "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SN6hZJGVZc-rnqsNQQSTnm9nPJ200hFvtmTS7JRJApbUVAOHeo4dcfDUDeDj7Wu3LPWdbBpMsXlp_yLfEXdgzJmfdb3IVy0AlFyx5WpoIo68qVL7fArrAQN3yqdSlhHtxUxyr9E4vZ6EYu=w224-h398-k-no",
    alt: "V-SQUARE photo from its Google Maps listing",
    label: "A look inside",
  },
  {
    src: "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QcdEq-Os-onP-EAKDmiapobWvQaSQZxjYtnZgr8wvTYSffVEYnzd_yekfsWDvC22xEB3_gSAKOlT1iNnA0O6CLl24WxgmAfv3rFB9v5h3q6JUKLWTW7c4ACTVAKpDbOqm-e2AoSpp8VFLs=w224-h398-k-no",
    alt: "Latest V-SQUARE photo from Google Maps",
    label: "Latest photo",
  },
  {
    src: "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SSibmPRMAo8LEBKiInPwVanHHJkwZKbs4JgOfpDk8Idm3rMzW2-kGRVJ3Rj7G40e_KbpYJO_La1TIlICxVcSZ11Mv3Uj37TH7KW4GOYlrlD8hf7R2t-Dswp09yOROiSuUg1Fc2zQ=w224-h298-k-no",
    alt: "V-SQUARE interior photo from Google Maps",
    label: "Inside V-SQUARE",
  },
];

function Photo({
  src,
  alt,
  className = "",
  style,
}: {
  src: string;
  alt: string;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={className}
      style={{
        backgroundImage: `url("${src}")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        ...style,
      }}
    />
  );
}

function SectionIntro({
  kicker,
  title,
  body,
  dark = false,
  align = "left",
}: {
  kicker: string;
  title: string;
  body?: string;
  dark?: boolean;
  align?: "left" | "center";
}) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <p
        className={`text-[10px] font-bold uppercase tracking-[0.25em] ${
          dark ? "text-[#d5ad72]" : "text-[#a77b4a]"
        }`}
      >
        {kicker}
      </p>
      <h2
        className={`mt-4 font-serif text-4xl leading-[1.03] tracking-[-0.045em] sm:text-5xl lg:text-[3.8rem] ${
          dark ? "text-[#f8f2e8]" : "text-[#211e19]"
        }`}
      >
        {title}
      </h2>
      {body ? (
        <p
          className={`mt-5 text-sm leading-7 sm:text-base sm:leading-8 ${
            dark ? "text-white/60" : "text-[#756e64]"
          }`}
        >
          {body}
        </p>
      ) : null}
    </div>
  );
}

function GoldRule() {
  return <span className="block h-px w-12 bg-[#b98d54]" />;
}

export const metadata = {
  title: "V-SQUARE | Clothing Store in Saddu, Raipur",
  description:
    "Explore clothing collections, fabrics and occasionwear at V-SQUARE, Vidhan Sabha Road, Saddu, Raipur.",
};

export default function VSquareWebsite() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#11100e] pb-20 text-[#f5efe5] sm:pb-0">
      <div className="border-b border-white/[0.07] bg-[#0b0a09]">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-3 px-4 py-2.5 sm:px-7 lg:px-12">
          <p className="truncate text-[9px] font-semibold uppercase tracking-[0.2em] text-white/45 sm:text-[10px]">
            Vidhan Sabha Road · Saddu · Raipur
          </p>
          <p className="shrink-0 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#c9a16b] sm:text-[10px]">
            Style · Fabric · Occasion
          </p>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-white/[0.08] bg-[#11100e]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-5 px-4 py-4 sm:px-7 lg:px-12 lg:py-5">
          <a href="#top" className="flex shrink-0 items-center gap-3" aria-label="V-SQUARE home">
            <span className="font-serif text-[2.1rem] leading-none text-[#d6b17c] sm:text-[2.35rem]">V</span>
            <span className="block border-l border-[#b98d54]/45 pl-3">
              <span className="block text-[17px] font-semibold leading-none tracking-[0.16em] text-[#f7f0e5] sm:text-[19px]">
                V-SQUARE
              </span>
              <span className="mt-1.5 block text-[8px] font-semibold uppercase tracking-[0.26em] text-white/40">
                Clothing store
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
            <a href="#top" className="text-[11px] font-semibold text-white/65 transition hover:text-[#d6b17c]">Home</a>
            <a href="#collections" className="text-[11px] font-semibold text-white/65 transition hover:text-[#d6b17c]">Collections</a>
            <a href="#experience" className="text-[11px] font-semibold text-white/65 transition hover:text-[#d6b17c]">The V-SQUARE edit</a>
            <a href="#reviews" className="text-[11px] font-semibold text-white/65 transition hover:text-[#d6b17c]">Reviews</a>
            <a href="#store" className="text-[11px] font-semibold text-white/65 transition hover:text-[#d6b17c]">Visit</a>
          </nav>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <a
              href={phoneUrl}
              aria-label="Call V-SQUARE"
              className="hidden size-10 items-center justify-center rounded-full border border-white/15 text-[#d6b17c] transition hover:border-[#d6b17c] hover:bg-white/[0.06] sm:inline-flex"
            >
              <Phone size={15} />
            </a>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-10 items-center gap-2 rounded-full bg-[#d4b078] px-4 text-[10px] font-bold text-[#17130f] transition hover:bg-[#ecd2a7] sm:min-h-11 sm:px-5 sm:text-[11px]"
            >
              Visit store <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      </header>

      <section id="top" className="relative border-b border-white/[0.08] bg-[#11100e]">
        <div className="mx-auto grid max-w-[1440px] lg:min-h-[700px] lg:grid-cols-[0.88fr_1.12fr]">
          <div className="relative z-10 flex flex-col justify-center px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24 xl:px-20">
            <div className="flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.26em] text-[#d6b17c] sm:text-[10px]">
              <GoldRule />
              Find your signature style
            </div>
            <h1 className="mt-7 max-w-[650px] font-serif text-[3.6rem] leading-[0.93] tracking-[-0.065em] text-[#f5efe5] sm:text-7xl lg:text-[5.9rem] xl:text-[6.55rem]">
              Style that makes a statement.
            </h1>
            <p className="mt-7 max-w-lg text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
              Discover clothing, fabric choices and occasion looks at V-SQUARE,
              your neighbourhood clothing store in Saddu, Raipur.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#collections"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#d4b078] px-6 text-xs font-bold text-[#17130f] transition hover:bg-[#ecd2a7]"
              >
                Explore collections <ArrowRight size={15} />
              </a>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/25 px-6 text-xs font-bold text-white transition hover:border-[#d6b17c] hover:text-[#d6b17c]"
              >
                <MapPin size={14} /> Find the store
              </a>
            </div>
            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/10 pt-6">
              <div>
                <p className="font-serif text-3xl text-[#e3c18e]">4.8<span className="ml-1 text-sm text-white/50">/ 5</span></p>
                <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.17em] text-white/40">Google rating</p>
              </div>
              <span className="h-9 w-px bg-white/15" />
              <div>
                <p className="font-serif text-3xl text-[#f5efe5]">305</p>
                <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.17em] text-white/40">Public reviews</p>
              </div>
              <span className="h-9 w-px bg-white/15" />
              <div>
                <p className="font-serif text-3xl text-[#f5efe5]">9:30</p>
                <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.17em] text-white/40">Listed closing · PM</p>
              </div>
            </div>
          </div>

          <div className="relative min-h-[430px] overflow-hidden border-y border-white/10 bg-[#28221b] sm:min-h-[560px] lg:min-h-full lg:border-y-0 lg:border-l">
            <Photo
              src="https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=1800&q=90"
              alt="Fashion editorial showing a tailored menswear look"
              className="absolute inset-0"
              style={{ backgroundPosition: "center 28%" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0a09]/90 via-[#0b0a09]/10 to-[#0b0a09]/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#11100e]/20 via-transparent to-transparent" />
            <div className="absolute left-5 top-5 flex items-center gap-3 border border-white/20 bg-black/20 px-4 py-3 backdrop-blur-sm sm:left-8 sm:top-8">
              <span className="font-serif text-2xl text-[#e0bd88]">V.</span>
              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/80">The V-SQUARE edit</span>
            </div>
            <div className="absolute bottom-7 left-5 right-5 flex items-end justify-between gap-4 sm:bottom-10 sm:left-9 sm:right-9 lg:bottom-12 lg:left-12 lg:right-12">
              <div className="max-w-sm">
                <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#e1bd85]">Dress for the moment</p>
                <p className="mt-3 font-serif text-3xl leading-[1.04] tracking-[-0.035em] text-white sm:text-4xl lg:text-[2.8rem]">
                  The details are what make the look.
                </p>
              </div>
              <span className="hidden border border-white/35 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/80 md:inline-flex">
                Saddu · Raipur
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#181613]">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-y-5 px-5 py-7 sm:grid-cols-4 sm:px-8 lg:px-14 lg:py-8">
          {[
            { icon: Gem, title: "Quality fabrics", detail: "Mentioned by shoppers" },
            { icon: Scissors, title: "Custom tailoring", detail: "A review-highlighted service" },
            { icon: Shirt, title: "Style selection", detail: "Looks for different occasions" },
            { icon: Sparkles, title: "Helpful service", detail: "A recurring review theme" },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className={`flex items-center gap-3 px-1 sm:px-4 ${index > 0 ? "sm:border-l sm:border-white/10" : ""}`}>
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-[#b98d54]/35 text-[#d6b17c] sm:size-11">
                  <Icon size={17} strokeWidth={1.5} />
                </span>
                <span>
                  <span className="block text-[11px] font-semibold text-white/90 sm:text-xs">{item.title}</span>
                  <span className="mt-1 block text-[9px] leading-4 text-white/40 sm:text-[10px]">{item.detail}</span>
                </span>
              </div>
            );
          })}
        </div>
      </section>

      <section id="collections" className="bg-[#11100e]">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-28">
          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <SectionIntro
              kicker="Explore the collection"
              title="A look for every occasion."
              body="Browse the style directions and ask the store team about the latest collection, available fabrics and fitting options."
              dark
            />
            <a href={phoneUrl} className="inline-flex w-fit items-center gap-2 border-b border-[#b98d54] pb-2 text-[11px] font-bold text-[#d6b17c] transition hover:gap-3">
              Ask about availability <ArrowRight size={14} />
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-4 lg:grid-cols-4">
            {collections.map((item) => (
              <a key={item.number} href="#store" className="group relative block overflow-hidden border border-white/10 bg-[#211d18]">
                <Photo
                  src={item.image}
                  alt={item.alt}
                  className="aspect-[0.78] w-full transition duration-700 group-hover:scale-[1.04]"
                  style={{ backgroundPosition: "center" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/5 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 lg:p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-semibold tracking-[0.18em] text-white/55">{item.number}</span>
                    <ArrowUpRight size={15} className="text-[#d6b17c] transition group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </div>
                  <h3 className="mt-5 font-serif text-2xl leading-tight text-white sm:mt-7 sm:text-3xl">{item.name}</h3>
                  <p className="mt-2 hidden text-[10px] leading-5 text-white/55 sm:block">{item.detail}</p>
                  <span className="mt-3 inline-block text-[9px] font-bold uppercase tracking-[0.16em] text-[#d6b17c] sm:mt-4">Discover more</span>
                </div>
              </a>
            ))}
          </div>
          <p className="mt-4 text-[9px] leading-5 text-white/35">
            Editorial photographs are for visual inspiration. Please contact the store to confirm current styles and availability.
          </p>
        </div>
      </section>

      <section id="experience" className="border-y border-white/10 bg-[#1b1814]">
        <div className="mx-auto grid max-w-[1440px] lg:grid-cols-[1.05fr_.95fr]">
          <div className="relative min-h-[390px] overflow-hidden sm:min-h-[520px]">
            <Photo
              src="https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=1400&q=88"
              alt="Close-up of tailored clothing fabric"
              className="absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <span className="absolute bottom-6 left-6 text-[9px] font-bold uppercase tracking-[0.22em] text-white/70 sm:bottom-9 sm:left-9">
              Fabric · Form · Finish
            </span>
          </div>
          <div className="flex flex-col justify-center px-5 py-14 sm:px-10 sm:py-20 lg:px-14 xl:px-20">
            <SectionIntro
              kicker="The V-SQUARE experience"
              title="It’s all in the fit, feel and finish."
              body="Customer feedback highlights quality fabrics, a varied clothing selection and custom tailoring. Visit the store to explore the options available."
              dark
            />
            <div className="mt-9 grid grid-cols-2 gap-x-5 gap-y-5 border-t border-white/10 pt-6">
              {[
                "Premium fabric choices",
                "Custom-fit enquiries",
                "Designer outfit selection",
                "Value-conscious shopping",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-[10px] leading-5 text-white/70 sm:text-xs">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[#c99c62]" />
                  {item}
                </div>
              ))}
            </div>
            <a href={phoneUrl} className="mt-9 inline-flex min-h-11 w-fit items-center gap-3 border border-[#d6b17c]/55 px-5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#e3c18e] transition hover:bg-[#d6b17c] hover:text-[#17130f]">
              Call to enquire <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </section>

      <section id="reviews" className="bg-[#11100e]">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[.65fr_1.35fr] lg:items-center lg:gap-20 lg:px-14 lg:py-28">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#d6b17c]">Customer feedback</p>
            <p className="mt-5 font-serif text-7xl leading-none tracking-[-0.06em] text-[#f6efe5] sm:text-8xl">4.8<span className="ml-2 text-2xl text-[#d6b17c]">/ 5</span></p>
            <div className="mt-5 flex gap-1 text-[#d6b17c]">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} size={16} className="fill-current" />
              ))}
            </div>
            <p className="mt-3 text-xs text-white/45">305 public Google reviews, as shown in the supplied listing.</p>
            <a href={mapsUrl} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#d6b17c] hover:gap-3">
              Read Google reviews <ArrowUpRight size={13} />
            </a>
          </div>
          <div className="relative border-y border-white/10 py-8 sm:py-10 lg:border-l lg:border-y-0 lg:py-5 lg:pl-12">
            <span className="absolute -top-4 left-0 font-serif text-6xl text-[#b98d54]/45 lg:left-12">“</span>
            <blockquote className="max-w-3xl pt-5 font-serif text-2xl leading-[1.27] tracking-[-0.025em] text-[#f2e9dc] sm:text-3xl lg:text-[2.65rem]">
              Stylish collection and great service!
            </blockquote>
            <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold text-white/85">Faiyaz Mohammad</p>
                <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-white/40">Google review · Local Guide</p>
              </div>
              <p className="max-w-xs text-[10px] leading-5 text-white/40">
                Other reviewers also mention fabric quality, custom fits and the clothing selection.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#191612]">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionIntro
              kicker="A closer look"
              title="Inside V-SQUARE."
              body="A selection of photos from the store’s public Google Maps listing."
              dark
            />
            <a href={mapsUrl} target="_blank" rel="noreferrer" className="inline-flex w-fit items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#d6b17c] hover:gap-3">
              View Google Maps listing <ArrowUpRight size={13} />
            </a>
          </div>
          <div className="mt-9 grid grid-cols-2 gap-3 sm:mt-12 sm:grid-cols-4 sm:gap-4">
            {storePhotos.map((photo, index) => (
              <a
                key={photo.src}
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="group block"
                aria-label={photo.alt}
              >
                <Photo
                  src={photo.src}
                  alt={photo.alt}
                  className={`aspect-[0.82] overflow-hidden border border-white/10 bg-[#29231b] transition duration-500 group-hover:border-[#c99c62]/70 group-hover:brightness-110 ${index === 0 ? "sm:aspect-[0.9]" : ""}`}
                />
                <p className="mt-3 text-[9px] font-semibold uppercase tracking-[0.16em] text-white/45">{photo.label}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="store" className="bg-[#0c0b0a]">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[.85fr_1.15fr] lg:gap-14 lg:px-14 lg:py-24">
          <div className="flex flex-col justify-center">
            <SectionIntro
              kicker="Find V-SQUARE"
              title="Your next visit starts here."
              body="Visit V-SQUARE on Vidhan Sabha Road, Saddu, Raipur. For collection, fabric and fitting enquiries, call the store before visiting."
              dark
            />
            <div className="mt-9 space-y-5 border-t border-white/10 pt-7">
              <div className="flex gap-4">
                <MapPin className="mt-0.5 shrink-0 text-[#d6b17c]" size={17} />
                <div>
                  <p className="text-xs font-semibold text-white/90">Address</p>
                  <p className="mt-1 max-w-sm text-xs leading-6 text-white/50">Vidhan Sabha Rd, Saddu, Raipur, Chhattisgarh 492014</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock3 className="mt-0.5 shrink-0 text-[#d6b17c]" size={17} />
                <div>
                  <p className="text-xs font-semibold text-white/90">Listed store hours</p>
                  <p className="mt-1 text-xs leading-6 text-white/50">Google Maps currently shows a 9:30 PM closing time. Call to confirm today’s hours.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="mt-0.5 shrink-0 text-[#d6b17c]" size={17} />
                <div>
                  <p className="text-xs font-semibold text-white/90">Phone</p>
                  <a href={phoneUrl} className="mt-1 inline-block text-xs text-white/55 transition hover:text-[#e3c18e]">+91 77131 72293</a>
                </div>
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={mapsUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#d4b078] px-6 text-[10px] font-bold uppercase tracking-[0.1em] text-[#17130f] transition hover:bg-[#ecd2a7]">
                Get directions <ArrowUpRight size={14} />
              </a>
              <a href={phoneUrl} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/25 px-6 text-[10px] font-bold uppercase tracking-[0.1em] text-white transition hover:border-[#d6b17c] hover:text-[#d6b17c]">
                <Phone size={14} /> Call now
              </a>
            </div>
          </div>
          <div className="min-h-[330px] overflow-hidden border border-white/10 bg-[#221e18] sm:min-h-[450px]">
            <iframe
              title="V-SQUARE location on Google Maps"
              src={mapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ minHeight: 330, border: 0, filter: "grayscale(0.55) contrast(1.05)" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#090807] px-5 py-8 text-white sm:px-8 lg:px-14">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold tracking-[0.17em]">V-SQUARE</p>
            <p className="mt-1.5 text-[9px] text-white/35">Vidhan Sabha Road · Saddu · Raipur</p>
          </div>
          <div className="flex flex-wrap items-center gap-5 text-[9px] font-semibold uppercase tracking-[0.14em] text-white/45">
            <a href="#collections" className="transition hover:text-[#d6b17c]">Collections</a>
            <a href="#experience" className="transition hover:text-[#d6b17c]">The V-SQUARE edit</a>
            <a href="#reviews" className="transition hover:text-[#d6b17c]">Reviews</a>
            <a href={mapsUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 transition hover:text-[#d6b17c]">Google Maps <ArrowUpRight size={11} /></a>
          </div>
          <p className="text-[8px] uppercase tracking-[0.17em] text-white/25">Website concept by RDS Studio</p>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-white/10 bg-[#0b0a09]/95 p-3 backdrop-blur-xl sm:hidden">
        <a href={phoneUrl} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[#d6b17c]/60 text-[10px] font-bold uppercase tracking-[0.1em] text-[#e3c18e]">
          <Phone size={14} /> Call now
        </a>
        <a href={mapsUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#d4b078] text-[10px] font-bold uppercase tracking-[0.1em] text-[#17130f]">
          <MapPin size={14} /> Directions
        </a>
      </div>
    </main>
  );
}
