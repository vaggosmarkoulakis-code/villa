"use client";

import { useMemo, useState } from "react";
import type { CSSProperties } from "react";
import { usePointerField } from "../components/hooks/usePointerField";
import { copy, menuCategories, type Locale, type MenuCategory } from "../content";

type MenuExplorerProps = {
  locale: Locale;
};

type MenuRowProps = {
  label: string;
  name: string;
  category: string;
  index: number;
};

/** Its own component so each row gets its own pointer field for the highlight. */
function MenuRow({ label, name, category, index }: MenuRowProps) {
  const ref = usePointerField<HTMLElement>();

  return (
    <article
      className={`menu-row menu-row-${category.toLowerCase()}`}
      ref={ref}
      style={{ "--i": index } as CSSProperties}
    >
      <span>{label}</span>
      <h3>{name}</h3>
    </article>
  );
}

export function MenuExplorer({ locale }: MenuExplorerProps) {
  const [active, setActive] = useState<MenuCategory>("all");
  const t = copy[locale];

  const visibleItems = useMemo(() => {
    if (active === "all") {
      return t.menuItems;
    }

    return t.menuItems.filter((item) => item.category === active);
  }, [active, t.menuItems]);

  return (
    <section className="menu-explorer" aria-labelledby="menu-list-title">
      <div className="menu-toolbar" aria-label="Menu categories">
        {menuCategories.map((category) => (
          <button
            className={active === category ? "is-active" : undefined}
            key={category}
            type="button"
            onClick={() => setActive(category)}
            aria-pressed={active === category}
          >
            {t.menu.categories[category]}
          </button>
        ))}
      </div>

      <div className="menu-list" id="menu-list-title" key={active}>
        {visibleItems.map((item, index) => (
          <MenuRow
            key={`${item.category}-${item.name}`}
            category={item.category}
            index={index}
            label={t.menu.categories[item.category]}
            name={item.name}
          />
        ))}
      </div>
    </section>
  );
}
