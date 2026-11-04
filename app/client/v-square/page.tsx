import type { CSSProperties } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Clock3,
  MapPin,
  Phone,
  Star,
} from "lucide-react";

const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=V-SQUARE%20Vidhan%20Sabha%20Road%20Saddu%20Raipur&query_place_id=ChIJTYGEzM3nKDoR4w8tySbWcUI";
const mapsEmbedUrl =
  "https://www.google.com/maps?q=place_id:ChIJTYGEzM3nKDoR4w8tySbWcUI&output=embed";
const phoneUrl = "tel:+917713172293";

const collections = [
  {
    number: "01",
    name: "Menswear",
    detail: "Everyday style, smart separates and occasion dressing.",
    image:
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=1100&q=86",
    imageAlt: "Contemporary menswear styling",
  },
  {
    number: "02",
    name: "Womenswear",
    detail: "A considered mix of looks for everyday and special plans.",
    image:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1100&q=86",
    imageAlt: "Contemporary womenswear styling",
  },
  {
    number: "03",
    name: "Kidswear",
    detail: "Style options for the little ones in the family.",
    image:
      "https://images.unsplash.com/photo-1503919005314-30d93d07d823?auto=format&fit=crop&w=1100&q=86",
    imageAlt: "Children's clothing",
  },
  {
    number: "04",
    name: "Occasionwear",
    detail: "Suits, blazers and traditional looks for important moments.",
    image:
      "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?auto=format&fit=crop&w=1100&q=86",
    imageAlt: "Formal occasionwear",
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
    label: "Latest from the store",
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
        backgroundImage: "linear-gradient(180deg, transparent 55%, rgba(0,0,0,.28)), url(" + src + ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        ...style,
      }}
    />
  );
}

function SectionHeading({
  label,
  title,
  text,
  light = false,
}: {
  label: string;
  title: string;
  text?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      <p
        className={
          "text-[10px] font-bold uppercase tracking-[0.24em] " +
          (light ? "text-white/45" : "text-[#9a6049]")
        }
      >
        {label}
      </p>
      <h2
        className={
          "mt-4 font-serif text-4xl leading-[1.02] tracking-[-0.045em] sm:text-5xl lg:text-[3.7rem] " +
          (light ? "text-white" : "text-[#22201d]")
        }
      >
        {title}
      </h2>
      {text ? (
        <p
          className={
            "mt-5 max-w-xl text-sm leading-7 sm:text-base " +
            (light ? "text-white/60" : "text-[#6e6962]")
          }
        >
          {text}
        </p>
      ) : null}
    </div>
  );
}

export const metadata = {
  title: "V-SQUARE | Clothing Store in Saddu, Raipur",
  description:
    "Explore menswear, womenswear, kidswear and occasionwear at V-SQUARE, Vidhan Sabha Road, Saddu, Raipur.",
};

export default function VSquareWebsite() {
  return (
    <main className="vsquare-site min-h-screen overflow-hidden bg-[#f6f3ed] pb-24 text-[#22201d] sm:pb-0">
      <div className="bg-[#24221f] px-4 py-2.5 text-white sm:px-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 text-[9px] font-semibold uppercase tracking-[0.16em] sm:text-[10px]">
          <span className="truncate text-white/65">V-SQUARE · Saddu, Raipur</span>
          <span className="hidden shrink-0 text-white/85 sm:block">Website concept · RDS Studio</span>
        </div>
      </div>

      <div className="border-b border-black/[0.08] bg-[#eee9e0]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-5 gap-y-2 px-4 py-2.5 text-[10px] sm:px-6 sm:text-[11px]">
          <div className="flex items-center gap-2 text-[#5f5a53]">
            <MapPin size={12} />
            <span>Vidhan Sabha Road, Saddu, Raipur</span>
          </div>
          <div className="flex items-center gap-3 text-[#5f5a53]">
            <span className="inline-flex items-center gap-1.5 font-semibold">
              <Star size={12} className="fill-[#a66d4f] text-[#a66d4f]" />
              4.8 on Google
            </span>
            <span className="h-3 w-px bg-black/15" />
            <span>300+ reviews</span>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-black/[0.07] bg-[#f6f3ed]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:py-5">
          <a href="#top" className="group flex shrink-0 items-center gap-3" aria-label="V-SQUARE home">
            <span className="flex size-10 items-center justify-center border border-[#292622] text-lg font-serif sm:size-11">
              V
            </span>
            <span>
              <span className="block text-[17px] font-black leading-none tracking-[0.16em] sm:text-[19px]">
                V-SQUARE
              </span>
              <span className="mt-1 block text-[8px] font-semibold uppercase tracking-[0.28em] text-[#8b8176]">
                Style · Fabric · Occasion
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
            <a href="#collections" className="text-xs font-semibold text-[#625d56] transition hover:text-[#a15f47]">Collections</a>
            <a href="#occasionwear" className="text-xs font-semibold text-[#625d56] transition hover:text-[#a15f47]">Occasionwear</a>
            <a href="#store" className="text-xs font-semibold text-[#625d56] transition hover:text-[#a15f47]">The store</a>
          </nav>

          <a
            href={mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-10 items-center gap-1.5 rounded-full bg-[#292622] px-3.5 text-[9px] font-bold text-white transition hover:bg-[#a15f47] sm:min-h-11 sm:gap-2 sm:px-5 sm:text-xs"
          >
            Visit store <ArrowUpRight size={14} />
          </a>
        </div>
      </header>

      <section id="top" className="relative border-b border-black/[0.08]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:min-h-[650px] lg:grid-cols-[0.88fr_1.12fr]">
          <div className="order-2 flex flex-col justify-center px-5 pb-12 pt-9 sm:px-8 sm:pb-16 sm:pt-12 lg:order-1 lg:px-12 lg:py-24">
            <p className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.24em] text-[#9b634c]">
              <span className="h-px w-8 bg-[#9b634c]" />
              Clothing for every chapter
            </p>
            <h1 className="sr-only mt-7 max-w-[620px] font-serif text-[3.55rem] leading-[0.94] tracking-[-0.065em] lg:not-sr-only sm:text-7xl lg:text-[5.8rem]">
              A wardrobe for every version of you.
            </h1>
            <p className="mt-7 max-w-lg text-sm leading-7 text-[#6f6961] sm:text-base sm:leading-8">
              Discover menswear, womenswear and kidswear — from everyday
              essentials to polished looks for the moments that matter.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#collections"
                className="inline-flex min-h-12 items-center justify-center gap-3 bg-[#292622] px-6 text-xs font-bold text-white transition hover:bg-[#9b634c]"
              >
                Explore collections <ArrowRight size={15} />
              </a>
              <a
                href={phoneUrl}
                className="inline-flex min-h-12 items-center justify-center gap-2 border border-black/15 px-6 text-xs font-bold text-[#292622] transition hover:border-[#9b634c] hover:text-[#9b634c]"
              >
                <Phone size={14} /> Call the store
              </a>
            </div>
            <div className="mt-12 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#90877c]">
              <span className="h-px w-10 bg-[#b8aea1]" />
              Find your fit in Saddu, Raipur
            </div>
          </div>

          <div className="order-1 relative min-h-[470px] overflow-hidden bg-[#d9d0c5] sm:min-h-[570px] lg:order-2 lg:min-h-full">
            <Photo
              src="https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=1600&q=88"
              alt="Editorial menswear look"
              className="absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/5" />
            <div className="absolute bottom-6 left-5 right-5 flex items-end justify-between gap-4 text-white sm:bottom-9 sm:left-9 sm:right-9">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-white/70">The V-SQUARE edit · Raipur</p>
                <p aria-hidden="true" className="mt-3 max-w-[340px] font-serif text-[2.55rem] leading-[0.99] tracking-[-0.045em] sm:text-5xl lg:hidden">A wardrobe for every version of you.</p>
                <p className="mt-2 max-w-sm font-serif text-xl leading-tight text-white/90 sm:text-4xl">Everyday ease. Occasion-ready style.</p>
              </div>
              <span className="hidden border border-white/40 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.16em] backdrop-blur-sm sm:inline-flex">
                Raipur
              </span>
            </div>
            <div className="absolute right-5 top-5 border border-white/50 bg-black/10 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-sm sm:right-8 sm:top-8">
              V / 01
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/[0.08] bg-[#eae4da]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-5 px-5 py-7 sm:grid-cols-4 sm:px-8 lg:px-12">
          {[
            ["4.8 / 5", "Google rating"],
            ["300+", "Customer reviews"],
            ["For all ages", "Men · Women · Kids"],
            ["9:30 PM", "Listed closing time"],
          ].map(([value, label]) => (
            <div key={label} className="border-l border-black/10 pl-4 first:border-0 first:pl-0 sm:first:border-l sm:first:pl-4">
              <p className="font-serif text-2xl tracking-tight text-[#2a2723] sm:text-3xl">{value}</p>
              <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#81786d] sm:text-[10px]">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="collections" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
        <div className="flex flex-col justify-between gap-7 sm:flex-row sm:items-end">
          <SectionHeading
            label="Explore the collection"
            title="Find the look that feels like you."
            text="A family clothing destination with options across everyday dressing, smart looks and special occasions."
          />
          <a href={phoneUrl} className="inline-flex w-fit items-center gap-2 border-b border-[#9b634c] pb-2 text-xs font-bold text-[#7d4c3a] transition hover:gap-3">
            Ask about availability <ArrowRight size={14} />
          </a>
        </div>

        <div className="vsquare-collection-rail -mx-5 mt-9 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-3 sm:mx-0 sm:mt-10 sm:grid sm:grid-cols-2 sm:gap-4 sm:overflow-visible sm:px-0 sm:pb-0 lg:mt-14 lg:grid-cols-4">
          {collections.map((item) => (
            <a
              key={item.number}
              href={item.name === "Occasionwear" ? "#occasionwear" : "#store"}
              className="group relative block w-[78vw] max-w-[340px] shrink-0 snap-start overflow-hidden bg-[#ddd4c9] sm:w-auto sm:max-w-none"
            >
              <Photo
                src={item.image}
                alt={item.imageAlt}
                className="aspect-[0.9] w-full transition duration-700 group-hover:scale-[1.035] sm:aspect-[0.78]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-bold tracking-[0.18em] text-white/65">{item.number}</span>
                  <ArrowUpRight size={17} className="transition group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>
                <h3 className="mt-7 font-serif text-3xl tracking-[-0.035em] sm:text-[2rem]">{item.name}</h3>
                <p className="mt-2 max-w-[230px] text-[11px] leading-5 text-white/75">{item.detail}</p>
              </div>
            </a>
          ))}
        </div>
        <p className="mt-4 text-[10px] leading-5 text-[#958c80]">
          Collection photographs are illustrative; ask the store about current styles and availability.
        </p>
      </section>

      <section id="occasionwear" className="scroll-mt-24 bg-[#292622] text-white">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-[1.02fr_0.98fr]">
          <div className="relative min-h-[390px] overflow-hidden sm:min-h-[520px]">
            <Photo
              src="https://images.unsplash.com/photo-1593032465175-481ac7f401a0?auto=format&fit=crop&w=1400&q=86"
              alt="Formal suit and occasionwear inspiration"
              className="absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <span className="absolute bottom-6 left-6 text-[9px] font-bold uppercase tracking-[0.2em] text-white/75 sm:bottom-9 sm:left-9">
              Occasionwear · The finishing touch
            </span>
          </div>
          <div className="flex flex-col justify-center px-5 py-14 sm:px-10 sm:py-20 lg:px-14 xl:px-20">
            <SectionHeading
              label="For the moments that matter"
              title="Make the occasion yours."
              text="From sharp suits and blazers to traditional occasion looks, discover styles for celebrations, gatherings and the days you want to remember."
              light
            />
            <div className="mt-9 grid grid-cols-2 gap-x-5 gap-y-4 border-t border-white/15 pt-6">
              {["Suits & blazers", "Wedding occasions", "Smart formals", "Traditional looks"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-[11px] font-medium text-white/75">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#c08a6d]" />
                  {item}
                </div>
              ))}
            </div>
            <a
              href={phoneUrl}
              className="mt-9 inline-flex min-h-12 w-fit items-center gap-3 border border-white/30 px-5 text-xs font-bold transition hover:border-white hover:bg-white hover:text-[#292622]"
            >
              Enquire about occasionwear <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20 lg:px-12 lg:py-28">
        <div>
          <SectionHeading
            label="Fabric & finish"
            title="Good style starts with the details."
            text="Explore suiting and shirting fabric options, and speak with the store team about what is currently available."
          />
          <div className="mt-8 border-t border-black/10 pt-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#8c8176]">At V-SQUARE</p>
            <p className="mt-2 max-w-md text-sm leading-7 text-[#6e6962]">
              A selection that brings together ready-to-wear clothing, fabric choices and looks for different occasions.
            </p>
            <a href={phoneUrl} className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-[#89543e] hover:gap-3">
              Call to ask about fabrics <ArrowRight size={14} />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-[1.08fr_.92fr] gap-3 sm:gap-4">
          <Photo
            src="https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=1000&q=86"
            alt="Close-up of folded clothing and fabric textures"
            className="aspect-[0.76] bg-[#ded5ca]"
          />
          <div className="flex flex-col gap-3 sm:gap-4">
            <Photo
              src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=86"
              alt="Contemporary fashion editorial"
              className="aspect-[1.18] flex-1 bg-[#ded5ca]"
            />
            <div className="flex flex-1 flex-col justify-between bg-[#eae4da] p-4 sm:p-6">
              <span className="text-[9px] font-bold uppercase tracking-[0.17em] text-[#8b604c]">Style note</span>
              <p className="mt-5 font-serif text-2xl leading-tight tracking-[-0.035em] text-[#292622] sm:text-3xl">
                The right detail changes the whole look.
              </p>
              <span className="mt-5 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#93887c]">V-SQUARE · Raipur</span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-black/[0.08] bg-[#eae4da]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.65fr_1.35fr] lg:items-center lg:gap-16 lg:px-12">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#9b634c]">A local favourite</p>
            <p className="mt-4 font-serif text-6xl tracking-[-0.06em] text-[#292622] sm:text-7xl">4.8<span className="ml-2 text-2xl text-[#a16b50]">/ 5</span></p>
            <div className="mt-3 flex gap-1 text-[#a66d4f]">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} size={15} className="fill-current" />
              ))}
            </div>
            <p className="mt-3 text-xs text-[#81786d]">Based on 300+ public customer reviews.</p>
          </div>
          <div className="border-l border-black/10 pl-6 sm:pl-10">
            <p className="font-serif text-2xl leading-[1.25] tracking-[-0.025em] text-[#39342e] sm:text-4xl">
              “Stylish collection, great options for menswear and a helpful team.”
            </p>
            <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#8c8176]">
              A summary of recurring public review themes
            </p>
            <p className="mt-3 max-w-xl text-xs leading-6 text-[#7a7168]">
              Shoppers frequently mention the clothing selection, fabric quality and value. Individual experiences may vary.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            label="Inside V-SQUARE"
            title="A closer look at the store."
            text="A few views from the store's public Google Maps photo listing."
          />
          <a
            href={mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center gap-2 text-xs font-bold text-[#89543e] hover:gap-3"
          >
            View on Google Maps <ArrowUpRight size={14} />
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
                className={
                  "aspect-[0.82] overflow-hidden bg-[#ded5ca] transition duration-500 group-hover:scale-[1.015] " +
                  (index === 0 ? "sm:aspect-[0.9]" : "")
                }
              />
              <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.13em] text-[#766e64]">
                {photo.label}
              </p>
            </a>
          ))}
        </div>
      </section>

      <section id="store" className="scroll-mt-24 bg-[#292622] text-white">
        <div className="mx-auto grid max-w-7xl gap-9 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14 lg:px-12">
          <div className="flex flex-col justify-center">
            <SectionHeading
              label="Come by and explore"
              title="Your next favourite look is closer than you think."
              text="Visit V-SQUARE on Vidhan Sabha Road, Saddu, Raipur. Call the store for current collection and availability details."
              light
            />
            <div className="mt-9 space-y-5 border-t border-white/15 pt-7">
              <div className="flex gap-4">
                <MapPin className="mt-0.5 shrink-0 text-[#c08a6d]" size={18} />
                <div>
                  <p className="text-xs font-bold">Find the store</p>
                  <p className="mt-1 max-w-sm text-xs leading-6 text-white/55">
                    Vidhan Sabha Rd, Saddu, Raipur, Chhattisgarh 492014
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock3 className="mt-0.5 shrink-0 text-[#c08a6d]" size={18} />
                <div>
                  <p className="text-xs font-bold">Store hours</p>
                  <p className="mt-1 text-xs leading-6 text-white/55">
                    Google Maps currently lists closing time as 9:30 PM. Please call ahead for today's hours.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="mt-0.5 shrink-0 text-[#c08a6d]" size={18} />
                <div>
                  <p className="text-xs font-bold">Call V-SQUARE</p>
                  <a href={phoneUrl} className="mt-1 inline-block text-xs text-white/65 transition hover:text-white">
                    +91 77131 72293
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#f2ede5] px-6 text-xs font-bold text-[#292622] transition hover:bg-white"
              >
                Get directions <ArrowUpRight size={14} />
              </a>
              <a
                href={phoneUrl}
                className="inline-flex min-h-12 items-center justify-center gap-2 border border-white/25 px-6 text-xs font-bold text-white transition hover:bg-white/10"
              >
                <Phone size={14} /> Call now
              </a>
            </div>
          </div>
          <div className="min-h-[310px] overflow-hidden bg-[#ded5ca] sm:min-h-[430px]">
            <iframe
              title="V-SQUARE location on Google Maps"
              src={mapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ minHeight: 310, border: 0, filter: "grayscale(0.45) contrast(0.96)" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <footer className="bg-[#1e1c19] px-5 py-8 text-white sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-black tracking-[0.18em]">V-SQUARE</p>
            <p className="mt-1 text-[10px] text-white/40">Vidhan Sabha Road · Saddu · Raipur</p>
          </div>
          <div className="flex flex-wrap items-center gap-5 text-[10px] font-semibold text-white/55">
            <a href="#collections" className="transition hover:text-white">Collections</a>
            <a href="#occasionwear" className="transition hover:text-white">Occasionwear</a>
            <a href={mapsUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 transition hover:text-white">
              Google Maps <ArrowUpRight size={12} />
            </a>
          </div>
          <p className="text-[9px] uppercase tracking-[0.12em] text-white/30">Website concept by RDS Studio</p>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-[60] grid grid-cols-2 gap-2 border-t border-black/10 bg-[#f6f3ed]/95 px-3 pt-3 pb-[calc(env(safe-area-inset-bottom)+0.75rem)] shadow-[0_-10px_35px_rgba(35,30,25,.08)] backdrop-blur-xl md:hidden">
        <a
          href={phoneUrl}
          className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#292622] px-3 text-[11px] font-bold text-white"
        >
          <Phone size={15} /> Call store
        </a>
        <a
          href={mapsUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-12 items-center justify-center gap-2 border border-[#292622]/25 bg-transparent px-3 text-[11px] font-bold text-[#292622]"
        >
          <MapPin size={15} /> Get directions
        </a>
      </div>
    </main>
  );
}
