export type Locale = "el" | "en";

export type SignatureGroup = "sushi" | "kitchen" | "grill" | "bar";
export type MenuCategory = "all" | "sushi" | "kitchen" | "grill" | "pasta" | "bar";

export type SignatureItem = {
  title: string;
  group: SignatureGroup;
  image: string;
};

export type MenuItem = {
  name: string;
  category: Exclude<MenuCategory, "all">;
};

export type EventItem = {
  kicker: string;
  title: string;
  detail: string;
  image: string;
};

export type Highlight = {
  kicker: string;
  title: string;
  text: string;
};

export const logoSrc = "/brand/villa-logo-trimmed.png";

export const venue = {
  name: "Villa",
  tagline: "Taste · Sip · Socialize",
  location: "Leof. Kokkinou Pirgou 156, Tympaki, Heraklion, Crete",
  address: "Λεωφ. Κόκκινου Πύργου 156, Τυμπάκι 702 00",
  phonePrimary: "694 2494413",
  phoneSecondary: "2892 051991",
  phonePrimaryHref: "+306942494413",
  phoneSecondaryHref: "+302892051991",
  instagram: "https://www.instagram.com/villa_taste_sip_socialize/",
  map: "https://maps.google.com/?q=Villa%20Mezedes%2C%20Leof.%20Kokkinou%20Pirgou%20156%2C%20Timpaki%20702%2000",
};

export const routes = {
  el: {
    home: "/",
    menu: "/menu",
    alternateHome: "/en",
    alternateMenu: "/en/menu",
    code: "EN",
  },
  en: {
    home: "/en",
    menu: "/en/menu",
    alternateHome: "/",
    alternateMenu: "/menu",
    code: "EL",
  },
} satisfies Record<Locale, { home: string; menu: string; alternateHome: string; alternateMenu: string; code: string }>;

export const copy = {
  el: {
    nav: {
      info: "Πληροφορίες",
      menu: "Menu",
      events: "Events",
      reserve: "Κράτηση",
      switchLabel: "English version",
    },
    footer: {
      menu: "Menu",
      instagram: "Instagram",
      map: "Χάρτης",
      credit: "Website by Markoulakis Digital Studio",
    },
    venue: {
      locationShort: "Λεωφ. Κόκκινου Πύργου 156",
      locationTitle: "Παναγία Πυργιώτισσα · Αγ. Τίτος",
      addressFull: "Λεωφ. Κόκκινου Πύργου 156, Τυμπάκι 702 00",
    },
    hero: {
      tagline: "Taste · Sip · Socialize",
      line: "Στο Τυμπάκι, από το δείπνο μέχρι το τελευταίο ποτό.",
    },
    highlights: [
      {
        kicker: "Χώρος",
        title: "Αυλή και μπαρ",
        text: "Τραπέζια έξω, θέσεις στο μπαρ, από τις 18:00 μέχρι τις 03:00.",
      },
      {
        kicker: "Κουζίνα",
        title: "Sushi, grill, pasta",
        text: "Πιάτα για μοίρασμα ή κανονικό δείπνο, μαγειρεμένα τη στιγμή.",
      },
      {
        kicker: "Τραπέζι",
        title: "Κρατήσεις",
        text: "Για παρέες κρατάμε ξεχωριστά τραπέζια στην αυλή.",
      },
    ] satisfies Highlight[],
    actions: {
      reserve: "Κλείσε τραπέζι",
      menu: "Δες τον κατάλογο",
      map: "Βρες μας στον χάρτη",
      instagram: "Δες το Instagram",
    },
    seo: {
      home: {
        title: "Villa Τυμπάκι | Bar, Sushi, Grill & Cocktails",
        description:
          "Το Villa στο Τυμπάκι Ηρακλείου: μπαρ, αυλή και κουζίνα με sushi, ψητά και pasta. Cocktails, events και κρατήσεις στο 694 2494413.",
      },
      menu: {
        title: "Κατάλογος | Villa Τυμπάκι",
        description:
          "Sushi, ψητά, pasta και cocktails στο Villa στο Τυμπάκι. Δες τον κατάλογο και κλείσε τραπέζι στο 694 2494413.",
      },
    },
    home: {
      statementLabel: "After dark",
      statementTitle: "Μπαρ, αυλή, τραπέζια μέχρι αργά.",
      signaturesTitle: "Signature.",
      eventsTitle: "Events.",
      locationTitle: "Πού είμαστε.",
    },
    map: {
      mainRoad: "Λεωφ. Κόκκινου Πύργου",
      titos: "Αγίου Τίτου",
      chicken: "CHICKEN TYMPAKIOY",
      villa: "Βίλλα Μεζέδες",
      venizelou: "Βενιζέλου",
      kornari: "Κορναράκη Δημ.",
      nektariou: "Αγίου Νεκταρίου",
      stefanaki: "Δημ. Στεφανάκη",
    },
    menu: {
      title: "Κατάλογος",
      signatureTitle: "Signature.",
      reserveTitle: "Κρατήσεις",
      map: "Χάρτης",
      categories: {
        all: "Όλα",
        sushi: "Sushi",
        kitchen: "Κουζίνα",
        grill: "Grill",
        pasta: "Pasta",
        bar: "Bar",
      },
    },
    signatures: [
      {
        title: "Creta Sushi",
        group: "sushi",
        image: "/villa-scenes/sushi-roll.jpg",
      },
      {
        title: "Pork Bon Fillet",
        group: "kitchen",
        image: "/villa-scenes/pork-fillet-real.jpg",
      },
      {
        title: "Yakitori Chicken",
        group: "grill",
        image: "/villa-scenes/yakitori-plate.jpg",
      },
      {
        title: "Tokyo",
        group: "bar",
        image: "/villa-scenes/tokyo-cocktail.jpg",
      },
    ] satisfies SignatureItem[],
    events: [
      {
        kicker: "Music",
        title: "Villa Nights",
        detail: "DJ sets · Κρατήσεις",
        image: "/villa-scenes/cocktail-service.jpg",
      },
      {
        kicker: "Sushi",
        title: "Sushi Nights",
        detail: "Rolls · Cocktails",
        image: "/villa-scenes/sushi-roll.jpg",
      },
      {
        kicker: "Groups",
        title: "Private Tables",
        detail: "Κατόπιν κράτησης",
        image: "/villa-scenes/event-table.jpg",
      },
    ] satisfies EventItem[],
    menuItems: [
      { name: "Creta Sushi", category: "sushi" },
      { name: "Yakitori Chicken", category: "grill" },
      { name: "Pork Bon Fillet Stroganoff", category: "kitchen" },
      { name: "Shrimp Pasta", category: "pasta" },
      { name: "Chicken Noodles", category: "kitchen" },
      { name: "Beef Burger", category: "kitchen" },
      { name: "Pork Chop Tomahawk", category: "grill" },
      { name: "Beef Chuck Steak", category: "grill" },
      { name: "Before The Main", category: "kitchen" },
      { name: "Tokyo", category: "bar" },
      { name: "Arbaroriza Negroni", category: "bar" },
      { name: "Villa Spritz", category: "bar" },
    ] satisfies MenuItem[],
  },
  en: {
    nav: {
      info: "Info",
      menu: "Menu",
      events: "Events",
      reserve: "Reserve",
      switchLabel: "Greek version",
    },
    footer: {
      menu: "Menu",
      instagram: "Instagram",
      map: "Map",
      credit: "Website by Markoulakis Digital Studio",
    },
    venue: {
      locationShort: "Leof. Kokkinou Pirgou 156",
      locationTitle: "Panagia Pyrgiotissa · Ag. Titos",
      addressFull: "Leof. Kokkinou Pirgou 156, Tympaki 702 00",
    },
    hero: {
      tagline: "Taste · Sip · Socialize",
      line: "In Tympaki, from dinner to the last drink.",
    },
    highlights: [
      {
        kicker: "Space",
        title: "Courtyard and bar",
        text: "Tables outside, seats at the bar, from 18:00 until 03:00.",
      },
      {
        kicker: "Kitchen",
        title: "Sushi, grill, pasta",
        text: "Plates to share or a proper dinner, cooked to order.",
      },
      {
        kicker: "Table",
        title: "Reservations",
        text: "For groups we keep separate tables in the courtyard.",
      },
    ] satisfies Highlight[],
    actions: {
      reserve: "Book a table",
      menu: "View the menu",
      map: "Find us on the map",
      instagram: "See our Instagram",
    },
    seo: {
      home: {
        title: "Villa Tympaki | Bar, Sushi, Grill & Cocktails",
        description:
          "Villa in Tympaki, Heraklion: bar, courtyard and kitchen with sushi, grill and pasta. Cocktails, events and reservations on +30 694 2494413.",
      },
      menu: {
        title: "Menu | Villa Tympaki",
        description:
          "Sushi, grill, pasta and cocktails at Villa in Tympaki. Browse the menu and book a table on +30 694 2494413.",
      },
    },
    home: {
      statementLabel: "After dark",
      statementTitle: "Bar, courtyard, tables until late.",
      signaturesTitle: "Signature.",
      eventsTitle: "Events.",
      locationTitle: "Where we are.",
    },
    map: {
      mainRoad: "Leof. Kokkinou Pirgou",
      titos: "Agiou Titou",
      chicken: "CHICKEN TYMPAKIOY",
      villa: "Villa Mezedes",
      venizelou: "Venizelou",
      kornari: "Kornaraki Dim.",
      nektariou: "Agiou Nektariou",
      stefanaki: "Dim. Stefanaki",
    },
    menu: {
      title: "Menu",
      signatureTitle: "Signature.",
      reserveTitle: "Reservations",
      map: "Map",
      categories: {
        all: "All",
        sushi: "Sushi",
        kitchen: "Kitchen",
        grill: "Grill",
        pasta: "Pasta",
        bar: "Bar",
      },
    },
    signatures: [
      {
        title: "Creta Sushi",
        group: "sushi",
        image: "/villa-scenes/sushi-roll.jpg",
      },
      {
        title: "Pork Bon Fillet",
        group: "kitchen",
        image: "/villa-scenes/pork-fillet-real.jpg",
      },
      {
        title: "Yakitori Chicken",
        group: "grill",
        image: "/villa-scenes/yakitori-plate.jpg",
      },
      {
        title: "Tokyo",
        group: "bar",
        image: "/villa-scenes/tokyo-cocktail.jpg",
      },
    ] satisfies SignatureItem[],
    events: [
      {
        kicker: "Music",
        title: "Villa Nights",
        detail: "DJ sets · Bookings",
        image: "/villa-scenes/cocktail-service.jpg",
      },
      {
        kicker: "Sushi",
        title: "Sushi Nights",
        detail: "Rolls · Cocktails",
        image: "/villa-scenes/sushi-roll.jpg",
      },
      {
        kicker: "Groups",
        title: "Private Tables",
        detail: "By reservation",
        image: "/villa-scenes/event-table.jpg",
      },
    ] satisfies EventItem[],
    menuItems: [
      { name: "Creta Sushi", category: "sushi" },
      { name: "Yakitori Chicken", category: "grill" },
      { name: "Pork Bon Fillet Stroganoff", category: "kitchen" },
      { name: "Shrimp Pasta", category: "pasta" },
      { name: "Chicken Noodles", category: "kitchen" },
      { name: "Beef Burger", category: "kitchen" },
      { name: "Pork Chop Tomahawk", category: "grill" },
      { name: "Beef Chuck Steak", category: "grill" },
      { name: "Before The Main", category: "kitchen" },
      { name: "Tokyo", category: "bar" },
      { name: "Arbaroriza Negroni", category: "bar" },
      { name: "Villa Spritz", category: "bar" },
    ] satisfies MenuItem[],
  },
} satisfies Record<Locale, {
  nav: { info: string; menu: string; events: string; reserve: string; switchLabel: string };
  footer: { menu: string; instagram: string; map: string; credit: string };
  venue: { locationShort: string; locationTitle: string; addressFull: string };
  hero: { tagline: string; line: string };
  highlights: Highlight[];
  actions: { reserve: string; menu: string; map: string; instagram: string };
  seo: Record<"home" | "menu", { title: string; description: string }>;
  map: {
    mainRoad: string;
    titos: string;
    chicken: string;
    villa: string;
    venizelou: string;
    kornari: string;
    nektariou: string;
    stefanaki: string;
  };
  home: {
    statementLabel: string;
    statementTitle: string;
    signaturesTitle: string;
    eventsTitle: string;
    locationTitle: string;
  };
  menu: {
    title: string;
    signatureTitle: string;
    reserveTitle: string;
    map: string;
    categories: Record<MenuCategory, string>;
  };
  signatures: SignatureItem[];
  events: EventItem[];
  menuItems: MenuItem[];
}>;

export const menuCategories: MenuCategory[] = ["all", "sushi", "kitchen", "grill", "pasta", "bar"];
